const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6288210180505'] //ur owner number
global.ownernomer = "6288210180505" //ur owner number2
global.ownername = "rizal -dev" //ur owner name
global.grup = "https://chat.whatsapp.com/IJmZLZvXms9D6v2yf3EzGW" //ur group link
global.yt = "○  https://youtube.com/@ADITYA-OFFC?si=spBfXZTekpoNWolj" //ur website link
global.socialm = "" //ur github or insta name
global.location = "Indonesia" //ur location

//payment ----- lu tau lah diubah jadi apaan
global.dana = "088210180505"
global.ovo = "088210180505"
global.gopay = "088210180505"
global.saweria = "gak ada"

//new
global.ownergc = "-"
global.botname = "⚉ BOT CREATE PANEL X STORE RIZAl-DEV 🚥"
global.ownerNumber = ["6288210180505@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@ADITYA-OFFC?si=spBfXZTekpoNWolj"
global.themeemoji = '🪀'
global.wm = "rizal -dev"
global.packname = "Sticker by rizal - Botz"
global.author = "rizal\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.domain = 'https://rizalzee.serverku.tech' // Isi Domain Lu
global.apikey = 'ptla_Q20S3uRFQXRNpBvwsdAdZOeGX4fQ9NTbimPsRw3OrQI' // Isi Apikey Plta Lu
global.capikey = 'ptlc_wJVcaZFngo1g1Z0YVhxWxPpUdDgE17ExNFdeMGtBqvn' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipake
global.location = '1' // id location

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumbmenu ='https://telegra.ph/file/a6dc7ff29dac59921f7cb.png'

global.thumb = { url: 'https://telegra.ph/file/a6dc7ff29dac59921f7cb.png' }
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

global.listharga = `

𝗟𝗜𝗦𝗧 𝗛𝗔𝗥𝗚𝗔 𝗣𝗔𝗡𝗘𝗟 𝗥𝗨𝗡 𝗕𝗢𝗧 🚥

*LIST PRODUK PANEL 🚥*
------------------------------------
> _📮RAM 1 GB CPU 1K / BULAN_
> _📮RAM 2 GB CPU 2K / BULAN_
> _📮RAM 3 GB CPU 3K / BULAN_
> _📮RAM 4 GB CPU 4K  / BULAN_
> _📮RAM 5 GB CPU 5K / BULAN_
> _📮RAM 6 GB CPU 6K / BULAN_
> _📮RAM 7 GB CPU 7K / BULAN_
> _📮RAM 8 GB CPU 8K / BULAN_
> _📮RAM & CPU UNLI 10K / BULAN_

╔┈「 *KEUNTUNGAN PANEL ?* 」
╎▪︎ UNTUK RUN BOT
╎▪︎ BISA RUN 24 JAM
╎▪︎ TIDAK MEMBOROS KOUTA
╎▪︎ BOT MENJADI FASTRESPON
╎▪︎ WEB PANEL CLOSE BOT TETAP ON
╎▪︎ SERVER TERJAGA
╎▪︎ GA MENUHIN MEMORI
╎▪︎ ANTI DELAY
╚----------------------------------------------

> minat? : 6288210180505

> Link group👇
 https://chat.whatsapp.com/CAaHTC4unnCCcZN70qRRgZ

> TESTI saluran👇

https://whatsapp.com/channel/0029VaS3ceQEKyZLQCKNc71b
`

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
