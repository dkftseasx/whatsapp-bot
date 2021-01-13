const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (seasx = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('SEASX BOT', { font: 'block', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[Admin]'), color('SEASX', 'yellow'))
    console.log(color('[>>>]'), color('BOT Started!', 'green'))

    // Mempertahankan sesi agar tetap nyala
    seasx.onStateChanged((state) => {
        console.log(color('[>>>]', 'red'), state)
        if (state === 'CONFLICT' || state === 'UNLAUNCHED') seasx.forceRefocus()
    })

    // ketika bot diinvite ke dalam group
    seasx.onAddedToGroup(async (chat) => {
        const groups = await seasx.getAllGroups()
        // kondisi ketika batas group bot telah tercapai,ubah di file settings/setting.json
        if (groups.length > groupLimit) {
            await seasx.sendText(chat.id, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`).then(() => {
                seasx.leaveGroup(chat.id)
                seasx.deleteChat(chat.id)
            })
        } else {
            // kondisi ketika batas member group belum tercapai, ubah di file settings/setting.json
            if (chat.groupMetadata.participants.length < memberLimit) {
                await seasx.sendText(chat.id, `Sorry, BOT comes out if the group members do not exceed ${memberLimit} people`).then(() => {
                    seasx.leaveGroup(chat.id)
                    seasx.deleteChat(chat.id)
                })
            } else {
                await seasx.simulateTyping(chat.id, true).then(async () => {
                    await seasx.sendText(chat.id, `Hai minna~, Im seasx BOT. To find out the commands on this bot type ${prefix}menu`)
                })
            }
        }
    })

    // ketika seseorang masuk/keluar dari group
    seasx.onGlobalParicipantsChanged(async (event) => {
        const host = await seasx.getHostNumber() + '@c.us'
        // kondisi ketika seseorang diinvite/join group lewat link
        if (event.action === 'add' && event.who !== host) {
            await seasx.sendTextWithMentions(event.chat, `Hello, Welcome to the group @${event.who.replace('@c.us', '')} \n\nHave fun with us✨`)
        }
        // kondisi ketika seseorang dikick/keluar dari group
        if (event.action === 'remove' && event.who !== host) {
            await seasx.sendTextWithMentions(event.chat, `Good bye @${event.who.replace('@c.us', '')}, We'll miss you✨`)
        }
    })

    seasx.onIncomingCall(async (callData) => {
        // ketika seseorang menelpon nomor bot akan mengirim pesan
        await seasx.sendText(callData.peerJid, 'Maaf sedang tidak bisa menerima panggilan.\n\n-bot')
            .then(async () => {
                // bot akan memblock nomor itu
                await seasx.contactBlock(callData.peerJid)
            })
    })

    // ketika seseorang mengirim pesan
    seasx.onMessage(async (message) => {
        seasx.getAmountOfLoadedMessages() // menghapus pesan cache jika sudah 3000 pesan.
            .then((msg) => {
                if (msg >= 3000) {
                    console.log('[seasx]', color(`Loaded Message Reach ${msg}, cuting message cache...`, 'yellow'))
                    seasx.cutMsgCache()
                }
            })
        HandleMsg(seasx, message)

    })

    // Message log for analytic
    seasx.onAnyMessage((anal) => {
        messageLog(anal.fromMe, anal.type)
    })
}

//create session
create(options(true, start))
    .then((seasx) => start(seasx))
    .catch((err) => new Error(err))
