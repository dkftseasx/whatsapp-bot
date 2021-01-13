const fs = require('fs-extra')
const {
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/pakforlay/whatsapp-botz

Instagram: https://instagram.com/yaelahdo/

Best regards, yaelahdo.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Sebelum make, bot nya siapa tau kakak pengen donasi.
Bisa lewat :

OVO : *085875550123*
DANA : *085875550123*
GOPAY : *085875550123*
BCA : *0300919626*
A/N ANDHIKA DWI MAULANA

PERATURAN BOT.
DILARANG KERAS TELFON/VC ATAU KAKAK DIBLOKIR, KARNA BOT NYA UDAH DI PROGRAM OTOMATIS.

Berikut adalah beberapa fitur yang ada pada bot ini!✨

Creator:
[ + ] *${prefix}sticker*
[ + ] *${prefix}stickergif*
[ + ] *${prefix}stickergiphy*
[ + ] *${prefix}meme*
[ + ] *${prefix}quotemaker*
[ + ] *${prefix}nulis*

Islam:
[ + ] *${prefix}infosurah*
[ + ] *${prefix}surah*
[ + ] *${prefix}tafsir*
[ + ] *${prefix}ALaudio*
[ + ] *${prefix}jsolat*

Download:
[ + ] *${prefix}tiktok*
└ Mendownload Video Tiktok Tanpa Watermark
[ + ] *${prefix}insta*
└ Mendownload Video dan Images Instagram
[ + ] *${prefix}ytmus*
└ Mendownload Audio dari Youtube
[ + ] *${prefix}ytvid*
└ Mendownload Video dari Youtube
[ + ] *${prefix}twimg*
└ Mengunduh Photo dari twitter
[ + ] *${prefix}twvid*
└ Mengunduh Video dari twitter

( Tolong untuk fiture twitter jangan dipake download yg aneh - aneh )

Primbon:
[ + ] *${prefix}artinama*
[ + ] *${prefix}cekjodoh*

Search Any:
[ + ] *${prefix}images*
[ + ] *${prefix}sreddit*
[ + ] *${prefix}resep*
[ + ] *${prefix}wiki*
[ + ] *${prefix}cuaca*
[ + ] *${prefix}chord*
[ + ] *${prefix}lirik*
[ + ] *${prefix}ss*
[ + ] *${prefix}play*
[ + ] *${prefix}whatanime*

Random Teks:
[ + ] *${prefix}fakta*
[ + ] *${prefix}pantun*
[ + ] *${prefix}katabijak*
[ + ] *${prefix}quote*

Random Images:
[ + ] *${prefix}anime*
[ + ] *${prefix}kpop*
[ + ] *${prefix}memes*

Lain-lain:
[ + ] *${prefix}tts*
[ + ] *${prefix}translate*
[ + ] *${prefix}resi*
[ + ] *${prefix}covidindo*
[ + ] *${prefix}ceklokasi*
[ + ] *${prefix}shortlink*
[ + ] *${prefix}bapakfont*

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

// exports.textAdmin = () => {
//     return `
// ⚠ [ *Admin Group Only* ] ⚠ 
// Berikut adalah fitur admin grup yang ada pada bot ini!

// [ + ] *${prefix}add*
// [ + ] *${prefix}kick* @tag
// [ + ] *${prefix}promote* @tag
// [ + ] *${prefix}demote* @tag
// [ + ] *${prefix}tagall*
// [ + ] *${prefix}del*

// _-_-_-_-_-_-_-_-_-_-_-_-_-_

// ⚠ [ *Owner Group Only* ] ⚠
// Berikut adalah fitur owner grup yang ada pada bot ini!
// [ + ] *${prefix}kickall*
// *Owner Group adalah pembuat grup.*
// `
// }

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

OVO : *085875550123*
DANA : *085875550123*
GOPAY : *085875550123*
BCA : *0300919626*
A/N ANDHIKA DWI MAULANA

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
