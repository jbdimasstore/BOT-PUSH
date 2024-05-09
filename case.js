require('./settings')
require('./src/rynxd')
const {
    modul
} = require('./module')
const {
    os,
    axios,
    baileys,
    chalk,
    cheerio,
    child_process,
    crypto,
    cookie,
    FormData,
    FileType,
    fetch,
    fs,
    fsx,
    ffmpeg,
    Jimp,
    PhoneNumber,
    process,
    moment,
    ms,
    speed,
    syntaxerror,
    util,
    openai
} = modul
const {
    exec,
    spawn,
    execSync
} = child_process
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType
} = baileys
const {
    clockString,
    parseMention,
    formatp,
    tanggal,
    getTime,
    isUrl,
    sleep,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    reSize,
    generateProfilePicture,
    getRandom
} = require('./lib/myfunc')
const {
    color,
    bgcolor
} = require('./lib/color')
const {
    uptotelegra
} = require('./lib/upload')
const {
    TelegraPh,
    UploadFileUgu,
    webp2mp4File,
    floNime
} = require('./lib/uploader')
const user = JSON.parse(fs.readFileSync('./database/user.json'))



const testimoni = JSON.parse(fs.readFileSync('./database/testimoni.json'))

module.exports = ryn = async (ryn, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation: (m.mtype == 'imageMessage') ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId: (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text): ''
        const budy = (typeof m.text == 'string' ? m.text: '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]: "": prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation: (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption: (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption: (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId: (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId: (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId: (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId: ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation: (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption: (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption: (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ryn.decodeJid(ryn.user.id)
        const isOwner = [botNumber,
            ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net',`${mynum}@s.whatsapp.net`).includes(m.sender)
        const XeonTheDeveloper = m.sender == botNumber ? true: false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted: m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isGroup = from.endsWith('@g.us')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant: m.participant): m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await ryn.groupMetadata(m.chat).catch(e => {}): ''
        const groupName = m.isGroup ? groupMetadata.subject: ''
        const participants = m.isGroup ? await groupMetadata.participants: ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id): ''
        const groupOwner = m.isGroup ? groupMetadata.owner: ''
        const groupMembers = m.isGroup ? groupMetadata.participants: ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber): false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender): false
        const isUser = user.includes(sender)
        const banUser = await ryn.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender): false
        const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender]: [])])]
        const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid: []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '': ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply: mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0]: mentionByReply ? mentionByReply: q ? numberQuery: false
        const isEval = body.startsWith('=>')
        const userss = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        const resel = JSON.parse(fs.readFileSync('./database/reseller.json').toString())
        const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
       const isSeler = [botNumber, ...resel].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const Qris = fs.readFileSync('./src/image/qris.jpg')
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var xeonytimewisher = `Selamat Malam ${pushname} 🌌`
        }
        if (time2 < "19:00:00") {
            var xeonytimewisher = `Selamat Malam ${pushname} 🌃`
        }
        if (time2 < "18:00:00") {
            var xeonytimewisher = `Selamat Malam ${pushname} 🌃`
        }
        if (time2 < "15:00:00") {
            var xeonytimewisher = `Selamat Siang ${pushname} 🌅`
        }
        if (time2 < "10:00:00") {
            var xeonytimewisher = `Selamat Pagi ${pushname} 🌄`
        }
        if (time2 < "04:00:00") {
            var xeonytimewisher = `Selamat Subuh ${pushname} 🌄`
        }
        async function loading () {
            var rynofc = [
                "⌛10%",
                "⏳30%",
                "⌛50%",
                "⏳80%",
                "⌛100%",
                "Loading Selesai..."
            ]
            let {
                key
            } = await ryn.sendMessage(from, {
                    text: 'ʟᴏᴀᴅɪɴɢ...'
                })//Pengalih isu

            for (let i = 0; i < rynofc; i++) {
                /*await delay(10)*/
                await ryn.sendMessage(from, {
                    text: rynofc[i], edit: key
                }); //PESAN LEPAS
            }
        }
        let d = new Date(new Date + 3600000)
        let locale = 'id'
        let weton = ['Pahing',
            'Pon',
            'Wage',
            'Kliwon',
            'Legi'][Math.floor(d / 84600000) % 5]
        let week = d.toLocaleDateString(locale, {
            weekday: 'long'
        })
        let date = d.toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
        const isContacts = contacts.includes(sender)

        if (!ryn.public) {
            if (!isOwner) return
        }

        //Fake
        const ftroli = {
            key: {
                fromMe: false,
                "participant": "0@s.whatsapp.net",
                "remoteJid": "status@broadcast"
            },
            "message": {
                orderMessage: {
                    itemCount: 2022,
                    status: 200,
                    thumbnail: thumb,
                    surface: 200,
                    message: botname,
                    orderTitle: ownername,
                    sellerJid: '0@s.whatsapp.net'
                }},
            contextInfo: {
                "forwardingScore": 999,
                "isForwarded": true
            },
            sendEphemeral: true
        }
const treply=(teks) =>{
    ryn.sendMessage(from, { text: teks , contextInfo: { mentionedJid: parseMention(teks), forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363200015845017@newsletter', serverMessageId: 103, newsletterName: '⌜ RynXD || WhatsApp ⌟'}, "externalAdReply": {"title": `${botname}`,"body": `© ʀʏɴxᴅ`, mediaType: 1, renderLargerThumbnail: false, "previewType": "PHOTO","thumbnailUrl": `${thumbmenu}`,"thumbnail": thumb,"sourceUrl": `${grup}`}}}, {
                quoted: m
            })
        }

const reply = (teks) => {
            ryn.sendMessage(from, { text: teks, contextInfo:{ mentionedJid: parseMention(teks), "forwardingScore": 1,
      "isForwarded": true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200015845017@newsletter',
      serverMessageId: 103,
      newsletterName: 'RynXD',
    },"externalAdReply": {"title": `${botname}`,"body": `© ʀʏɴxᴅ`, mediaType: 1, renderLargerThumbnail: false, "previewType": "PHOTO","thumbnailUrl": `${thumbmenu}`,"thumbnail": thumb,"sourceUrl": `${grup}`}}}, {
                quoted: m
            })
        }

        
        if (isCmd && isBanned) {
            return
        }

        let list = []
        for (let i of owner) {
            list.push({
                displayName: await ryn.getName(i),
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ryn.getName(i)}\nFN:${await ryn.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
            })
        }
        //chat counter (console log)
        if (isCmd && m.isGroup) {
            console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Group Chat"), chalk.bold('[' + args.length + ']'));
        }

        if (isCmd && !m.isGroup) {
            console.log(chalk.bold.rgb(255, 178, 102)('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), chalk.bold.rgb(153, 255, 153)(command), chalk.bold.rgb(204, 204, 0)("from"), chalk.bold.rgb(153, 255, 204)(pushname), chalk.bold.rgb(204, 204, 0)("in"), chalk.bold.rgb(255, 178, 102)("Private Chat"), chalk.bold('[' + args.length + ']'));
        }

        if (isCmd && !isUser) {
            user.push(sender)
            fs.writeFileSync('./database/user.json', JSON.stringify(user, null, 2))
        }

        ryn.sendPresenceUpdate('unavailable', from)


        async function sendrynMessage(chatId, message, options = {}) {
            let generate = await generateWAMessage(chatId, message, options)
            let type2 = getContentType(generate.message)
            if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
            if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
            return await ryn.relayMessage(chatId, generate.message, {
                messageId: generate.key.id
            })
        }

        for (let Testimonii of testimoni) {
            if (budy === Testimonii) {
                let imagebuffy = fs.readFileSync(`./database/image/${Testimonii}.jpg`)
                ryn.sendMessage(m.chat, {
                    image: imagebuffy
                }, {
                    quoted: m
                })
            }
        }

        /*try {
ppuser = await ryn.profilePictureUrl(sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}*/
        //menu thingy
        const timestamp = speed()
        const latensi = speed() - timestamp
        const mark = "0@s.whatsapp.net"

        switch (command) {
            case 'menu': {
                let ownernya = ownernomer + '@s.whatsapp.net'
                let me = m.sender
                let timestampe = speed()
                let latensie = speed() - timestampe
                //const version = require("baileys/package.json").version
                const owned = `${ownernomer}@s.whatsapp.net`
                const gacor = `${xeonytimewisher}

𝗜𝗡𝗙𝗢 𝗕𝗢𝗧
𝗠𝗼𝗱𝗲 : ${ryn.public ? 'Public': `Self`},
𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗢𝘄𝗻𝗲𝗿 : @${owned.split("@")[0]}🎖️

*━─━[ 𝗠𝗘𝗡𝗨 ]━─━*

> *AI MENU*
々 ${prefix}ai

𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 🚥
> 々 ${prefix}self
> 々 ${prefix}publik
> 々 ${prefix}join
> 々 ${prefix}leave
> 々 ${prefix}hidetag
> 々 ${prefix}setppbot
> 々 ${prefix}addreseller
> 々 ${prefix}delreseller
> 々 ${prefix}listreseller
> 々 ${prefix}panelmenu
> 々 ${prefix}pushmenu

𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 🚥
> 々 ${prefix}sticker
> 々 ${prefix}remini
> 々 ${prefix}tiktok
> 々 ${prefix}tourl
> 々 ${prefix}toimg

𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨 🚥
> 々 ${prefix}proses
> 々 ${prefix}done
> 々 ${prefix}tunda
> 々 ${prefix}batal
> 々 ${prefix}kalkulator
> 々 ${prefix}addtesti
> 々 ${prefix}deltesti
> 々 ${prefix}testimoni
> 々 ${prefix}listharga
> 々 ${prefix}payment

*ADVANCE MENU 🚥*
> 々 <
> 々 $
> 々 >

Jika ada masalah dalam penggunaan bot,
silahkan hubungi creator untuk konsultasi,
ketik .report (isi laporan)
                `
        treply(gacor)
        await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./src/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
            }
                break
                case 'addreseller':
if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
if (!args[0]) return treply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6288210180505`)
bnnd = text.split("|")[0].replace(/[^0-9]/g, '')
let cekseler = await ryn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (cekseler.length == 0) return treply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/reseller.json', JSON.stringify(owner))
treply(`Nomor ${bnnd} Telah Menjadi Reseler!!!`)
break
            case 'delreseller':
if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./database/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m}) 
if (!args[0]) return treply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6288210180505`)
yaki = text.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/reseller.json', JSON.stringify(owner))
treply(`Nomor ${yaki} Sudah Bukan Reseller lagi`)
break
case 'listreseller':
if (!isOwner) return treply('Males')
 tekso = '*List Reseler*\n\n'
for (let i of resel) {
tekso += `- ${i}\n`
}
tekso += `\n\n*Total : ${resel.length}*`
treply(tekso.trim())
break
            case 'tes': case 'ping':
                let timestampe = speed()
                let latensie = speed() - timestampe
                treply(`${latensie.toFixed(4)} miliseconds`)
            break
            case 'panelmenu': {
                let ownernya = ownernomer + '@s.whatsapp.net'
                let me = m.sender
                let timestampe = speed()
                let latensie = speed() - timestampe
                //const version = require("baileys/package.json").version
                const owned = `${ownernomer}@s.whatsapp.net`
                const gacor = `${xeonytimewisher}

𝗜𝗡𝗙𝗢 𝗕𝗢𝗧
𝗠𝗼𝗱𝗲 : ${ryn.public ? 'Public': `Self`},
𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗢𝘄𝗻𝗲𝗿 : @${owned.split("@")[0]}🎖️

*━─━[ 𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 ]━─━*

𝗥𝗔𝗠 𝗟𝗜𝗦𝗧 🚥
> 々 ${prefix}1gb name,tag/number
> 々 ${prefix}2gb name,tag/number
> 々 ${prefix}3gb name,tag/number
> 々 ${prefix}4gb name,tag/number
> 々 ${prefix}5gb name,tag/number
> 々 ${prefix}6gb name,tag/number
> 々 ${prefix}7gb name,tag/number
> 々 ${prefix}8gb name,tag/number
> 々 ${prefix}unli name,tag/number
> 々 ${prefix}mcsrv name,tag/number (only owner)

𝗣𝗔𝗡𝗘𝗟 𝗠𝗘𝗡𝗨 🚥
> 々 ${prefix}listusr
> 々 ${prefix}listsrv
> 々 ${prefix}delusr
> 々 ${prefix}delsrv
> 々 ${prefix}addadmin (only owner)

Jika ada masalah dalam penggunaan bot,
silahkan hubungi creator untuk konsultasi,
ketik .report (isi laporan)
                `
treply(gacor)
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./src/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
            }
                break
            case 'pushmenu': {
                const owned = `${ownernomer}@s.whatsapp.net`
                let timestampe = speed()
                let latensie = speed() - timestampe
                //const version = require("baileys/package.json").version
                const gacor = `${xeonytimewisher}

𝗜𝗡𝗙𝗢 𝗕𝗢𝗧
𝗠𝗼𝗱𝗲 : ${ryn.public ? 'Public': `Self`},
𝗕𝗼𝘁 : ${global.botname}
𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
𝗢𝘄𝗻𝗲𝗿 : @${owned.split("@")[0]}🎖️

*━─━[ 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 ]━─━*

𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 🚥
> 々 ${prefix}cekidgc
> 々 ${prefix}pushkontakv1
> 々 ${prefix}pushkontakv2
> 々 ${prefix}pushkontakv3
> 々 ${prefix}pushkontakv4
> 々 ${prefix}savekontak
> 々 ${prefix}savekontak2
> 々 ${prefix}cekmember
> 々 ${prefix}sendkontak
> 々 ${prefix}jpm

Jika ada masalah dalam penggunaan bot,
silahkan hubungi creator untuk konsultasi,
ketik .report (isi laporan)
                `
treply(gacor)
await ryn.sendMessage(m.chat, {audio: fs.readFileSync('./src/vn/spam.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:m})
}
                break
            case 'leave': {
if (!isOwner) return treply(`Gamau`)
await ryn.groupLeave(m.chat)
await treply(`Done Om`)
}
break
            case 'join':{
            if (!isOwner)
            return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            if (!q) return reply(`Kirim perintah ${prefix+command} _linkgrup_`)
            var ini_urrrl = q.split('https://chat.whatsapp.com/')[1]
            var data = await ryn.groupAcceptInvite(ini_urrrl)
            treply('*Berhasil om, udh join ke grup..*')
            }
            break
            case 'hidetag': case 'ht': {
            if (!isOwner) 
            return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
            if (!m.isGroup) return treply('Buat Di Group Bodoh')
            ryn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id),forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363200015845017@newsletter', serverMessageId: 103, newsletterName: '⌜ RynXD || WhatsApp ⌟'}}, {quoted:m})
            }
            break
            case 'listharga': {
                reply(`${global.listharga}`)
            }
                break
            case 'payment' : {
                if (!isOwner) return
                const zes =`*List Payment ${ownername}*🏅
                
• No. Dana     : ${dana}
• No. Ovo      : ${ovo}
• No. Gopay    : ${gopay}
• Link Saweria  :
  - ${saweria}

> Jangan lupa ss bukti Tf nya
                `
                let hiks = {
image: Qris, 
  caption: zes,
  contextInfo: {
      "forwardingScore": 1,
      "isForwarded": true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200015845017@newsletter',
      serverMessageId: 103,
      newsletterName: 'RynXD',
    }
  }
  }
           ryn.sendMessage(from, hiks, {quoted: m })
            }
            break
            case 'remini': case 'hd' : {
                if (!quoted) return reply(`Where is the picture?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Photos With Captions ${prefix + command}`)
                reply(mess.wait)
                const {
                    remini
                } = require('./lib/remini')
                let media = await quoted.download()
                let proses = await remini(media, "enhance")
                ryn.sendMessage(m.chat, {
                    image: proses, caption: mess.selesai
                }, {
                    quoted: m
                })
            }
                break
            case "listsrv": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let page = args[0] ? args[0]: '1';
                let f = await fetch(domain + "/api/application/servers?page=" + page, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                let res = await f.json();
                let servers = res.data;
                let sections = [];
                let messageText = "Berikut adalah daftar server:\n\n";

                for (let server of servers) {
                    let s = server.attributes;

                    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
                        "method": "GET",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + capikey
                        }
                    });

                    let data = await f3.json();
                    let status = data.attributes ? data.attributes.current_state: s.status;

                    messageText += `ID Server: ${s.id}\n`;
                    messageText += `Nama Server: ${s.name}\n`;
                    messageText += `Status: ${status}\n\n`;
                }

                messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
                messageText += `Total Server: ${res.meta.pagination.count}`;

                await ryn.sendMessage(m.chat, {
                    text: messageText
                }, {
                    quoted: m
                });

                if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
                    reply(`Gunakan perintah ${prefix}listsrv ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
                }
            }
                break
            case "listusr": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let page = args[0] ? args[0]: '1';
                let f = await fetch(domain + "/api/application/users?page=" + page, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                });
                let res = await f.json();
                let users = res.data;
                let messageText = "Berikut list user:\n\n";

                for (let user of users) {
                    let u = user.attributes;
                    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive': 'Active'}\n`;
                    messageText += `${u.username}\n`;
                    messageText += `${u.first_name} ${u.last_name}\n\n`;
                }

                messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
                messageText += `Total Users: ${res.meta.pagination.count}`;

                await ryn.sendMessage(m.chat, {
                    text: messageText
                }, {
                    quoted: m
                });

                if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
                    reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
                }
            }
                break
            case "delsrv": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let srv = args[0]
                if (!srv) return reply('ID nya mana?')
                let f = await fetch(domain + "/api/application/servers/" + srv, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    }
                })
                let res = f.ok ? {
                    errors: null
                }: await f.json()
                if (res.errors) return reply('*SERVER NOT FOUND*')
                reply('> *SUCCESSFULLY DELETE THE SERVER*')
            }
                break
            case "delusr": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let usr = args[0]
                if (!usr) return reply('ID nya mana?')
                let f = await fetch(domain + "/api/application/users/" + usr, {
                    "method": "DELETE",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                let res = f.ok ? {
                    errors: null
                }: await f.json()
                if (res.errors) return reply('*USER NOT FOUND*')
                reply('> *SUCCESSFULLY DELETE THE USER*')
            }
                break
            case "1gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`> *Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "1024"
                let cpu = "30"
                let disk = "1024"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 1024
DISK : 1024
CPU 30%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)

            }
                break
            case "2gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "2048"
                let cpu = "50"
                let disk = "2048"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 2048
DISK : 2048
CPU 50%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "3gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "3072"
                let cpu = "80"
                let disk = "3072"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

                *ORDER KEBUTUHAN HOSTING LAINNYA DI :*
                ${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 3072
DISK : 3072
CPU 80%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "4gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "4096"
                let cpu = "100"
                let disk = "4096"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 4096
DISK : 4096
CPU 100%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "5gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "5120"
                let cpu = "130"
                let disk = "5120"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 5120
DISK : 5120
CPU 130%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "6gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "6144"
                let cpu = "150"
                let disk = "6144"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 6144
DISK : 6144
CPU 150%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "7gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "7186"
                let cpu = "170"
                let disk = "7186"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 7186
DISK : 7186
CPU 170%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "8gb": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "8192"
                let cpu = "180"
                let disk = "8192"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : 8192
DISK : 8192
CPU 180%

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "unli": {
                if (!isSeler) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "15"
                let loc = "1"
                let memo = "0"
                let cpu = "0"
                let disk = "0"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER PANNEL ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
                        "startup": startup_cmd,
                        "environment": {
                            "INST": "npm",
                            "USER_UPLOAD": "0",
                            "AUTO_UPDATE": "0",
                            "CMD_RUN": "npm start",
                            "JS_FILE": "index.js"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED
DISK : UNLIMITED
CPU UNLIMITED

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "mcsrv": {
                if (!isOwner) return ryn.sendMessage(from, {audio: fs.readFileSync('./src/vn/lusiapa.mp3'),mimetype: 'audio/mpeg',ptt: true},{quoted:m})
                let t = text.split(',');
                if (t.length < 2) return reply(`*Format salah!*

                    Penggunaan:
                    ${prefix + command} user,nomer`)
                let username = t[0];
                let u = m.quoted ? m.quoted.sender: t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net': m.mentionedJid[0];
                let name = username
                let egg = "17"
                let loc = "1"
                let memo = "0"
                let cpu = "0"
                let disk = "0"
                let email = username + "@rynxd.link"
                akunlo = "https://telegra.ph/file/41d54e3630bf5be4e6daf.jpg"
                if (!u) return
                let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
                let password = d.exists ? crypto.randomBytes(5).toString('hex'): t[3]
                let f = await fetch(domain + "/api/application/users", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    },
                    "body": JSON.stringify({
                        "email": email,
                        "username": username,
                        "first_name": username,
                        "last_name": username,
                        "language": "en",
                        "password": password.toString()
                    })
                })
                let data = await f.json();
                if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
                let user = data.attributes
                let f2 = await fetch(domain + "/api/application/nests/1/eggs/" + egg, {
                    "method": "GET",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey
                    }
                })
                reply(`*Sedang Membuat Server....*`)
                ctf = `*DATA AKUN SERVER MINECRAFT ANDA*
○ Username : ${user.username}
○ Password : ${password.toString()}
○ ️Login : ${domain}

*ORDER KEBUTUHAN HOSTING LAINNYA DI :*
${global.yt}`
                ryn.sendMessage(u, {
                    text: `${ctf}`
                }, {
                    quoted: m
                })
                let data2 = await f2.json();
                let startup_cmd = data2.attributes.startup

                let f3 = await fetch(domain + "/api/application/servers", {
                    "method": "POST",
                    "headers": {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + apikey,
                    },
                    "body": JSON.stringify({
                        "name": name,
                        "description": " ",
                        "user": user.id,
                        "egg": parseInt(egg),
                        "docker_image": "ghcr.io/parkervcp/yolks:debian",
                        "startup": "./bedrock_server",
                        "environment": {
                            "BEDROCK_VERSION": "latest",
                            "LD_LIBRARY_PATH": "2029",
                            "SERVERNAME": "Bedrock Dedicated Server",
                            "GAMEMODE": "survival",
                            "DIFFICULTY": "easy",
                            "CHEATS" : "true"
                        },
                        "limits": {
                            "memory": memo,
                            "swap": 0,
                            "disk": disk,
                            "io": 500,
                            "cpu": cpu
                        },
                        "feature_limits": {
                            "databases": 5,
                            "backups": 5,
                            "allocations": 5
                        },
                        deploy: {
                            locations: [parseInt(loc)],
                            dedicated_ip: false,
                            port_range: [],
                        },
                    })
                })
                let res = await f3.json()
                if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
                let server = res.attributes
                let p = await reply(`*SERVER MINECRAFT TELAH DI BUAT✅*

ID USER : ${user.id}
ID SERVER : ${server.id}
RAM : UNLIMITED
DISK : UNLIMITED
CPU UNLIMITED

*USER & PASSWORD TELAH DI KIRIM KE*
*PRIVATE MESSAGE ! SILAHKAN DI CEK*`)



            }
                break
            case "addadmin": {
if (!isOwner) return treply(mess.owner)
let t = text.split(',');
if (t.length < 3) return treply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let email = t[0];
let username = t[1];
let name = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
if (!u) return treply(`*Format salah!*

Penggunaan:
${prefix + command} email,username,name,number/tag`);
let d = (await ryn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": name,
"last_name": "Memb",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return treply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let p = reply(`
- *SUCCESSFULLY ADD USER*

- TYPE: Admin

- ID : ${user.id}
- UUID : ${user.uuid}
- USERNAME: ${user.username}
- EMAIL : ${user.email}
- NAME : ${user.first_name} ${user.last_name}
- LANGUAGE : ${user.language}
- ADMIN : ${user.root_admin}
- ️CREATED AT : ${user.created_at}

*Password Telah Dikirim Di Private Chat @${u.split`@`[0]}*`)
ryn.sendMessage(u, { text: `Hai Kak ${pushname} 

- ID : ${user.id}
- EMAIL : ${user.email}
- USERNAME : ${user.username}
- PASSWORD : ${password.toString()}
- ️LOGIN : ${domain}

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT BIKIN
AKUN ADMIN PANEL HANYA 1×`,
},{quoted:m})
}
break
            case 'public': {
                if (!isOwner) return XeonStickOwner()
                ryn.public = true
                reply('*Successful in Changing To Public Usage*')
            }
                break
            case 'self': {
                if (!isOwner) return mess.owner
                ryn.public = false
                reply('*Successful in Changing To Self Usage*')
            }
                break
            case 'toimage': case 'toimg': {
                await loading()
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
                let media = await ryn.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    ryn.sendMessage(from, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })
            }
                break
                case 'tiktok': {
                    if (!text) return reply(`Example : ${prefix + command} link`)
                    if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
                    reply(mess.wait)
                    require('./lib/tiktok').Tiktok(q).then(data => {
                        ryn.sendMessage(m.chat, {
                            caption: `Here you go!`, video: {
                                url: data.watermark
                            }}, {
                            quoted: m
                        })
                    })
                }
                    break
                case 'tiktokaudio': case 'ttsong': {
                if (!text) return reply( `Linknya mana?\nContoh nih : ${prefix + command} link tiktok`)
                if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
                reply(`Tunggu sebentar ya kakak:3`)
                require('./lib/tiktok').Tiktok(q).then( data => {
                ryn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
                    })
                    }
                break
                case 'ai':{
            if (!text) return treply(`Haiii ${pushname}\n\nFormat kamu salah nih\ncontoh : ai apa itu javascript`)
            axios.get(`${rynxd}${pushname}&text=${text}`).then(({ data }) => {
            let hiks = {
  text : data.message,
  contextInfo: {
      "forwardingScore": 1,
      "isForwarded": true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363200015845017@newsletter',
      serverMessageId: 103,
      newsletterName: 'RynXD',
    }
  }
  }
           ryn.sendMessage(from, hiks, {quoted: m })
            })
            }
            break
                case 'tourl': {
                    await loading()
                    if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
                    if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await ryn.downloadAndSaveMediaMessage(quoted)
                    if (/image/.test(mime)) {
                        let anu = await TelegraPh(media)
                        reply(util.format(anu))
                    } else if (!/image/.test(mime)) {
                        let anu = await UploadFileUgu(media)
                        reply(util.format(anu))
                    }
                    await fs.unlinkSync(media)
                }
                    break
case 'report':
case 'lapor': {
if (!text) return reply(`kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${prefix + command} selamat siang owner, sy menemukan eror seperti berikut <copy/tag pesan erornya>`)
let buy = (`*_${command}_*\n\nDari : *@${m.sender.split`@`[0]}*\n\nPesan : ${text}\n`)
ryn.sendMessage(`${mynum}@s.whatsapp.net`, { text: `${buy}`, mentions: [ `${sender.split('@')[0]}@s.whatsapp.net` ]}, { quoted: m })
if (m.isGroup) {
treply(`_Pesan terkirim kepemilik bot, jika ${command} hanya main-main tidak akan ditanggapi._`)
}
}
break
                case 'done': {
                    if (!isOwner) return
                    let t = text.split(',');
                    if (t.length < 2) return reply(`*Format salah!\nPenggunaan:\n${prefix + command} barang,jumlah,nominal\nExampel ${prefix + command} panel,1,10000`);
                    const owned = `${ownernomer}@s.whatsapp.net`
                    let barang = t[0];
                    let jumlah = t[1];
                    let nominal = t[2];
                    let don = (`
*TRANSAKSI BERHASIL*🏵️

📆 _*Tanggal* : ${date}_
🕰️ _*Waktu* : ${xtime}_
✨ _*Status* : Berhasil_

_• *Barang:* ${barang}_
_• *Jumlah:* ${jumlah}_
_• *Nominal:* Rp${nominal}_

Terima kasih telah order dan mempercayai 
@${owned.split("@")[0]}🎖️
Jangan lupa order lagi ya !!
`)
treply(don)
                }
                    break
                
                case "tunda": {
                    if (!isOwner) return mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const owned = `${ownernomer}@s.whatsapp.net`
                    const text12 = `
*TRANSAKSI PENDING*🎗️

📆 _*Tanggal* : ${date}_
🕰️ _*Waktu* : ${xtime}_
✨ _*Status* : Pending_

Halo kak @${userss.split("@")[0]}
Transaksi kamu masih dipending nih
Tunggu konfirmasi selanjutnya ya 
`
            treply(text12)
                }
                    break
                
                case "proses": {
                    if (!isOwner) return mess.owner
                let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

                    const text12 = `
*TRANSAKSI DIPROSES*🎖️

📆 _*Tanggal* : ${date}_
🕰️ _*Waktu* : ${xtime}_
✨ _*Status* :  Proses_

Halo kak @${userss.split("@")[0]}
Sekarang transaksi kamu sedang
diproses nihh
Mohon tunggu sebentar ya
`
            treply(text12)
                }
                    break
                if (!isOwner) return mess.owner
                case "batal": {
                    let users = m.mentionedJid[0] ? m.mentionedJid[0]: m.quoted ? m.quoted.sender: text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    const text12 = `
*TRANSAKSI DIBATALKAN*🚫

Halo kak @${userss.split("@")[0]}

📆 _*Tanggal* : ${date}_
🕰️ _*Waktu* : ${xtime}_
✨ _*Status* : Batal_

Transaksi kamu dibatalkan`
            treply(text12)
                }
                    break
                case 's': case 'sticker': case 'stiker': {
                    if (!quoted) return treply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                    if (/image/.test(mime)) {
                        let media = await quoted.download()
                        let encmedia = await ryn.sendImageAsSticker(m.chat, media, m, {
                            packname: global.packname, author: global.author
                        })

                    } else if (/video/.test(mime)) {
                        if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
                        let media = await quoted.download()
                        let encmedia = await ryn.sendVideoAsSticker(m.chat, media, m, {
                            packname: global.packname, author: global.author
                        })

                    } else {
                        treply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
                    }
                }
                    break
                    case 'setppbot': case 'setbotpp': {
                        if (!isOwner) return reply(mess.owner)
                        if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                        if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                        if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
                        var medis = await ryn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                        var {
                            img
                        } = await generateProfilePicture(medis)
                        await ryn.query({
                            tag: 'iq',
                            attrs: {
                                to: botNumber,
                                type: 'set',
                                xmlns: 'w:profile:picture'
                            },
                            content: [{
                                tag: 'picture',
                                attrs: {
                                    type: 'image'
                                },
                                content: img
                            }]
                        })
                        fs.unlinkSync(medis)
                        reply(`Success`)
                    }
                        break
                        case 'kuismath':
                            case "kalkulator":
                                if (!text) return reply(`Lah Mana`)
                                let val = text
                                .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
                                .replace(/×/g, '*')
                                .replace(/÷/g, '/')
                                .replace(/π|pi/gi, 'Math.PI')
                                .replace(/e/gi, 'Math.E')
                                .replace(/\/+/g, '/')
                                .replace(/\++/g, '+')
                                .replace(/-+/g, '-')
                                let format = val
                                .replace(/Math\.PI/g, 'π')
                                .replace(/Math\.E/g, 'e')
                                .replace(/\//g, '÷')
                                .replace(/\*×/g, '×')
                                try {
                                    console.log(val)
                                    let result = (new Function('return ' + val))()
                                    if (!result) throw result
                                    reply(`*${format}* = _${result}_`)
                                } catch (e) {
                                    if (e == undefined) throw 'Isinya?'
                                    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
                                }
                                break
                            case "cekidgc": {
                                if (!isOwner) return reply(mess.owner)
                                let getGroups = await ryn.groupFetchAllParticipating()
                                let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                                let anu = groups.map((v) => v.id)
                                let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
                                for (let x of anu) {
                                    let metadata2 = await ryn.groupMetadata(x)
                                    teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
                                }
                                reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
                            }
                                break
                    case "pushkontakv1":{
if (!isOwner) return reply(mess.owner)
if (isGroup) return reply(mess.private)
if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
reply(mess.wait)
const groupMetadataa = !isGroup? await ryn.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkon = text.split("|")[1]
if (isContacts) return
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
if (/image/.test(mime)) {
media = await ryn.downloadAndSaveMediaMessage(quoted)
memk = await TelegraPh(media)
await ryn.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
await sleep(1000)
} else {
await ryn.sendMessage(mem, { text: global.tekspushkon })
await sleep(1000)
}
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await ryn.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break
                            case "pushkontakv2": {
                                if (!isOwner) return reply(mess.owner)
                                if (!isGroup) return reply(mess.only.group)
                                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} teks`)
                                reply(mess.wait)
                                const groupMetadata = isGroup? await ryn.groupMetadata(from).catch(e => {}): ""
                                const groupOwner = isGroup? groupMetadata.owner: ""
                                const participantts = isGroup? await groupMetadata.participants: ""
                                const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
                                global.tekspushkonv2 = text
                                if (isContacts) return
                                for (let men of halsss) {
                                    contacts.push(men)
                                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                                    if (/image/.test(mime)) {
                                        media = await ryn.downloadAndSaveMediaMessage(quoted)
                                        mem = await TelegraPh(media)
                                        await ryn.sendMessage(men, {
                                            image: {
                                                url: mem
                                            }, caption: global.tekspushkonv2
                                        })
                                        await sleep(1000)
                                    } else {
                                        await ryn.sendMessage(men, {
                                            text: global.tekspushkonv2
                                        })
                                        await sleep(1000)
                                    }
                                }
                                reply("File Kontak Sudah Di Kirim Lewat Chat Pribadi")
                                try {
                                    const uniqueContacts = [...new Set(contacts)];
                                    const vcardContent = uniqueContacts.map((contact, index) => {
                                        const vcard = [
                                            "BEGIN:VCARD",
                                            "VERSION:3.0",
                                            `FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
                                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                                            "END:VCARD",
                                            "",].join("\n");
                                        return vcard;
                                    }).join("");
                                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                                } catch (err) {
                                    reply(util.format(err))
                                } finally {
                                    await ryn.sendMessage(sender, {
                                        document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard",
                                    }, {
                                        quoted: m
                                    })
                                    contacts.splice(0, contacts.length)
                                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                                }
                            }
                                break
                            case "pushkontakv3":
                                if (!isOwner) return reply(mess.owner)
                                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|jeda|teks\nUntuk Liat Id Group Silahkan Ketik .idgroup`)
                                await reply("Otw Boskuuu")
                                const groupMetadataa = !isGroup? await ryn.groupMetadata(`${q.split("|")[0]}`).catch(e => {}): ""
                                const participantss = !isGroup? await groupMetadataa.participants: ""
                                const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
                                global.tekspushkonv3 = q.split("|")[2]
                                for (let mem of halls) {
                                    if (/image/.test(mime)) {
                                        media = await ryn.downloadAndSaveMediaMessage(quoted)
                                        memk = await TelegraPh(media)
                                        await ryn.sendMessage(men, {
                                            image: {
                                                url: mem
                                            }, caption: global.tekspushkonv3
                                        })
                                        await sleep(q.split("|")[1])
                                    } else {
                                        await ryn.sendMessage(mem, {
                                            text: global.tekspushkonv3
                                        })
                                        await sleep(q.split("|")[1])
                                    }
                                }
                                reply("Succes Boss!")
                                break
                            case "pushkontakv4":
                                if (!isOwner) return reply(mess.owner)
                                if (isGroup) return reply(mess.private)
                                if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} jeda|teks`)
                                await reply("Otw Boskuuu")
                                const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                                global.tekspushkonv4 = text.split("|")[1]
                                for (let men of halsss) {
                                    if (/image/.test(mime)) {
                                        media = await ryn.downloadAndSaveMediaMessage(quoted)
                                        mem = await TelegraPh(media)
                                        await ryn.sendMessage(men, {
                                            image: {
                                                url: mem
                                            }, caption: global.tekspushkonv4
                                        })
                                        await sleep(text.split("|")[0])
                                    } else {
                                        await ryn.sendMessage(men, {
                                            text: global.tekspushkonv4
                                        })
                                        await sleep(text.split("|")[0])
                                    }
                                }
                                reply("Succes Boss!")
                                break
                            case "savekontak": {
                                if (!isOwner) return reply(mess.owner)
                                if (!isGroup) return reply(`Maaf Kak Fitur ${prefix+command} Hanya Bisa Di Gunakan Di Dalam Group\nUntuk Memasukan Bot Ke Dalam Group Yang Di Ingin Kan\nSilahkan Ketik Command .join linkgroup`)
                                await m.reply("_in progress_")
                                const groupMetadata = isGroup? await ryn.groupMetadata(from).catch(e => {}): ""
                                const groupOwner = isGroup? groupMetadata.owner: ""
                                const participantts = isGroup? await groupMetadata.participants: ""
                                const halsss = await participantts.filter(v => v.id.endsWith('.net')).map(v => v.id)
                                for (let men of halsss) {
                                    if (isContacts) return
                                    contacts.push(men)
                                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                                }
                                reply("Sukses File Sudah Di Kirim Lewat Chat Private")
                                try {
                                    const uniqueContacts = [...new Set(contacts)];
                                    const vcardContent = uniqueContacts.map((contact, index) => {
                                        const vcard = [
                                            "BEGIN:VCARD",
                                            "VERSION:3.0",
                                            `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                                            "END:VCARD",
                                            "",].join("\n");
                                        return vcard;
                                    }).join("");
                                    fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                                } catch (err) {
                                    reply(util.format(err))
                                } finally {
                                    await ryn.sendMessage(sender, {
                                        document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard",
                                    }, {
                                        quoted: m
                                    })
                                    contacts.splice(0, contacts.length)
                                    fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                                }
                            }
                                break
                            case 'cekmember':
                                if (!isOwner) return reply(mess.owner)
                                if (!isGroup) return treply(`Khusus Group Kontol`)
                                huhuhs = await ryn.sendMessage(m.chat, {
                                    text: `Grup; *${groupMetadata.subject}*\nTotal peserta; *${participants.length}*`
                                }, {
                                    quoted: m, ephemeralExpiration: 86400
                                })
                                await sleep(1000) // (?); mengirim kontak seluruh member
                                ryn.sendContact(m.chat, participants.map(a => a.id), huhuhs)
                                break
                                case 'savekontak': case 'svkontak':
                                    if (!isOwner) return reply(mess.owner)
                                    if (!isGroup) return treply(`Khusus Group Kontol`)
                                    let cmiggc = await ryn.groupMetadata(m.chat)
                                    let orgiggc = participants.map(a => a.id)
                                    vcard = ''
                                    noPort = 0
                                    for (let a of cmiggc.participants) {
                                        vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
                                    } // (?); mengimpor kontak seluruh member - save
                                    let nmfilect = './contacts.vcf'
                                    reply('*Mengimpor '+cmiggc.participants.length+' kontak..*')
                                    fs.writeFileSync(nmfilect, vcard.trim())
                                    await sleep(2000)
                                    ryn.sendMessage(m.chat, {
                                        document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
                                    }, {
                                        ephemeralExpiration: 86400, quoted: m
                                    })
                                    fs.unlinkSync(nmfilect)
                                    break
                                    case 'sendkontak': case 'kontak':
                                        if (!isOwner) return reply(mess.owner)
                                        if (!isGroup) return treply(mess.group)
                                        if (!m.mentionedJid[0]) return reply('Ex; .kontak @tag|nama')
                                        let snTak = dtext.split(' ')[1] ? dtext.split(' ')[1]: 'Contact'
                                        let snContact = {
                                            displayName: "Contact",
                                            contacts: [{
                                                displayName: snTak,
                                                vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"
                                            }]
                                        } // (?); send kontak
                                        ryn.sendMessage(m.chat, {
                                            contacts: snContact
                                        }, {
                                            ephemeralExpiration: 86400
                                        })
                                        break
                                        case "savekontak2": {
                                            if (!isOwner) return reply(mess.owner)
                                            if (isGroup) return reply(mess.private)
                                            if (!text) return reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik .cekidgc`)
                                            await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
                                            const groupMetadataa = !isGroup? await ryn.groupMetadata(`${text}`).catch(e => {}): ""
                                            const participants = !isGroup? await groupMetadataa.participants: ""
                                            const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                                            for (let mem of halls) {
                                                if (isContacts) return
                                                contacts.push(mem)
                                                fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                                            }
                                            try {
                                                const uniqueContacts = [...new Set(contacts)];
                                                const vcardContent = uniqueContacts.map((contact, index) => {
                                                    const vcard = [
                                                        "BEGIN:VCARD",
                                                        "VERSION:3.0",
                                                        `FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
                                                        `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                                                        "END:VCARD",
                                                        "",].join("\n");
                                                    return vcard;
                                                }).join("");
                                                fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                                            } catch (err) {
                                                reply(util.format(err))
                                            } finally {
                                                await ryn.sendMessage(from, {
                                                    document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard",
                                                }, {
                                                    quoted: m
                                                })
                                                contacts.splice(0, contacts.length)
                                                fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                                            }
                                        }
                                            break
                                        case "jpm": case "post": {
                                            if (!isOwner) return reply(mess.owner)
                                            if (!text) return reply(`*Penggunaan Salah Silahkan Gunakan Seperti Ini*\n${prefix+command} teks|jeda\n\nReply Gambar Untuk Mengirim Gambar Ke Semua Group\nUntuk Jeda Itu Delay Jadi Nominal Jeda Itu 1000 = 1 detik`)
                                            await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
                                            let getGroups = await ryn.groupFetchAllParticipating()
                                            let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
                                            let anu = groups.map((v) => v.id)
                                            for (let xnxx of anu) {
                                                let metadat72 = await ryn.groupMetadata(xnxx)
                                                let participanh = await metadat72.participants
                                                if (/image/.test(mime)) {
                                                    media = await ryn.downloadAndSaveMediaMessage(quoted)
                                                    mem = await TelegraPh(media)
                                                    await ryn.sendMessage(xnxx, {
                                                        image: {
                                                            url: mem
                                                        }, caption: text.split('|')[0], mentions: participanh.map(a => a.id)
                                                    })
                                                    await sleep(text.split('|')[1])
                                                } else {
                                                    await ryn.sendMessage(xnxx, {
                                                        text: text.split('|')[0], mentions: participanh.map(a => a.id)
                                                    })
                                                    await sleep(text.split('|')[1])
                                                }}
                                            reply("*SUCCESFUL ✅*")
                                        }
                                            break
                                            case 'addtesti': {
                                                if (!isOwner) return reply(mess.owner)
                                                if (args.length < 1) return reply('Apa nama testinya?')
                                                if (testimoni.includes(q)) return reply("Nama tersebut sudah digunakan")
                                                let delb = await ryn.downloadAndSaveMediaMessage(quoted)
                                                testimoni.push(q)
                                                await fsx.copy(delb, `./database/image/${q}.jpg`)
                                                fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
                                                fs.unlinkSync(delb)
                                                reply(`Sukses Menambakan Testimoni\nCek Dengan Mengetik ${prefix}testimoni`)
                                            }
                                                break
                                            case 'deltesti': {
                                                if (!isOwner) return reply(mess.owner)
                                                if (args.length < 1) return reply('Masukkan nama gambar')
                                                if (!testimoni.includes(q)) return reply("Namanya tidak ada di database")
                                                let wanu = testimoni.indexOf(q)
                                                testimoni.splice(wanu, 1)
                                                fs.writeFileSync('./database/testimoni.json', JSON.stringify(testimoni))
                                                fs.unlinkSync(`./database/image/${q}.jpg`)
                                                reply(`Sukses Delete Testi ${q}`)
                                            }
                                                break
                                            case 'testimoni': {
                                                let teks = '┌──⭓「 *testi List* 」\n│\n'
                                                for (let x of testimoni) {
                                                    teks += `│⭔ ${x}\n`
                                                }
                                                teks += `│\n└────────────⭓\n\n*Totally there are : ${testimoni.length}*`
                                                treply(teks)
                                            }
                                                break
                                            default:

                                                if (budy.startsWith('<')) {
                                                    if (!isOwner) return
                                                    try {
                                                        return treply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
                                                    } catch (e) {
                                                        treply(e)
                                                    }
                                                }

                                                if (budy.startsWith('>')) {
                                                    if (!isOwner) return
                                                    try {
                                                        let evaled = await eval(budy.slice(2))
                                                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                                                        await treply(evaled)
                                                    } catch (err) {
                                                        treply(String(err))
                                                    }
                                                }

                                                if (budy.startsWith('$')) {
                                                    if (!isOwner) return
                                                    qur = budy.slice(2)
                                                    exec(qur, (err, stdout) => {
                                                        if (err) return treply(`${err}`)
                                                        if (stdout) {
                                                            treply(stdout)
                                                        }
                                                    })
                                                }

                                                if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
                                                    let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
                                                    if (room) {
                                                        let other = room.other(sender)
                                                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                                                            contextInfo: {
                                                                ...m.msg.contextInfo,
                                                                forwardingScore: 0,
                                                                isForwarded: true,
                                                                participant: other
                                                            }
                                                        }: {})
                                                    }
                                                }
                                            }
                                    } catch (err) {
                                        console.log(util.format(err))
                                        let e = String(err)
                                        ryn.sendMessage(`${owner}@s.whatsapp.net`, {
                                            text: "Hello developer, there seems to be an error, please fix it " + util.format(e),
                                            contextInfo: {
                                                forwardingScore: 9999999,
                                                isForwarded: false
                                            }})
                                }
                        }

                        process.on('uncaughtException', function (err) {
                            console.log('Caught exception: ', err)
                    })