const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
┌──『•• 🎯 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
❒│▸ ${prefix}ᴏɴʟʏᴘᴄ
❒│▸ ${prefix}ᴏɴʟʏɢᴄ
❒│▸ ${prefix}ꜱᴇʟꜰ
❒│▸ ${prefix}ᴄʟᴇᴀʀᴄʜᴀᴛ
❒│▸ ${prefix}ᴘɪɴᴄʜᴀᴛ
❒│▸ ${prefix}ᴜɴᴘɪɴᴄʜᴀᴛ
❒│▸ ${prefix}ɢᴄᴏɴʟʏ
❒│▸ ${prefix}ᴘᴜʙʟɪᴄ
❒│▸ ${prefix}ꜱᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
❒│▸ ${prefix}ꜱᴛᴘᴘɢᴄᴘᴀɴᴊᴀɴɢ
❒│▸ ${prefix}ᴀᴅᴅᴄᴀꜱᴇ
❒│▸ ${prefix}ᴊᴏɪɴ
❒│▸ ${prefix}ʙᴄᴛᴇxᴛ
❒│▸ ${prefix}ᴘᴏʟʟ
❒│▸ ${prefix}ʙᴄɪᴍᴀɢᴇ
❒│▸ ${prefix}ʙᴄᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴄʀᴇᴀᴛᴇɢᴄ
❒│▸ ${prefix}ꜱᴇᴛᴇxɪꜰ
❒│▸ ${prefix}ᴜꜱᴇʀᴊɪᴅ
❒│▸ ${prefix}ꜱᴇᴛʙᴏᴛɴᴀᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛʙᴏᴛʙɪᴏ
❒│▸ ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
❒│▸ ${prefix}ʀᴇꜱᴛᴀʀᴛ
❒│▸ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
❒│▸ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
❒│▸ ${prefix}ᴅᴇʟᴘʀᴇᴍ
❒│▸ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴀᴅᴅᴠɴ
❒│▸ ${prefix}ᴅᴇʟᴠɴ
❒│▸ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴅᴇʟꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴀᴅᴅɪᴍᴀɢᴇ
❒│▸ ${prefix}ᴅᴇʟɪᴍᴀɢᴇ
❒│▸ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴅᴇʟᴠɪᴅᴇᴏ
❒│▸ ${prefix}ʙʟᴏᴄᴋ
❒│▸ ${prefix}ᴜɴʙʟᴏᴄᴋ ᴅᴇʟ
❒│▸ ${prefix}ʟᴇᴀᴠᴇɢᴄ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ɢᴇᴛᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴊᴘᴍ
❒│▸ ${prefix}ᴊᴘᴍ2
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ɪꜱʟᴀᴍɪ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴋɪꜱᴀʜɴᴀʙɪ
❒│▸ ${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ
❒│▸ ${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
❒│▸ ${prefix}ᴀᴜᴅɪᴏꜱᴜʀᴀʜ
❒│▸ ${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ
❒│▸ ${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ
❒│▸ ${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
❒│▸ ${prefix}ᴅᴏᴀᴛᴀʜʟɪʟ
❒│▸ ${prefix}ᴛᴀꜰꜱɪʀ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱɪᴅᴇʀ
❒│▸ ${prefix}ᴀᴜᴛᴏᴀɪɢᴄ
❒│▸ ${prefix}ᴡᴀʀᴄᴀʟʟ
❒│▸ ${prefix}ᴀᴜᴛᴏꜱɪᴍɪ
❒│▸ ${prefix}ɴᴀɴᴏᴄʜᴀᴛ
❒│▸ ${prefix}ᴍᴜᴛᴇ
❒│▸ ${prefix}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛʟᴇꜰᴛ
❒│▸ ${prefix}ᴡᴇʟᴄᴏᴍᴇ ᴏɴ/ᴏꜰꜰ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ
❒│▸ ${prefix}ʟɪɴᴋɢᴄ
❒│▸ ${prefix}ɪɴᴠɪᴛᴇ
❒│▸ ${prefix}ᴇᴘʜᴇᴍᴇʀᴀʟ
❒│▸ ${prefix}ᴅᴇʟᴇᴛᴇ
❒│▸ ${prefix}ꜱᴇʀᴘᴘɢʀᴏᴜᴘ
❒│▸ ${prefix}ᴅᴇʟᴘᴘɢʀᴏᴜᴘ
❒│▸ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
❒│▸ ${prefix}ᴀᴅᴅ
❒│▸ ${prefix}ᴋɪᴄᴋ
❒│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
❒│▸ ${prefix}ᴅᴇᴍᴏᴛᴇ
❒│▸ ${prefix}ʜɪᴅᴇᴛᴀɢ
❒│▸ ${prefix}ᴛᴏᴛᴀɢ
❒│▸ ${prefix}ᴛᴀɢᴀʟʟ
❒│▸ ${prefix}ᴇᴅɪᴛɪɴꜰᴏ
❒│▸ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
❒│▸ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
❒│▸ ${prefix}ʀᴇꜱᴇᴛʟɪɴᴋ
❒│▸ ${prefix}ɢᴇᴛʙɪᴏ
❒│▸ ${prefix}ᴠᴏᴛᴇ
❒│▸ ${prefix}ᴜᴘᴠᴏᴛᴇ
❒│▸ ${prefix}ᴅᴏᴡɴᴠᴏᴛᴇ
❒│▸ ${prefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ
❒│▸ ${prefix}ᴅᴇʟᴠᴏᴛᴇ
❒│▸ ${prefix}ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀɢᴄ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ
❒│▸ ${prefix}ᴀɴᴛɪɪɴᴋᴀʟʟ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋꜰʙ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɪɢ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛɢ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴠɪᴅ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
❒│▸ ${prefix}ᴀɴᴛɪᴠɪʀᴜꜱ
❒│▸ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
❒│▸ ${prefix}ɴꜱꜰᴡ
❒│▸ ${prefix}ʀᴇᴀᴄᴛ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴀɴᴏɴʏᴍᴏᴜꜱ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀɴᴏɴʏᴍᴏᴜꜱᴄʜᴀᴛ
❒│▸ ${prefix}ꜱᴛᴀʀᴛ
❒│▸ ${prefix}ɴᴇxᴛ
❒│▸ ${prefix}ꜱᴛᴏᴘ
❒│▸ ${prefix}ꜱᴇɴᴅᴘʀᴏꜰɪʟᴇ
❒│▸ ${prefix}ᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ᴄᴏɴꜰᴇꜱꜱ
❒│▸ ${prefix}ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ꜱᴛᴏᴘᴍᴇɴꜰᴇꜱꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴘᴜꜱʜ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴄᴇᴋɪᴅɢᴄ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ɢᴇᴛᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴊᴘᴍ
❒│▸ ${prefix}ᴊᴘᴍ2
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴏɴɢ
❒│▸ ${prefix}ᴠɪᴅᴇᴏ
❒│▸ ${prefix}ꜰɪʟᴍ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
❒│▸ ${prefix}ꜰɪʟᴍꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}ʏᴛꜱᴇᴀʀᴄʜ ᴍᴘ3
❒│▸ ${prefix}ʏᴛꜱᴇᴀʀᴄʜ ᴍᴘ4
❒│▸ ${prefix}ᴛᴛꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}ᴛᴇʀᴀʙᴏxᴅʟ
❒│▸ ${prefix}ꜱɴᴀᴄᴋᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴄᴀᴘᴄᴜᴛᴅʟ
❒│▸ ${prefix}ᴘʟᴀʏ
❒│▸ ${prefix}ʏᴛᴍᴘ3
❒│▸ ${prefix}ʏᴛᴍᴘ4
❒│▸ ${prefix}ɢᴏᴏɢʟᴇ
❒│▸ ${prefix}ɪᴍᴅʙ
❒│▸ ${prefix}ᴡᴇᴀᴛʜᴇʀ
❒│▸ ${prefix}ᴡᴀɴᴜᴍʙᴇʀ
❒│▸ ${prefix}ɪɴꜱᴛᴀɢʀᴀᴍ
❒│▸ ${prefix}ꜰᴀᴄᴇʙᴏᴏᴋ
❒│▸ ${prefix}ᴛᴡɪᴛᴛᴇʀᴠɪᴅ
❒│▸ ${prefix}ᴛᴇʟᴇꜱᴛɪᴄᴋ
❒│▸ ${prefix}ꜱᴘᴏᴛɪꜰʏ
❒│▸ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
❒│▸ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
❒│▸ ${prefix}ɢᴅʀɪᴠᴇ
❒│▸ ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
❒│▸ ${prefix}ʀɪɴɢᴛᴏɴᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ɢᴀᴍᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʟɪʀɪᴋ
❒│▸ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʟᴀɢᴜ
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
❒│▸ ${prefix}ᴀꜱᴀʜᴏᴛᴀᴋ
❒│▸ ${prefix}ꜱɪᴀᴘᴀᴀᴋᴜ
❒│▸ ${prefix}ꜱᴜꜱᴜɴᴋᴀᴛᴀ
❒│▸ ${prefix}ᴛᴇᴋᴀᴛᴇᴋɪ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀᴠ2
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋᴀʙᴜᴘᴀᴛᴇɴ
❒│▸ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
❒│▸ ${prefix}ꜰᴀᴍɪʟʏ100
❒│▸ ${prefix}ᴡᴇʀᴇᴡᴏʟꜰ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ʀᴘɢ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴋᴇʀᴊᴀ
❒│▸ ${prefix}ꜰɪɢʜᴛɴᴀɢᴀ
❒│▸ ${prefix}ꜰɪɢʜᴛᴋᴜᴄɪɴɢ
❒│▸ ${prefix}ꜰɪɢʜᴛᴘʜᴏɴɪx
❒│▸ ${prefix}ꜰɪɢʜᴛɢʀɪꜰꜰɪɴ
❒│▸ ${prefix}ꜰɪɢʜᴛᴋʏᴜʙɪ
❒│▸ ${prefix}ꜰɪɢʜᴛꜱᴇɴᴛᴀᴜʀ
❒│▸ ${prefix}ɴᴀʙᴜɴɢ
❒│▸ ${prefix}ᴍɪɴɪɴɢ
❒│▸ ${prefix}ʙᴀɴᴋɴᴀʙᴜɴɢ
❒│▸ ${prefix}ʙᴀɴᴋᴛᴀʀɪᴋ
❒│▸ ${prefix}ʙᴇʀᴋᴇʙᴏɴ
❒│▸ ${prefix}ᴄʀᴀꜰᴛɪɴɢ
❒│▸ ${prefix}ʙᴇᴛ
❒│▸ ${prefix}ʙᴏɴᴜꜱ
❒│▸ ${prefix}ʙᴜᴀʜ
❒│▸ ${prefix}ɴᴇʙᴀɴɢ
❒│▸ ${prefix}ʙᴇᴋᴇʀᴊꜱ
❒│▸ ${prefix}ʙᴀɴꜱᴏꜱ
❒│▸ ${prefix}ᴛᴀxʏ
❒│▸ ${prefix}ᴍᴜʟᴜɴɢ
❒│▸ ${prefix}ʙᴇʀʙᴜʀᴜ
❒│▸ ${prefix}ᴘᴏʟɪꜱɪ
❒│▸ ${prefix}ʙᴇʀᴅᴀɢᴀɴɢ
❒│▸ ${prefix}ʀᴀᴍᴘᴏᴋ
❒│▸ ${prefix}ʙᴜɴᴜʜ
❒│▸ ${prefix}ᴄᴏʟʟᴇᴄᴛ
❒│▸ ${prefix}ᴍᴀɴᴄɪɴɢ
❒│▸ ${prefix}ʀᴇᴘᴀɪʀ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ꜰɪɢʜᴛ
❒│▸ ${prefix}ɢᴀᴊɪᴀɴ
❒│▸ ${prefix}ᴜᴘɢʀᴀᴇᴅ
❒│▸ ${prefix}ᴛʀᴀɴꜱꜰᴇʀ
❒│▸ ${prefix}ꜱʜᴏᴘ
❒│▸ ${prefix}ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ
❒│▸ ${prefix}ꜱᴀᴍᴘᴀʜ
❒│▸ ${prefix}ʀᴏᴋᴇᴛ
❒│▸ ${prefix}ᴏᴊᴇᴋ
❒│▸ ${prefix}ɴɢᴜʟɪ
❒│▸ ${prefix}ᴘᴀꜱᴀʀ
❒│▸ ${prefix}ʀᴏʙ
❒│▸ ${prefix}ʀᴇꜰᴇʀᴀʟ
❒│▸ ${prefix}ᴘᴇᴛꜱʜᴏᴘ
❒│▸ ${prefix}ᴋᴏʟᴀᴍ
❒│▸ ${prefix}ᴋᴇʙᴏʏ
❒│▸ ${prefix}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
❒│▸ ${prefix}ᴄᴀꜱɪɴᴏ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *Qᴜᴏᴛᴇꜱ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱᴀɴɪᴍᴇ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙᴀᴄᴏᴛ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙᴜᴄɪɴ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱᴍᴏᴛɪᴠᴀꜱɪ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɢᴀʟᴀᴜ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɢᴏᴍʙᴀʟ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʜᴀᴄᴋᴇʀ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙɪᴊᴀᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ꜱᴛᴏʀᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʟɪꜱᴛ
❒│▸ ${prefix}ᴀᴅᴅʟɪꜱᴛ
❒│▸ ${prefix}ᴅᴇʟʟɪꜱᴛ
❒│▸ ${prefix}ᴜᴘᴅᴀᴛᴇ
❒│▸ ${prefix}ᴊᴇᴅᴀ
❒│▸ ${prefix}ᴛᴀᴍʙᴀʜ
❒│▸ ${prefix}ᴋᴜʀᴀɴɢ
❒│▸ ${prefix}ᴋᴀʟɪ
❒│▸ ${prefix}ʙᴀɢɪ
❒│▸ ${prefix}ᴅᴇʟꜱᴇᴛᴅᴏɴᴇ
❒│▸ ${prefix}ᴄʜᴀɴɢᴇᴅᴏɴᴇ
❒│▸ ${prefix}ꜱᴇᴛᴅᴏɴᴇ
❒│▸ ${prefix}ᴅᴇʟᴘʀᴏꜱᴇꜱ
❒│▸ ${prefix}ᴘʀᴏꜱᴇꜱ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>
❒│▸ ${prefix}ᴅᴏɴᴇ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɢɪʀʟ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ꜱᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɪɢꜱᴛᴀʟᴋ
❒│▸ ${prefix}ᴛᴛꜱᴛᴀʟᴋ
❒│▸ ${prefix}ꜰꜰꜱᴛᴀʟᴋ
❒│▸ ${prefix}ᴍʟꜱᴛᴀʟᴋ
❒│▸ ${prefix}ɴᴘᴍꜱᴛᴀʟᴋ
❒│▸ ${prefix}ɢʜꜱᴛᴀʟᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴏᴘᴇɴ ᴀɪ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʟᴇᴘᴛᴏɴᴀɪ
❒│▸ ${prefix}ᴏᴘᴇɴᴀɪ
❒│▸ ${prefix}ᴀɪ
❒│▸ ${prefix}ʙᴀʀᴅ
❒│▸ ${prefix}ᴘʀᴏᴅɪᴀ
❒│▸ ${prefix}ᴅɪꜰꜰᴜꜱɪᴏɴ-ᴀɴɪᴍᴇ
❒│▸ ${prefix}ᴛʀᴀᴠᴇʟ-ᴀꜱꜱɪꜱᴛᴀɴᴛ
❒│▸ ${prefix}ᴏᴄʀ
❒│▸ ${prefix}ɢᴜʀᴜ-ᴀɪ
❒│▸ ${prefix}ᴇᴍɪ-ᴀɪ
❒│▸ ${prefix}ᴄʟᴀᴜᴅᴇ-ᴀɪ
❒│▸ ${prefix}ᴄᴏꜱᴛᴜᴍᴇ-ᴀɪ
❒│▸ ${prefix}ʜᴇʀᴄ-ᴀɪ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴄᴀʀᴛᴏᴏɴ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴀɴɪᴍᴇꜰʏ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ʟᴇxɪᴄᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴘʀᴏᴅɪᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ꜱɪᴍᴜʀɢ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ʀᴀᴀᴠᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ꜱʜᴏɴɪɴ
❒│▸ ${prefix}ʀᴇᴀʟɪꜱᴛɪᴄ
❒│▸ ${prefix}3ᴅᴍᴏᴅᴇʟ
❒│▸ ${prefix}ᴊᴀᴅɪᴢᴏᴍʙɪᴇ
❒│▸ ${prefix}ʙʟᴀᴄᴋʙᴏxᴀɪ
❒│▸ ${prefix}ᴘʜᴏᴛᴏʟᴇᴀᴘᴀɪ
❒│▸ ${prefix}ᴅɪꜰꜰᴜꜱɪᴏɴ
❒│▸ ${prefix}ɪɴᴅᴏ-ᴀɪ
❒│▸ ${prefix}ʟᴀᴍᴀᴀɪ
❒│▸ ${prefix}ᴀɪᴠᴏ
❒│▸ ${prefix}ɢᴇᴍɪɴɪ
❒│▸ ${prefix}ᴛᴇxᴛ2ɪᴍɢ
❒│▸ ${prefix}ᴀʙꜱᴏʟᴜᴛᴇʟʏ
❒│▸ ${prefix}ᴅᴀʟʟᴇ
❒│▸ ${prefix}ʙɪɴɢɪᴍɢ
❒│▸ ${prefix}ɢᴘᴛ4
❒│▸ ${prefix}ɢᴘᴛ4_2
❒│▸ ${prefix}ᴀɴʏᴛʜɪɴɢ
❒│▸ ${prefix}ʜᴅᴠɪᴅ
❒│▸ ${prefix}ᴄᴀɪ
❒│▸ ${prefix}ʏᴏᴜᴀɪ
❒│▸ ${prefix}ʀᴇᴍɪɴɪ
❒│▸ ${prefix}ᴊᴀᴅɪᴀɴɪᴍᴇ
❒│▸ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
❒│▸ ${prefix}ɴᴜʟɪꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ꜰᴜɴ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴍᴇᴍᴇ
❒│▸ ${prefix}ᴘᴘᴄᴏᴜᴘʟᴇ
❒│▸ ${prefix}ᴅᴇꜰɪɴᴇ
❒│▸ ${prefix}Qᴄ
❒│▸ ${prefix}ʟʏʀɪᴄꜱ
❒│▸ ${prefix}ꜱᴜɪᴛ
❒│▸ ${prefix}ᴍᴀᴛʜ
❒│▸ ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
❒│▸ ${prefix}ꜰᴀᴄᴛ
❒│▸ ${prefix}ᴛʀᴜᴛʜ
❒│▸ ${prefix}ᴅᴀʀᴇ
❒│▸ ${prefix}ᴄᴏᴜᴘʟᴇ
❒│▸ ${prefix}ꜱᴏᴜʟᴍᴀᴛᴇ
❒│▸ ${prefix}ꜱᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴀɴᴅꜱᴏᴍᴇᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴏᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ꜱᴍᴀʀᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ɢʀᴇᴀᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴇᴠɪʟᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴅᴏɢᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴄᴏᴏʟᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴡᴀɪꜰᴜᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴀᴡᴇꜱᴏᴍᴇᴄʜᴇᴄᴋ
❒│▸ ${prefix}ɢᴀʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʟᴇꜱʙɪᴀɴᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴘʀᴇᴛᴛʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʟᴏᴠᴇʟʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴘɪᴄᴋ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱ
❒│▸ ${prefix}ᴄᴀɴ
❒│▸ ${prefix}ɪꜱ
❒│▸ ${prefix}ᴡʜᴇɴ
❒│▸ ${prefix}ᴡʜᴇʀᴇ
❒│▸ ${prefix}ᴡʜᴀᴛ
❒│▸ ${prefix}ʜᴏᴡ
❒│▸ ${prefix}ʀᴀᴛᴇ
❒│▸ ${prefix}ᴄʀʏ
❒│▸ ${prefix}ᴋɪʟʟ
❒│▸ ${prefix}ʜᴜɢ
❒│▸ ${prefix}ᴘᴀᴛ
❒│▸ ${prefix}ʟɪᴄᴋ
❒│▸ ${prefix}ᴋɪꜱꜱ
❒│▸ ${prefix}ʙɪᴛᴇ
❒│▸ ${prefix}ʏᴇᴇᴛ
❒│▸ ${prefix}ʙᴜʟʟʏ
❒│▸ ${prefix}ʙᴏɴᴋ
❒│▸ ${prefix}ᴡɪɴᴋ
❒│▸ ${prefix}ᴘᴏᴋᴇ
❒│▸ ${prefix}ɴᴏᴍ
❒│▸ ${prefix}ꜱʟᴀᴘ
❒│▸ ${prefix}ꜱᴍɪʟᴇ
❒│▸ ${prefix}ᴡᴀᴠᴇ
❒│▸ ${prefix}ᴀᴡᴏᴏ
❒│▸ ${prefix}ʙʟᴜꜱʜ
❒│▸ ${prefix}ꜱᴍᴜɢ
❒│▸ ${prefix}ɢʟᴏᴍᴘ
❒│▸ ${prefix}ʜᴀᴘᴘʏ
❒│▸ ${prefix}ᴅᴀɴᴄᴇ
❒│▸ ${prefix}ᴄʀɪɴɢᴇ
❒│▸ ${prefix}ᴄᴜᴅᴅʟᴇ
❒│▸ ${prefix}ʜɪɢʜꜰɪᴠᴇ
❒│▸ ${prefix}ꜱʜɪɴᴏʙᴜ
❒│▸ ${prefix}ʜᴀɴᴅʜᴏʟᴅ
❒│▸ ${prefix}ꜱᴘᴀɴᴋ
❒│▸ ${prefix}ᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ᴀᴠᴀᴛᴀʀ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ꜰᴏxɢɪʀʟ
❒│▸ ${prefix}ɢᴇᴄɢ
❒│▸ ${prefix}ᴄʜᴇᴄᴋᴍᴇ
❒│▸ ${prefix}ꜱᴏᴜɴᴅ1 - ꜱᴏᴜɴᴅ161
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴇꜱᴛʜᴇᴛɪᴄ
❒│▸ ${prefix}ᴄᴏꜰꜰᴇᴇ
❒│▸ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
❒│▸ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}ᴀʀᴛ
❒│▸ ${prefix}ʙᴛꜱ
❒│▸ ${prefix}ᴅᴏɢᴡᴏᴏꜰ
❒│▸ ${prefix}ᴄᴀᴛᴍᴇᴏᴡ
❒│▸ ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ
❒│▸ ${prefix}ɢᴏᴏꜱᴇʙɪʀᴅ
❒│▸ ${prefix}8ʙᴀʟʟᴘᴏʟʟ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏ
❒│▸ ${prefix}ʜᴀᴄᴋᴇʀ
❒│▸ ${prefix}ᴄʏʙᴇʀ
❒│▸ ${prefix}ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}ɪꜱʟᴀᴍɪᴄ
❒│▸ ${prefix}ᴊᴇɴɴɪᴇ
❒│▸ ${prefix}ᴊɪꜱᴏ
❒│▸ ${prefix}ꜱᴀᴛᴀɴɪᴄ
❒│▸ ${prefix}ᴊᴜꜱᴛɪɴᴀ
❒│▸ ${prefix}ᴄᴀʀᴛᴏᴏɴ
❒│▸ ${prefix}ᴘᴇɴᴛᴏʟ
❒│▸ ${prefix}ᴄᴀᴛ
❒│▸ ${prefix}ᴋᴘᴏᴘ
❒│▸ ${prefix}ᴇxᴏ
❒│▸ ${prefix}ʟɪꜱᴀ
❒│▸ ${prefix}ꜱᴘᴀᴄᴇ
❒│▸ ${prefix}ᴄᴀʀ
❒│▸ ${prefix}ᴛᴇᴄʜɴᴏʟᴏɢʏ
❒│▸ ${prefix}ʙɪᴋᴇ
❒│▸ ${prefix}ꜱʜᴏʀᴛQᴜᴏᴛᴇ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴏʀᴋ
❒│▸ ${prefix}ʜᴀᴄᴋɪɴɢ
❒│▸ ${prefix}ʙᴏɴᴇᴋᴀ
❒│▸ ${prefix}ʀᴏꜱᴇ
❒│▸ ${prefix}ʀʏᴜᴊɪɴ
❒│▸ ${prefix}ᴜʟᴢᴢᴀɴɢʙᴏʏ
❒│▸ ${prefix}ᴜʟᴢᴢᴀɴɢɢɪʀʟ
❒│▸ ${prefix}ᴡᴀʟʟᴍʟ
❒│▸ ${prefix}ᴡᴀʟʟᴘʜᴏɴᴇ
❒│▸ ${prefix}ᴍᴏᴜɴᴛᴀɪɴ
❒│▸ ${prefix}ɢᴏᴏꜱᴇ
❒│▸ ${prefix}ᴘʀᴏꜰɪʟᴇᴘɪᴄ
❒│▸ ${prefix}ᴄᴏᴜᴘʟᴇᴘɪᴄ
❒│▸ ${prefix}ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
❒│▸ ${prefix}ᴘᴜʙɢ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
❒│▸ ${prefix}ʜɪᴊᴀʙ
❒│▸ ${prefix}ᴄʜɪɴᴇꜱᴇ
❒│▸ ${prefix}ɪɴᴅᴏ
❒│▸ ${prefix}ᴊᴀᴘᴀɴᴇꜱᴇ
❒│▸ ${prefix}ᴋᴏʀᴇᴀɴ
❒│▸ ${prefix}ᴍᴀʟᴀʏ
❒│▸ ${prefix}ᴛʜᴀɪ
❒│▸ ${prefix}ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɢᴏᴏꜱᴇ
❒│▸ ${prefix}ᴡᴏᴏꜰ
❒│▸ ${prefix}8ʙᴀʟʟ
❒│▸ ${prefix}ʟɪᴢᴀʀᴅ
❒│▸ ${prefix}ᴍᴇᴏᴡ
❒│▸ ${prefix}ɢᴜʀᴀ
❒│▸ ${prefix}ᴅᴏɢᴇ
❒│▸ ${prefix}ᴘᴀᴛʀɪᴄᴋ
❒│▸ ${prefix}ʟᴏᴠᴇꜱᴛɪᴄᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴋɪʀᴀ
❒│▸ ${prefix}ᴀᴋɪʏᴀᴍᴀ
❒│▸ ${prefix}ᴀɴᴀ
❒│▸ ${prefix}ᴀꜱᴜɴᴀ
❒│▸ ${prefix}ᴀʏᴜᴢᴀᴡᴀ
❒│▸ ${prefix}ʙᴏʀᴜᴛᴏ
❒│▸ ${prefix}ᴄʜɪʜᴏ
❒│▸ ${prefix}ᴄʜɪᴛᴏɢᴇ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏʟᴏʟɪ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏꜱᴀɢɪʀʟ
❒│▸ ${prefix}ᴅᴇɪᴅᴀʀᴀ
❒│▸ ${prefix}ᴅᴏʀᴀᴇᴍᴏɴ
❒│▸ ${prefix}ᴇʟᴀɪɴᴀ
❒│▸ ${prefix}ᴇᴍɪʟɪᴀ
❒│▸ ${prefix}ᴇʀᴢᴀ
❒│▸ ${prefix}ɢʀᴇᴍᴏʀʏ
❒│▸ ${prefix}ʜᴇꜱᴛɪᴀ
❒│▸ ${prefix}ʜɪɴᴀᴛᴀ
❒│▸ ${prefix}ʜᴜꜱʙᴜ
❒│▸ ${prefix}ɪɴᴏʀɪ
❒│▸ ${prefix}ɪꜱᴜᴢᴜ
❒│▸ ${prefix}ɪᴛᴀᴄʜɪ
❒│▸ ${prefix}ɪᴛᴏʀɪ
❒│▸ ${prefix}ᴋᴀɢᴀ
❒│▸ ${prefix}ᴋᴀɢᴜʀᴀ
❒│▸ ${prefix}ᴋᴀᴋᴀꜱɪʜ
❒│▸ ${prefix}ᴋᴀᴏʀɪ
❒│▸ ${prefix}ᴋᴇɴᴇᴋɪ
❒│▸ ${prefix}ᴋᴏᴛᴏʀɪ
❒│▸ ${prefix}ᴋᴜʀᴜᴍɪ
❒│▸ ${prefix}ʟᴏʟɪ
❒│▸ ${prefix}ᴍᴀᴅᴀʀᴀ
❒│▸ ${prefix}ᴍᴇɢᴜᴍɪɴ
❒│▸ ${prefix}ᴍɪᴋᴀꜱᴀ
❒│▸ ${prefix}ᴍɪᴋᴇʏ
❒│▸ ${prefix}ᴍɪᴋᴜ
❒│▸ ${prefix}ᴍɪɴᴀᴛᴏ
❒│▸ ${prefix}ɴᴀʀᴜᴛᴏ
❒│▸ ${prefix}ɴᴇᴋᴏ
❒│▸ ${prefix}ɴᴇᴋᴏ2
❒│▸ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
❒│▸ ${prefix}ɴᴇᴢᴜᴋᴏ
❒│▸ ${prefix}ᴏɴᴇᴘɪᴇᴄᴇ
❒│▸ ${prefix}ᴘᴏᴋᴇᴍᴏɴ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
❒│▸ ${prefix}ʀɪᴢᴇ
❒│▸ ${prefix}ꜱᴀɢɪʀɪ
❒│▸ ${prefix}ꜱᴀᴋᴜʀᴀ
❒│▸ ${prefix}ꜱᴀꜱᴜᴋᴇ
❒│▸ ${prefix}ꜱʜɪɴᴀ
❒│▸ ${prefix}ꜱʜɪɴᴋᴀ
❒│▸ ${prefix}ꜱʜɪɴᴏᴍɪʏᴀ
❒│▸ ${prefix}ꜱʜɪᴢᴜᴋᴀ
❒│▸ ${prefix}ꜱʜᴏᴛᴀ
❒│▸ ${prefix}ᴛᴇᴊɪɴᴀ
❒│▸ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
❒│▸ ${prefix}ᴛꜱᴜɴᴀᴅᴇ
❒│▸ ${prefix}ᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀʟʟ
❒│▸ ${prefix}ʏᴏᴛꜱᴜʙᴀ
❒│▸ ${prefix}ʏᴜᴋɪ
❒│▸ ${prefix}ʏᴜʟɪʙᴏᴄɪʟ
❒│▸ ${prefix}ʏᴜᴍᴇᴋᴏ
❒│▸ ${prefix}8ʙᴀʟʟ
❒│▸ ${prefix}ᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ɢᴇᴄɢ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙʟᴜꜱʜ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴍᴜɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴍɪʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴋɪꜱꜱ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱʟᴀᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
❒│▸ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜰᴇᴇᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ
❒│▸ ${prefix}ɢᴇɴꜱʜɪɴ
❒│▸ ${prefix}ᴀɴɪᴍᴇ
❒│▸ ${prefix}ᴀᴍᴠ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴀɴɪᴍᴇ ɴꜰꜱᴡ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɢɪꜰʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɢɪꜰʙʟᴏᴡᴊᴏʙ
❒│▸ ${prefix}ʜᴇɴᴛᴀɪᴠɪᴅ
❒│▸ ${prefix}ʜɴᴇᴋᴏ
❒│▸ ${prefix}ɴᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴘᴀɴᴋ
❒│▸ ${prefix}ᴛʀᴀᴘ
❒│▸ ${prefix}ɢᴀꜱᴍ
❒│▸ ${prefix}ᴀʜᴇɢᴀᴏ
❒│▸ ${prefix}ᴀꜱꜱ
❒│▸ ${prefix}ʙᴅꜱᴍ
❒│▸ ${prefix}ʙʟᴏᴡᴊᴏʙ
❒│▸ ${prefix}ᴄᴜᴄᴋᴏʟᴅ
❒│▸ ${prefix}ᴄᴜᴍ
❒│▸ ${prefix}ᴍɪʟꜰ
❒│▸ ${prefix}ᴇʙᴀ
❒│▸ ${prefix}ᴇʀᴏ
❒│▸ ${prefix}ꜰᴇᴍᴅᴏᴍ
❒│▸ ${prefix}ꜰᴏᴏᴛ
❒│▸ ${prefix}ɢᴀɴɢʙᴀɴɢ
❒│▸ ${prefix}ɢʟᴀꜱᴇꜱᴇ
❒│▸ ${prefix}ᴊᴀʜʏ
❒│▸ ${prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
❒│▸ ${prefix}ᴍᴀɴɢᴀ
❒│▸ ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ2
❒│▸ ${prefix}ɴꜱꜰᴡʟᴏʟɪ
❒│▸ ${prefix}ᴏʀɢʏ
❒│▸ ${prefix}ᴘᴀɴᴛɪᴇꜱ
❒│▸ ${prefix}ᴘᴜꜱꜱʏ
❒│▸ ${prefix}ᴛᴇɴᴛᴀᴄʟᴇꜱ
❒│▸ ${prefix}ᴛʜɪɢʜꜱ
❒│▸ ${prefix}ʏᴜʀɪ
❒│▸ ${prefix}ᴢᴇᴛᴛᴀɪ
❒│▸ ${prefix}xɴxxꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}xɴxxᴅʟ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸ 

┌──『•• 🎯 *ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɢʟɪᴛᴄʜᴛᴇxᴛ
❒│▸ ${prefix}ᴡʀɪᴛᴇᴛᴇxᴛ
❒│▸ ${prefix}ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
❒│▸ ${prefix}ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
❒│▸ ${prefix}ᴘɪxᴇʟɢʟɪᴛᴄʜ
❒│▸ ${prefix}ɴᴇᴏɴɢʟɪᴛᴄʜ
❒│▸ ${prefix}ꜰʟᴀɢᴛᴇxᴛ
❒│▸ ${prefix}ꜰʟᴀɢ3ᴅᴛᴇxᴛ
❒│▸ ${prefix}ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ
❒│▸ ${prefix}ɢʟᴏᴡɪɴɢᴛᴇxᴛ
❒│▸ ${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
❒│▸ ${prefix}ʟᴏɢᴏᴍᴀᴋᴇʀ
❒│▸ ${prefix}ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
❒│▸ ${prefix}ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
❒│▸ ${prefix}ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
❒│▸ ${prefix}ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ
❒│▸ ${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ
❒│▸ ${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
❒│▸ ${prefix}ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ
❒│▸ ${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}1917ꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴍᴀᴋɪɴɢɴᴇᴏɴ
❒│▸ ${prefix}ʀᴏʏᴀʟᴛᴇxᴛ
❒│▸ ${prefix}ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ
❒│▸ ${prefix}ɢᴀʟᴀxʏꜱᴛʏʟᴇ
❒│▸ ${prefix}ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴅᴀᴛᴀʙᴀꜱᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴇᴛᴄᴍᴅ
❒│▸ ${prefix}ᴅᴇʟᴄᴍᴅ
❒│▸ ${prefix}ʟɪꜱᴛᴄᴍᴅ
❒│▸ ${prefix}ʟᴏᴄᴋᴄᴍᴅ
❒│▸ ${prefix}ᴀᴅᴅᴍꜱɢ
❒│▸ ${prefix}ᴅᴇʟᴍꜱɢ
❒│▸ ${prefix}ɢᴇᴛᴍꜱɢ
❒│▸ ${prefix}ʟɪꜱᴛᴍꜱɢ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ʙᴜɢ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴅᴀɴꜱʏᴀᴠɪᴘ
❒│▸ ${prefix}ᴅᴀɴꜱʏᴀᴄʀᴜꜱʜ
❒│▸ ${prefix}xᴀɴᴅʀᴏɪᴅ
❒│▸ ${prefix}xᴀɴᴅʀᴏɪᴅ2
❒│▸ ${prefix}ꜱʏꜱᴛᴇᴍᴜɪʟᴄʀᴀꜱʜ
❒│▸ ${prefix}xꜱʏꜱᴜɪ
❒│▸ ${prefix}xɪᴏꜱ
❒│▸ ${prefix}xɪᴏꜱ2
❒│▸ ${prefix}xɢᴄ
❒│▸ ${prefix}ɪᴏꜱᴋɪʟʟ
❒│▸ ${prefix}ɪᴏꜱx
❒│▸ ${prefix}ᴏɴᴇᴋɪʟʟ
❒│▸ ${prefix}ᴏɴᴇᴄʟɪᴄᴋᴀʟʟ
❒│▸ ${prefix}xꜱᴀᴍꜱᴜɴɢ
❒│▸ ${prefix}xᴡᴀᴡᴇʙ
❒│▸ ${prefix}ᴅᴏᴜʙʟᴇᴋɪʟʟ
❒│▸ ${prefix}ᴛʀɪᴘʟᴇᴋɪʟʟ
❒│▸ ${prefix}💀
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴘɪɴɢ
❒│▸ ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
❒│▸ ${prefix}ᴄᴇᴋᴋʜᴏᴅᴀᴍ
❒│▸ ${prefix}ᴘᴀᴘᴛᴛ
❒│▸ ${prefix}ᴀʟᴋɪᴛᴀʙ
❒│▸ ${prefix}ᴛᴏᴛᴀʟꜰɪᴛᴜʀ
❒│▸ ${prefix}ᴍᴇɴᴜ
❒│▸ ${prefix}ᴀʟɪᴠᴇ
❒│▸ ${prefix}ꜱᴏᴄɪᴀʟᴍᴇᴅɪᴀ
❒│▸ ${prefix}ᴍʏɪᴘ
❒│▸ ${prefix}ʀᴇᴘᴏʀᴛʙᴜɢ
❒│▸ ${prefix}ʟɪꜱᴛᴘᴇᴍ
❒│▸ ${prefix}ʟɪꜱᴛꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ʟɪꜱᴛɪᴍᴀɢᴇ
❒│▸ ${prefix}ʟɪꜱᴛᴠɪᴅᴇᴏ
❒│▸ ${prefix}ʟɪꜱᴛᴠɴ
❒│▸ ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
❒│▸ ${prefix}ʟɪꜱᴛɢᴄ
❒│▸ ${prefix}ʟɪꜱᴛᴘᴄ
❒│▸ ${prefix}ᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴊᴀᴅɪʙᴏᴛ
❒│▸ ${prefix}ʟɪꜱᴛᴊᴀᴅɪʙᴏᴛ
❒│▸ ${prefix}ꜰʀɪᴇɴᴅ
❒│▸ ${prefix}ᴏʙꜰᴜꜱᴄᴀᴛᴇ
❒│▸ ${prefix}ꜱᴛʏʟᴇᴛᴇxᴛ
❒│▸ ${prefix}ꜰʟɪᴘᴛᴇxᴛ
❒│▸ ${prefix}ᴛᴛꜱ
❒│▸ ${prefix}ꜱᴀʏ
❒│▸ ${prefix}ᴛᴏɢɪꜰ
❒│▸ ${prefix}ᴛᴏQʀ
❒│▸ ${prefix}ʙᴀꜱꜱ
❒│▸ ${prefix}ʙʟᴏᴡɴ
❒│▸ ${prefix}ᴅᴇᴇᴘ
❒│▸ ${prefix}ᴇᴀʀʀᴀᴘᴇ
❒│▸ ${prefix}ꜰᴀꜱᴛ
❒│▸ ${prefix}ꜰᴀᴛ
❒│▸ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
❒│▸ ${prefix}ʀᴇᴠᴇʀꜱᴇ
❒│▸ ${prefix}ʀᴏʙᴏᴛ
❒│▸ ${prefix}ꜱʟᴏᴡ
❒│▸ ${prefix}ꜱᴍᴏᴏᴛʜ
❒│▸ ${prefix}ꜱQᴜɪʀʀᴇʟ
❒│▸ ${prefix}ᴛɪɴʏᴜʀʟ
❒│▸ ${prefix}ᴛᴏᴠɴ
❒│▸ ${prefix}ᴛᴏᴀᴜᴅɪᴏ
❒│▸ ${prefix}ᴛᴏᴍᴘ3
❒│▸ ${prefix}ᴛᴏᴍᴘ4
❒│▸ ${prefix}ᴛᴏɪᴍɢ
❒│▸ ${prefix}ᴛᴏᴏɴᴄᴇ
❒│▸ ${prefix}ꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴛᴀᴋᴇ
❒│▸ ${prefix}ᴇᴍᴏᴊɪ
❒│▸ ${prefix}ᴠᴏʟᴜᴍᴇ
❒│▸ ${prefix}ᴇʙɪɴᴀʀʏ
❒│▸ ${prefix}ᴅʙɪɴᴀʀʏ
❒│▸ ${prefix}ꜱꜱᴡᴇʙ
❒│▸ ${prefix}Qᴜᴏᴛᴇᴅ
❒│▸ ${prefix}ʀᴜɴᴛɪᴍᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

┌──『•• 🎯 *ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
❒│▸ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
❒│▸ ${prefix}ꜱᴜᴀᴍɪɪꜱᴛʀɪ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴄɪɴᴛᴀ
❒│▸ ${prefix}ᴄᴏᴄᴏᴋɴᴀᴍᴇ
❒│▸ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ
❒│▸ ${prefix}ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
❒│▸ ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
❒│▸ ${prefix}ʀᴇᴢᴇᴋɪ
❒│▸ ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ
❒│▸ ${prefix}ɴᴀꜱɪʙ
❒│▸ ${prefix}ᴘᴇɴʏᴀᴋɪᴛ
❒│▸ ${prefix}ᴛᴀʀᴏᴛ
❒│▸ ${prefix}ꜰᴇɴɢꜱʜᴜɪ
❒│▸ ${prefix}ʜᴀʀɪʙᴀɪᴋ
❒│▸ ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ
❒│▸ ${prefix}ʜᴀʀɪꜱɪᴀʟ
❒│▸ ${prefix}ɴᴀɢᴀʜᴀʀɪ
❒│▸ ${prefix}ᴀʀᴀʜʀᴇᴢᴇᴋɪ
❒│▸ ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
❒│▸ ${prefix}ᴡᴇᴛᴏɴ
❒│▸ ${prefix}ᴋᴀʀᴀᴋᴛᴇʀ
❒│▸ ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
❒│▸ ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ
❒│▸ ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
❒│▸ ${prefix}ᴢᴏᴅɪᴀᴋ
❒│▸ ${prefix}ꜱʜɪᴏ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.animemenu = (prefix) => {
return`┌──『•• 🎯 *ᴀɴɪᴍᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴋɪʀᴀ
❒│▸ ${prefix}ᴀᴋɪʏᴀᴍᴀ
❒│▸ ${prefix}ᴀɴᴀ
❒│▸ ${prefix}ᴀꜱᴜɴᴀ
❒│▸ ${prefix}ᴀʏᴜᴢᴀᴡᴀ
❒│▸ ${prefix}ʙᴏʀᴜᴛᴏ
❒│▸ ${prefix}ᴄʜɪʜᴏ
❒│▸ ${prefix}ᴄʜɪᴛᴏɢᴇ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏʟᴏʟɪ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏꜱᴀɢɪʀʟ
❒│▸ ${prefix}ᴅᴇɪᴅᴀʀᴀ
❒│▸ ${prefix}ᴅᴏʀᴀᴇᴍᴏɴ
❒│▸ ${prefix}ᴇʟᴀɪɴᴀ
❒│▸ ${prefix}ᴇᴍɪʟɪᴀ
❒│▸ ${prefix}ᴇʀᴢᴀ
❒│▸ ${prefix}ɢʀᴇᴍᴏʀʏ
❒│▸ ${prefix}ʜᴇꜱᴛɪᴀ
❒│▸ ${prefix}ʜɪɴᴀᴛᴀ
❒│▸ ${prefix}ʜᴜꜱʙᴜ
❒│▸ ${prefix}ɪɴᴏʀɪ
❒│▸ ${prefix}ɪꜱᴜᴢᴜ
❒│▸ ${prefix}ɪᴛᴀᴄʜɪ
❒│▸ ${prefix}ɪᴛᴏʀɪ
❒│▸ ${prefix}ᴋᴀɢᴀ
❒│▸ ${prefix}ᴋᴀɢᴜʀᴀ
❒│▸ ${prefix}ᴋᴀᴋᴀꜱɪʜ
❒│▸ ${prefix}ᴋᴀᴏʀɪ
❒│▸ ${prefix}ᴋᴇɴᴇᴋɪ
❒│▸ ${prefix}ᴋᴏᴛᴏʀɪ
❒│▸ ${prefix}ᴋᴜʀᴜᴍɪ
❒│▸ ${prefix}ʟᴏʟɪ
❒│▸ ${prefix}ᴍᴀᴅᴀʀᴀ
❒│▸ ${prefix}ᴍᴇɢᴜᴍɪɴ
❒│▸ ${prefix}ᴍɪᴋᴀꜱᴀ
❒│▸ ${prefix}ᴍɪᴋᴇʏ
❒│▸ ${prefix}ᴍɪᴋᴜ
❒│▸ ${prefix}ᴍɪɴᴀᴛᴏ
❒│▸ ${prefix}ɴᴀʀᴜᴛᴏ
❒│▸ ${prefix}ɴᴇᴋᴏ
❒│▸ ${prefix}ɴᴇᴋᴏ2
❒│▸ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
❒│▸ ${prefix}ɴᴇᴢᴜᴋᴏ
❒│▸ ${prefix}ᴏɴᴇᴘɪᴇᴄᴇ
❒│▸ ${prefix}ᴘᴏᴋᴇᴍᴏɴ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɴɪᴍᴇ2
❒│▸ ${prefix}ʀɪᴢᴇ
❒│▸ ${prefix}ꜱᴀɢɪʀɪ
❒│▸ ${prefix}ꜱᴀᴋᴜʀᴀ
❒│▸ ${prefix}ꜱᴀꜱᴜᴋᴇ
❒│▸ ${prefix}ꜱʜɪɴᴀ
❒│▸ ${prefix}ꜱʜɪɴᴋᴀ
❒│▸ ${prefix}ꜱʜɪɴᴏᴍɪʏᴀ
❒│▸ ${prefix}ꜱʜɪᴢᴜᴋᴀ
❒│▸ ${prefix}ꜱʜᴏᴛᴀ
❒│▸ ${prefix}ᴛᴇᴊɪɴᴀ
❒│▸ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
❒│▸ ${prefix}ᴛꜱᴜɴᴀᴅᴇ
❒│▸ ${prefix}ᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀʟʟ
❒│▸ ${prefix}ʏᴏᴛꜱᴜʙᴀ
❒│▸ ${prefix}ʏᴜᴋɪ
❒│▸ ${prefix}ʏᴜʟɪʙᴏᴄɪʟ
❒│▸ ${prefix}ʏᴜᴍᴇᴋᴏ
❒│▸ ${prefix}8ʙᴀʟʟ
❒│▸ ${prefix}ᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ɢᴇᴄɢ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴀᴡᴏᴏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴍᴇɢᴜᴍɪɴ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱʜɪɴᴏʙᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴀɴᴅʜᴏʟᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜɪɢʜꜰɪᴠᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄʀɪɴɢᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴅᴀɴᴄᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴀᴘᴘʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇɢʟᴏᴍᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙʟᴜꜱʜ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴍᴜɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀᴠᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴍɪʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴘᴏᴋᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡɪɴᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙᴏɴᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙᴜʟʟʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇʏᴇᴇᴛ
❒│▸ ${prefix}ᴀɴɪᴍᴇʙɪᴛᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇʟɪᴄᴋ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴋɪʟʟ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄʀʏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡʟᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴋɪꜱꜱ
❒│▸ ${prefix}ᴀɴɪᴍᴇʜᴜɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇɴᴇᴋᴏ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴘᴀᴛ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱʟᴀᴘ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴄᴜᴅᴅʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇɴᴏᴍ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜰᴏxɢɪʀʟ
❒│▸ ${prefix}ᴀɴɪᴍᴇɢᴇᴄɢ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜰᴇᴇᴅ
❒│▸ ${prefix}ᴀɴɪᴍᴇᴀᴠᴀᴛᴀʀ
❒│▸ ${prefix}ɢᴇɴꜱʜɪɴ
❒│▸ ${prefix}ᴀɴɪᴍᴇ
❒│▸ ${prefix}ᴀᴍᴠ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.ownermenu = (prefix) => {
return`┌──『•• 🎯 *ᴏᴡɴᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ
❒│▸ ${prefix}ᴏɴʟʏᴘᴄ
❒│▸ ${prefix}ᴏɴʟʏɢᴄ
❒│▸ ${prefix}ꜱᴇʟꜰ
❒│▸ ${prefix}ᴄʟᴇᴀʀᴄʜᴀᴛ
❒│▸ ${prefix}ᴘɪɴᴄʜᴀᴛ
❒│▸ ${prefix}ᴜɴᴘɪɴᴄʜᴀᴛ
❒│▸ ${prefix}ɢᴄᴏɴʟʏ
❒│▸ ${prefix}ᴘᴜʙʟɪᴄ
❒│▸ ${prefix}ꜱᴇᴛᴘᴘᴘᴀɴᴊᴀɴɢ
❒│▸ ${prefix}ꜱᴛᴘᴘɢᴄᴘᴀɴᴊᴀɴɢ
❒│▸ ${prefix}ᴀᴅᴅᴄᴀꜱᴇ
❒│▸ ${prefix}ᴊᴏɪɴ
❒│▸ ${prefix}ʙᴄᴛᴇxᴛ
❒│▸ ${prefix}ᴘᴏʟʟ
❒│▸ ${prefix}ʙᴄɪᴍᴀɢᴇ
❒│▸ ${prefix}ʙᴄᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴄʀᴇᴀᴛᴇɢᴄ
❒│▸ ${prefix}ꜱᴇᴛᴇxɪꜰ
❒│▸ ${prefix}ᴜꜱᴇʀᴊɪᴅ
❒│▸ ${prefix}ꜱᴇᴛʙᴏᴛɴᴀᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛʙᴏᴛʙɪᴏ
❒│▸ ${prefix}ᴅᴇʟᴘᴘʙᴏᴛ
❒│▸ ${prefix}ʀᴇꜱᴛᴀʀᴛ
❒│▸ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
❒│▸ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
❒│▸ ${prefix}ᴅᴇʟᴘʀᴇᴍ
❒│▸ ${prefix}ᴀᴅᴅᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴅᴇʟᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴀᴅᴅᴠɴ
❒│▸ ${prefix}ᴅᴇʟᴠɴ
❒│▸ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴅᴇʟꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴀᴅᴅɪᴍᴀɢᴇ
❒│▸ ${prefix}ᴅᴇʟɪᴍᴀɢᴇ
❒│▸ ${prefix}ᴀᴅᴅᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴅᴇʟᴠɪᴅᴇᴏ
❒│▸ ${prefix}ʙʟᴏᴄᴋ
❒│▸ ${prefix}ᴜɴʙʟᴏᴄᴋ ᴅᴇʟ
❒│▸ ${prefix}ʟᴇᴀᴠᴇɢᴄ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ɢᴇᴛᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴊᴘᴍ
❒│▸ ${prefix}ᴊᴘᴍ2
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.othermenu = (prefix) => {
return`┌──『•• 🎯 *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴘɪɴɢ
❒│▸ ${prefix}ʀᴇᴀᴅᴠɪᴇᴡᴏɴᴄᴇ
❒│▸ ${prefix}ᴄᴇᴋᴋʜᴏᴅᴀᴍ
❒│▸ ${prefix}ᴘᴀᴘᴛᴛ
❒│▸ ${prefix}ᴀʟᴋɪᴛᴀʙ
❒│▸ ${prefix}ᴛᴏᴛᴀʟꜰɪᴛᴜʀ
❒│▸ ${prefix}ᴍᴇɴᴜ
❒│▸ ${prefix}ᴀʟɪᴠᴇ
❒│▸ ${prefix}ꜱᴏᴄɪᴀʟᴍᴇᴅɪᴀ
❒│▸ ${prefix}ᴍʏɪᴘ
❒│▸ ${prefix}ʀᴇᴘᴏʀᴛʙᴜɢ
❒│▸ ${prefix}ʟɪꜱᴛᴘᴇᴍ
❒│▸ ${prefix}ʟɪꜱᴛꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ʟɪꜱᴛɪᴍᴀɢᴇ
❒│▸ ${prefix}ʟɪꜱᴛᴠɪᴅᴇᴏ
❒│▸ ${prefix}ʟɪꜱᴛᴠɴ
❒│▸ ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
❒│▸ ${prefix}ʟɪꜱᴛɢᴄ
❒│▸ ${prefix}ʟɪꜱᴛᴘᴄ
❒│▸ ${prefix}ᴏᴡɴᴇʀ
❒│▸ ${prefix}ᴊᴀᴅɪʙᴏᴛ
❒│▸ ${prefix}ʟɪꜱᴛᴊᴀᴅɪʙᴏᴛ
❒│▸ ${prefix}ꜰʀɪᴇɴᴅ
❒│▸ ${prefix}ᴏʙꜰᴜꜱᴄᴀᴛᴇ
❒│▸ ${prefix}ꜱᴛʏʟᴇᴛᴇxᴛ
❒│▸ ${prefix}ꜰʟɪᴘᴛᴇxᴛ
❒│▸ ${prefix}ᴛᴛꜱ
❒│▸ ${prefix}ꜱᴀʏ
❒│▸ ${prefix}ᴛᴏɢɪꜰ
❒│▸ ${prefix}ᴛᴏQʀ
❒│▸ ${prefix}ʙᴀꜱꜱ
❒│▸ ${prefix}ʙʟᴏᴡɴ
❒│▸ ${prefix}ᴅᴇᴇᴘ
❒│▸ ${prefix}ᴇᴀʀʀᴀᴘᴇ
❒│▸ ${prefix}ꜰᴀꜱᴛ
❒│▸ ${prefix}ꜰᴀᴛ
❒│▸ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
❒│▸ ${prefix}ʀᴇᴠᴇʀꜱᴇ
❒│▸ ${prefix}ʀᴏʙᴏᴛ
❒│▸ ${prefix}ꜱʟᴏᴡ
❒│▸ ${prefix}ꜱᴍᴏᴏᴛʜ
❒│▸ ${prefix}ꜱQᴜɪʀʀᴇʟ
❒│▸ ${prefix}ᴛɪɴʏᴜʀʟ
❒│▸ ${prefix}ᴛᴏᴠɴ
❒│▸ ${prefix}ᴛᴏᴀᴜᴅɪᴏ
❒│▸ ${prefix}ᴛᴏᴍᴘ3
❒│▸ ${prefix}ᴛᴏᴍᴘ4
❒│▸ ${prefix}ᴛᴏɪᴍɢ
❒│▸ ${prefix}ᴛᴏᴏɴᴄᴇ
❒│▸ ${prefix}ꜱᴛɪᴄᴋᴇʀ
❒│▸ ${prefix}ᴛᴀᴋᴇ
❒│▸ ${prefix}ᴇᴍᴏᴊɪ
❒│▸ ${prefix}ᴠᴏʟᴜᴍᴇ
❒│▸ ${prefix}ᴇʙɪɴᴀʀʏ
❒│▸ ${prefix}ᴅʙɪɴᴀʀʏ
❒│▸ ${prefix}ꜱꜱᴡᴇʙ
❒│▸ ${prefix}Qᴜᴏᴛᴇᴅ
❒│▸ ${prefix}ʀᴜɴᴛɪᴍᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.rpgmenu = (prefix, hituet) => {
return`┌──『•• 🎯 *ʀᴘɢ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴋᴇʀᴊᴀ
❒│▸ ${prefix}ꜰɪɢʜᴛɴᴀɢᴀ
❒│▸ ${prefix}ꜰɪɢʜᴛᴋᴜᴄɪɴɢ
❒│▸ ${prefix}ꜰɪɢʜᴛᴘʜᴏɴɪx
❒│▸ ${prefix}ꜰɪɢʜᴛɢʀɪꜰꜰɪɴ
❒│▸ ${prefix}ꜰɪɢʜᴛᴋʏᴜʙɪ
❒│▸ ${prefix}ꜰɪɢʜᴛꜱᴇɴᴛᴀᴜʀ
❒│▸ ${prefix}ɴᴀʙᴜɴɢ
❒│▸ ${prefix}ᴍɪɴɪɴɢ
❒│▸ ${prefix}ʙᴀɴᴋɴᴀʙᴜɴɢ
❒│▸ ${prefix}ʙᴀɴᴋᴛᴀʀɪᴋ
❒│▸ ${prefix}ʙᴇʀᴋᴇʙᴏɴ
❒│▸ ${prefix}ᴄʀᴀꜰᴛɪɴɢ
❒│▸ ${prefix}ʙᴇᴛ
❒│▸ ${prefix}ʙᴏɴᴜꜱ
❒│▸ ${prefix}ʙᴜᴀʜ
❒│▸ ${prefix}ɴᴇʙᴀɴɢ
❒│▸ ${prefix}ʙᴇᴋᴇʀᴊꜱ
❒│▸ ${prefix}ʙᴀɴꜱᴏꜱ
❒│▸ ${prefix}ᴛᴀxʏ
❒│▸ ${prefix}ᴍᴜʟᴜɴɢ
❒│▸ ${prefix}ʙᴇʀʙᴜʀᴜ
❒│▸ ${prefix}ᴘᴏʟɪꜱɪ
❒│▸ ${prefix}ʙᴇʀᴅᴀɢᴀɴɢ
❒│▸ ${prefix}ʀᴀᴍᴘᴏᴋ
❒│▸ ${prefix}ʙᴜɴᴜʜ
❒│▸ ${prefix}ᴄᴏʟʟᴇᴄᴛ
❒│▸ ${prefix}ᴍᴀɴᴄɪɴɢ
❒│▸ ${prefix}ʀᴇᴘᴀɪʀ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ꜰɪɢʜᴛ
❒│▸ ${prefix}ɢᴀᴊɪᴀɴ
❒│▸ ${prefix}ᴜᴘɢʀᴀᴇᴅ
❒│▸ ${prefix}ᴛʀᴀɴꜱꜰᴇʀ
❒│▸ ${prefix}ꜱʜᴏᴘ
❒│▸ ${prefix}ꜱᴇʟᴇᴄᴛꜱᴋɪʟʟ
❒│▸ ${prefix}ꜱᴀᴍᴘᴀʜ
❒│▸ ${prefix}ʀᴏᴋᴇᴛ
❒│▸ ${prefix}ᴏᴊᴇᴋ
❒│▸ ${prefix}ɴɢᴜʟɪ
❒│▸ ${prefix}ᴘᴀꜱᴀʀ
❒│▸ ${prefix}ʀᴏʙ
❒│▸ ${prefix}ʀᴇꜰᴇʀᴀʟ
❒│▸ ${prefix}ᴘᴇᴛꜱʜᴏᴘ
❒│▸ ${prefix}ᴋᴏʟᴀᴍ
❒│▸ ${prefix}ᴋᴇʙᴏʏ
❒│▸ ${prefix}ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
❒│▸ ${prefix}ᴄᴀꜱɪɴᴏ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.gamemenu = (prefix, hituet) => {
return`┌──『•• 🎯 *ɢᴀᴍᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋᴀᴛᴀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴛᴇʙᴀᴋᴀɴ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʟɪʀɪᴋ
❒│▸ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʟᴀɢᴜ
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋɪᴍɪᴀ
❒│▸ ${prefix}ᴀꜱᴀʜᴏᴛᴀᴋ
❒│▸ ${prefix}ꜱɪᴀᴘᴀᴀᴋᴜ
❒│▸ ${prefix}ꜱᴜꜱᴜɴᴋᴀᴛᴀ
❒│▸ ${prefix}ᴛᴇᴋᴀᴛᴇᴋɪ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀ
❒│▸ ${prefix}ᴛᴇʙᴀᴋʙᴇɴᴅᴇʀᴀᴠ2
❒│▸ ${prefix}ᴛᴇʙᴀᴋᴋᴀʙᴜᴘᴀᴛᴇɴ
❒│▸ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
❒│▸ ${prefix}ꜰᴀᴍɪʟʏ100
❒│▸ ${prefix}ᴡᴇʀᴇᴡᴏʟꜰ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.downloadmenu = (prefix) => { 
return`┌──『•• 🎯 *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴏɴɢ
❒│▸ ${prefix}ᴠɪᴅᴇᴏ
❒│▸ ${prefix}ꜰɪʟᴍ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋꜱʟɪᴅᴇ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴀᴜᴅɪᴏ
❒│▸ ${prefix}ꜰɪʟᴍꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}ʏᴛꜱᴇᴀʀᴄʜ ᴍᴘ3
❒│▸ ${prefix}ʏᴛꜱᴇᴀʀᴄʜ ᴍᴘ4
❒│▸ ${prefix}ᴛᴛꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}ᴛᴇʀᴀʙᴏxᴅʟ
❒│▸ ${prefix}ꜱɴᴀᴄᴋᴠɪᴅᴇᴏ
❒│▸ ${prefix}ᴄᴀᴘᴄᴜᴛᴅʟ
❒│▸ ${prefix}ᴘʟᴀʏ
❒│▸ ${prefix}ʏᴛᴍᴘ3
❒│▸ ${prefix}ʏᴛᴍᴘ4
❒│▸ ${prefix}ɢᴏᴏɢʟᴇ
❒│▸ ${prefix}ɪᴍᴅʙ
❒│▸ ${prefix}ᴡᴇᴀᴛʜᴇʀ
❒│▸ ${prefix}ᴡᴀɴᴜᴍʙᴇʀ
❒│▸ ${prefix}ɪɴꜱᴛᴀɢʀᴀᴍ
❒│▸ ${prefix}ꜰᴀᴄᴇʙᴏᴏᴋ
❒│▸ ${prefix}ᴛᴡɪᴛᴛᴇʀᴠɪᴅ
❒│▸ ${prefix}ᴛᴇʟᴇꜱᴛɪᴄᴋ
❒│▸ ${prefix}ꜱᴘᴏᴛɪꜰʏ
❒│▸ ${prefix}ɢɪᴛᴄʟᴏɴᴇ
❒│▸ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
❒│▸ ${prefix}ɢᴅʀɪᴠᴇ
❒│▸ ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
❒│▸ ${prefix}ʀɪɴɢᴛᴏɴᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.groupmenu = (prefix) => {
return`┌──『•• 🎯 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱɪᴅᴇʀ
❒│▸ ${prefix}ᴀᴜᴛᴏᴀɪɢᴄ
❒│▸ ${prefix}ᴡᴀʀᴄᴀʟʟ
❒│▸ ${prefix}ᴀᴜᴛᴏꜱɪᴍɪ
❒│▸ ${prefix}ɴᴀɴᴏᴄʜᴀᴛ
❒│▸ ${prefix}ᴍᴜᴛᴇ
❒│▸ ${prefix}ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛʟᴇꜰᴛ
❒│▸ ${prefix}ᴡᴇʟᴄᴏᴍᴇ ᴏɴ/ᴏꜰꜰ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ
❒│▸ ${prefix}ʟɪɴᴋɢᴄ
❒│▸ ${prefix}ɪɴᴠɪᴛᴇ
❒│▸ ${prefix}ᴇᴘʜᴇᴍᴇʀᴀʟ
❒│▸ ${prefix}ᴅᴇʟᴇᴛᴇ
❒│▸ ${prefix}ꜱᴇʀᴘᴘɢʀᴏᴜᴘ
❒│▸ ${prefix}ᴅᴇʟᴘᴘɢʀᴏᴜᴘ
❒│▸ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
❒│▸ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
❒│▸ ${prefix}ᴀᴅᴅ
❒│▸ ${prefix}ᴋɪᴄᴋ
❒│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
❒│▸ ${prefix}ᴅᴇᴍᴏᴛᴇ
❒│▸ ${prefix}ʜɪᴅᴇᴛᴀɢ
❒│▸ ${prefix}ᴛᴏᴛᴀɢ
❒│▸ ${prefix}ᴛᴀɢᴀʟʟ
❒│▸ ${prefix}ᴇᴅɪᴛɪɴꜰᴏ
❒│▸ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
❒│▸ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
❒│▸ ${prefix}ʀᴇꜱᴇᴛʟɪɴᴋ
❒│▸ ${prefix}ɢᴇᴛʙɪᴏ
❒│▸ ${prefix}ᴠᴏᴛᴇ
❒│▸ ${prefix}ᴜᴘᴠᴏᴛᴇ
❒│▸ ${prefix}ᴅᴏᴡɴᴠᴏᴛᴇ
❒│▸ ${prefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ
❒│▸ ${prefix}ᴅᴇʟᴠᴏᴛᴇ
❒│▸ ${prefix}ᴀᴜᴛᴏꜱᴛɪᴄᴋᴇʀɢᴄ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ
❒│▸ ${prefix}ᴀɴᴛɪɪɴᴋᴀʟʟ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛɪᴋᴛᴏᴋ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋꜰʙ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛᴛᴇʀ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɪɢ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛɢ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴠɪᴅ
❒│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
❒│▸ ${prefix}ᴀɴᴛɪᴠɪʀᴜꜱ
❒│▸ ${prefix}ᴀɴᴛɪᴛᴏxɪᴄ
❒│▸ ${prefix}ɴꜱꜰᴡ
❒│▸ ${prefix}ʀᴇᴀᴄᴛ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.funmenu = (prefix) => {
return`┌──『•• 🎯 *ꜰᴜɴ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴍᴇᴍᴇ
❒│▸ ${prefix}ᴘᴘᴄᴏᴜᴘʟᴇ
❒│▸ ${prefix}ᴅᴇꜰɪɴᴇ
❒│▸ ${prefix}Qᴄ
❒│▸ ${prefix}ʟʏʀɪᴄꜱ
❒│▸ ${prefix}ꜱᴜɪᴛ
❒│▸ ${prefix}ᴍᴀᴛʜ
❒│▸ ${prefix}ᴛɪᴄᴛᴀᴄᴛᴏᴇ
❒│▸ ${prefix}ꜰᴀᴄᴛ
❒│▸ ${prefix}ᴛʀᴜᴛʜ
❒│▸ ${prefix}ᴅᴀʀᴇ
❒│▸ ${prefix}ᴄᴏᴜᴘʟᴇ
❒│▸ ${prefix}ꜱᴏᴜʟᴍᴀᴛᴇ
❒│▸ ${prefix}ꜱᴛᴜᴘɪᴅᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴀɴᴅꜱᴏᴍᴇᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴜɴᴄʟᴇᴀɴᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴏᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ꜱᴍᴀʀᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ɢʀᴇᴀᴛᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴇᴠɪʟᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴅᴏɢᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴄᴏᴏʟᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴡᴀɪꜰᴜᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴀᴡᴇꜱᴏᴍᴇᴄʜᴇᴄᴋ
❒│▸ ${prefix}ɢᴀʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʟᴇꜱʙɪᴀɴᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʜᴏʀɴʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴘʀᴇᴛᴛʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ʟᴏᴠᴇʟʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴜɢʟʏᴄʜᴇᴄᴋ
❒│▸ ${prefix}ᴘɪᴄᴋ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱ
❒│▸ ${prefix}ᴄᴀɴ
❒│▸ ${prefix}ɪꜱ
❒│▸ ${prefix}ᴡʜᴇɴ
❒│▸ ${prefix}ᴡʜᴇʀᴇ
❒│▸ ${prefix}ᴡʜᴀᴛ
❒│▸ ${prefix}ʜᴏᴡ
❒│▸ ${prefix}ʀᴀᴛᴇ
❒│▸ ${prefix}ᴄʀʏ
❒│▸ ${prefix}ᴋɪʟʟ
❒│▸ ${prefix}ʜᴜɢ
❒│▸ ${prefix}ᴘᴀᴛ
❒│▸ ${prefix}ʟɪᴄᴋ
❒│▸ ${prefix}ᴋɪꜱꜱ
❒│▸ ${prefix}ʙɪᴛᴇ
❒│▸ ${prefix}ʏᴇᴇᴛ
❒│▸ ${prefix}ʙᴜʟʟʏ
❒│▸ ${prefix}ʙᴏɴᴋ
❒│▸ ${prefix}ᴡɪɴᴋ
❒│▸ ${prefix}ᴘᴏᴋᴇ
❒│▸ ${prefix}ɴᴏᴍ
❒│▸ ${prefix}ꜱʟᴀᴘ
❒│▸ ${prefix}ꜱᴍɪʟᴇ
❒│▸ ${prefix}ᴡᴀᴠᴇ
❒│▸ ${prefix}ᴀᴡᴏᴏ
❒│▸ ${prefix}ʙʟᴜꜱʜ
❒│▸ ${prefix}ꜱᴍᴜɢ
❒│▸ ${prefix}ɢʟᴏᴍᴘ
❒│▸ ${prefix}ʜᴀᴘᴘʏ
❒│▸ ${prefix}ᴅᴀɴᴄᴇ
❒│▸ ${prefix}ᴄʀɪɴɢᴇ
❒│▸ ${prefix}ᴄᴜᴅᴅʟᴇ
❒│▸ ${prefix}ʜɪɢʜꜰɪᴠᴇ
❒│▸ ${prefix}ꜱʜɪɴᴏʙᴜ
❒│▸ ${prefix}ʜᴀɴᴅʜᴏʟᴅ
❒│▸ ${prefix}ꜱᴘᴀɴᴋ
❒│▸ ${prefix}ᴛɪᴄᴋʟᴇ
❒│▸ ${prefix}ᴀᴠᴀᴛᴀʀ
❒│▸ ${prefix}ꜰᴇᴇᴅ
❒│▸ ${prefix}ꜰᴏxɢɪʀʟ
❒│▸ ${prefix}ɢᴇᴄɢ
❒│▸ ${prefix}ᴄʜᴇᴄᴋᴍᴇ
❒│▸ ${prefix}ꜱᴏᴜɴᴅ1 - ꜱᴏᴜɴᴅ161
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.stalkermenu = (prefix) => {
  return `┌──『•• 🎯 *ꜱᴛᴀʟᴋᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɪɢꜱᴛᴀʟᴋ
❒│▸ ${prefix}ᴛᴛꜱᴛᴀʟᴋ
❒│▸ ${prefix}ꜰꜰꜱᴛᴀʟᴋ
❒│▸ ${prefix}ᴍʟꜱᴛᴀʟᴋ
❒│▸ ${prefix}ɴᴘᴍꜱᴛᴀʟᴋ
❒│▸ ${prefix}ɢʜꜱᴛᴀʟᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.stickermenu = (prefix) => {
return`┌──『•• 🎯 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɢᴏᴏꜱᴇ
❒│▸ ${prefix}ᴡᴏᴏꜰ
❒│▸ ${prefix}8ʙᴀʟʟ
❒│▸ ${prefix}ʟɪᴢᴀʀᴅ
❒│▸ ${prefix}ᴍᴇᴏᴡ
❒│▸ ${prefix}ɢᴜʀᴀ
❒│▸ ${prefix}ᴅᴏɢᴇ
❒│▸ ${prefix}ᴘᴀᴛʀɪᴄᴋ
❒│▸ ${prefix}ʟᴏᴠᴇꜱᴛɪᴄᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.databasemenu = (prefix) => {
return`┌──『•• 🎯 *ᴅᴀᴛᴀʙᴀꜱᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜱᴇᴛᴄᴍᴅ
❒│▸ ${prefix}ᴅᴇʟᴄᴍᴅ
❒│▸ ${prefix}ʟɪꜱᴛᴄᴍᴅ
❒│▸ ${prefix}ʟᴏᴄᴋᴄᴍᴅ
❒│▸ ${prefix}ᴀᴅᴅᴍꜱɢ
❒│▸ ${prefix}ᴅᴇʟᴍꜱɢ
❒│▸ ${prefix}ɢᴇᴛᴍꜱɢ
❒│▸ ${prefix}ʟɪꜱᴛᴍꜱɢ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.aimenu = (prefix) => {
return`┌──『•• 🎯 *ᴏᴘᴇɴ ᴀɪ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʟᴇᴘᴛᴏɴᴀɪ
❒│▸ ${prefix}ᴏᴘᴇɴᴀɪ
❒│▸ ${prefix}ᴀɪ
❒│▸ ${prefix}ʙᴀʀᴅ
❒│▸ ${prefix}ᴘʀᴏᴅɪᴀ
❒│▸ ${prefix}ᴅɪꜰꜰᴜꜱɪᴏɴ-ᴀɴɪᴍᴇ
❒│▸ ${prefix}ᴛʀᴀᴠᴇʟ-ᴀꜱꜱɪꜱᴛᴀɴᴛ
❒│▸ ${prefix}ᴏᴄʀ
❒│▸ ${prefix}ɢᴜʀᴜ-ᴀɪ
❒│▸ ${prefix}ᴇᴍɪ-ᴀɪ
❒│▸ ${prefix}ᴄʟᴀᴜᴅᴇ-ᴀɪ
❒│▸ ${prefix}ᴄᴏꜱᴛᴜᴍᴇ-ᴀɪ
❒│▸ ${prefix}ʜᴇʀᴄ-ᴀɪ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴄᴀʀᴛᴏᴏɴ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴀɴɪᴍᴇꜰʏ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ʟᴇxɪᴄᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ᴘʀᴏᴅɪᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ꜱɪᴍᴜʀɢ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ʀᴀᴀᴠᴀ
❒│▸ ${prefix}ʜᴇʀᴄᴀɪ-ꜱʜᴏɴɪɴ
❒│▸ ${prefix}ʀᴇᴀʟɪꜱᴛɪᴄ
❒│▸ ${prefix}3ᴅᴍᴏᴅᴇʟ
❒│▸ ${prefix}ᴊᴀᴅɪᴢᴏᴍʙɪᴇ
❒│▸ ${prefix}ʙʟᴀᴄᴋʙᴏxᴀɪ
❒│▸ ${prefix}ᴘʜᴏᴛᴏʟᴇᴀᴘᴀɪ
❒│▸ ${prefix}ᴅɪꜰꜰᴜꜱɪᴏɴ
❒│▸ ${prefix}ɪɴᴅᴏ-ᴀɪ
❒│▸ ${prefix}ʟᴀᴍᴀᴀɪ
❒│▸ ${prefix}ᴀɪᴠᴏ
❒│▸ ${prefix}ɢᴇᴍɪɴɪ
❒│▸ ${prefix}ᴛᴇxᴛ2ɪᴍɢ
❒│▸ ${prefix}ᴀʙꜱᴏʟᴜᴛᴇʟʏ
❒│▸ ${prefix}ᴅᴀʟʟᴇ
❒│▸ ${prefix}ʙɪɴɢɪᴍɢ
❒│▸ ${prefix}ɢᴘᴛ4
❒│▸ ${prefix}ɢᴘᴛ4_2
❒│▸ ${prefix}ᴀɴʏᴛʜɪɴɢ
❒│▸ ${prefix}ʜᴅᴠɪᴅ
❒│▸ ${prefix}ᴄᴀɪ
❒│▸ ${prefix}ʏᴏᴜᴀɪ
❒│▸ ${prefix}ʀᴇᴍɪɴɪ
❒│▸ ${prefix}ᴊᴀᴅɪᴀɴɪᴍᴇ
❒│▸ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
❒│▸ ${prefix}ɴᴜʟɪꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.quotesmenu = (prefix) => {
return`┌──『•• 🎯 *Qᴜᴏᴛᴇꜱ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱᴀɴɪᴍᴇ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙᴀᴄᴏᴛ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙᴜᴄɪɴ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱᴍᴏᴛɪᴠᴀꜱɪ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɢᴀʟᴀᴜ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɢᴏᴍʙᴀʟ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʜᴀᴄᴋᴇʀ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱʙɪᴊᴀᴋ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}
 
global.storemenu = (prefix) => {
return`┌──『•• 🎯 *ꜱᴛᴏʀᴇ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʟɪꜱᴛ
❒│▸ ${prefix}ᴀᴅᴅʟɪꜱᴛ
❒│▸ ${prefix}ᴅᴇʟʟɪꜱᴛ
❒│▸ ${prefix}ᴜᴘᴅᴀᴛᴇ
❒│▸ ${prefix}ᴊᴇᴅᴀ
❒│▸ ${prefix}ᴛᴀᴍʙᴀʜ
❒│▸ ${prefix}ᴋᴜʀᴀɴɢ
❒│▸ ${prefix}ᴋᴀʟɪ
❒│▸ ${prefix}ʙᴀɢɪ
❒│▸ ${prefix}ᴅᴇʟꜱᴇᴛᴅᴏɴᴇ
❒│▸ ${prefix}ᴄʜᴀɴɢᴇᴅᴏɴᴇ
❒│▸ ${prefix}ꜱᴇᴛᴅᴏɴᴇ
❒│▸ ${prefix}ᴅᴇʟᴘʀᴏꜱᴇꜱ
❒│▸ ${prefix}ᴘʀᴏꜱᴇꜱ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>
❒│▸ ${prefix}ᴅᴏɴᴇ <ʀᴇᴘʟʏ ᴄʜᴀᴛ>
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.anonymousmenu = (prefix) => {
return`┌──『•• 🎯 *ᴀɴᴏɴʏᴍᴏᴜꜱ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀɴᴏɴʏᴍᴏᴜꜱᴄʜᴀᴛ
❒│▸ ${prefix}ꜱᴛᴀʀᴛ
❒│▸ ${prefix}ɴᴇxᴛ
❒│▸ ${prefix}ꜱᴛᴏᴘ
❒│▸ ${prefix}ꜱᴇɴᴅᴘʀᴏꜰɪʟᴇ
❒│▸ ${prefix}ᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ᴄᴏɴꜰᴇꜱꜱ
❒│▸ ${prefix}ʙᴀʟᴀꜱᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ᴛᴏʟᴀᴋᴍᴇɴꜰᴇꜱꜱ
❒│▸ ${prefix}ꜱᴛᴏᴘᴍᴇɴꜰᴇꜱꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.pushmenu = (prefix) => {
return`┌──『•• 🎯 *ᴘᴜꜱʜ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴄᴇᴋɪᴅɢᴄ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ3
❒│▸ ${prefix}ᴘᴜꜱʜᴋᴏɴᴛᴀᴋᴠ4
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ
❒│▸ ${prefix}ꜱᴀᴠᴇᴋᴏɴᴛᴀᴋᴠ2
❒│▸ ${prefix}ɢᴇᴛᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ꜱᴇɴᴅᴋᴏɴᴛᴀᴋ
❒│▸ ${prefix}ᴊᴘᴍ
❒│▸ ${prefix}ᴊᴘᴍ2
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.cpanelmenu = (prefix) => {
return`┏『 *\`乂 ᴄ ᴘ ᴀ ɴ ᴇ ʟ - ᴍᴇɴᴜ 乂\`* 』━◧
┣» *${prefix}panel*
┣» *${prefix}listusr*
┣» *${prefix}delusr*
┣» *${prefix}listsrv*
┣» *${prefix}delsrv*
┣» *${prefix}tutorial*
┣» *${prefix}ramlist*
┣» *${prefix}premlist*
┣» *${prefix}addusr*
┣» *${prefix}addsrv*
┣» *${prefix}updatesrv*
┣» *${prefix}suspend*
┣» *${prefix}unsuspend*
┣» *${prefix}createadmin*
┣» *${prefix}listadmin*
┗━━━━━━━━━━━━━━━━⊱

▭▬▭▬▭( *LIST RAM* ▬▭▬▭

*.1gb [username,nomor]*
*.2gb [username,nomor]*
*.3gb [username,nomor]*
*.4gb [username,nomor]*
*.5gb [username,nomor]*
*.6gb [username,nomor]*
*.7gb [username,nomor]*
*.8gb [username,nomor]*
*.unli [username,nomor]*

Contoh:
.ram username,nomor
.1gb Nano,6285745522549
▬▭▬▭▬▭▬▭▬▭▬▭▬

${global.supuncaptain1}
${global.supuncaptain2}`}

global.bugmenu = (prefix) => {
return`┌──『•• 🎯 *ʙᴜɢ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴅᴀɴꜱʏᴀᴠɪᴘ
❒│▸ ${prefix}ᴅᴀɴꜱʏᴀᴄʀᴜꜱʜ
❒│▸ ${prefix}xᴀɴᴅʀᴏɪᴅ
❒│▸ ${prefix}xᴀɴᴅʀᴏɪᴅ2
❒│▸ ${prefix}ꜱʏꜱᴛᴇᴍᴜɪʟᴄʀᴀꜱʜ
❒│▸ ${prefix}xꜱʏꜱᴜɪ
❒│▸ ${prefix}xɪᴏꜱ
❒│▸ ${prefix}xɪᴏꜱ2
❒│▸ ${prefix}xɢᴄ
❒│▸ ${prefix}ɪᴏꜱᴋɪʟʟ
❒│▸ ${prefix}ɪᴏꜱx
❒│▸ ${prefix}ᴏɴᴇᴋɪʟʟ
❒│▸ ${prefix}ᴏɴᴇᴄʟɪᴄᴋᴀʟʟ
❒│▸ ${prefix}xꜱᴀᴍꜱᴜɴɢ
❒│▸ ${prefix}xᴡᴀᴡᴇʙ
❒│▸ ${prefix}ᴅᴏᴜʙʟᴇᴋɪʟʟ
❒│▸ ${prefix}ᴛʀɪᴘʟᴇᴋɪʟʟ
❒│▸ ${prefix}💀
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.randomphotomenu = (prefix) => {
return`┌──『•• 🎯 *ʀᴀɴᴅᴏᴍ ᴘʜᴏᴛᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀᴇꜱᴛʜᴇᴛɪᴄ
❒│▸ ${prefix}ᴄᴏꜰꜰᴇᴇ
❒│▸ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
❒│▸ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}ᴀʀᴛ
❒│▸ ${prefix}ʙᴛꜱ
❒│▸ ${prefix}ᴅᴏɢᴡᴏᴏꜰ
❒│▸ ${prefix}ᴄᴀᴛᴍᴇᴏᴡ
❒│▸ ${prefix}ʟɪᴢᴀʀᴅᴘɪᴄ
❒│▸ ${prefix}ɢᴏᴏꜱᴇʙɪʀᴅ
❒│▸ ${prefix}8ʙᴀʟʟᴘᴏʟʟ
❒│▸ ${prefix}ᴄᴏꜱᴘʟᴀʏ
❒│▸ ${prefix}ʜᴀᴄᴋᴇʀ
❒│▸ ${prefix}ᴄʏʙᴇʀ
❒│▸ ${prefix}ɢᴀᴍᴇᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}ɪꜱʟᴀᴍɪᴄ
❒│▸ ${prefix}ᴊᴇɴɴɪᴇ
❒│▸ ${prefix}ᴊɪꜱᴏ
❒│▸ ${prefix}ꜱᴀᴛᴀɴɪᴄ
❒│▸ ${prefix}ᴊᴜꜱᴛɪɴᴀ
❒│▸ ${prefix}ᴄᴀʀᴛᴏᴏɴ
❒│▸ ${prefix}ᴘᴇɴᴛᴏʟ
❒│▸ ${prefix}ᴄᴀᴛ
❒│▸ ${prefix}ᴋᴘᴏᴘ
❒│▸ ${prefix}ᴇxᴏ
❒│▸ ${prefix}ʟɪꜱᴀ
❒│▸ ${prefix}ꜱᴘᴀᴄᴇ
❒│▸ ${prefix}ᴄᴀʀ
❒│▸ ${prefix}ᴛᴇᴄʜɴᴏʟᴏɢʏ
❒│▸ ${prefix}ʙɪᴋᴇ
❒│▸ ${prefix}ꜱʜᴏʀᴛQᴜᴏᴛᴇ
❒│▸ ${prefix}ᴀɴᴛɪᴡᴏʀᴋ
❒│▸ ${prefix}ʜᴀᴄᴋɪɴɢ
❒│▸ ${prefix}ʙᴏɴᴇᴋᴀ
❒│▸ ${prefix}ʀᴏꜱᴇ
❒│▸ ${prefix}ʀʏᴜᴊɪɴ
❒│▸ ${prefix}ᴜʟᴢᴢᴀɴɢʙᴏʏ
❒│▸ ${prefix}ᴜʟᴢᴢᴀɴɢɢɪʀʟ
❒│▸ ${prefix}ᴡᴀʟʟᴍʟ
❒│▸ ${prefix}ᴡᴀʟʟᴘʜᴏɴᴇ
❒│▸ ${prefix}ᴍᴏᴜɴᴛᴀɪɴ
❒│▸ ${prefix}ɢᴏᴏꜱᴇ
❒│▸ ${prefix}ᴘʀᴏꜰɪʟᴇᴘɪᴄ
❒│▸ ${prefix}ᴄᴏᴜᴘʟᴇᴘɪᴄ
❒│▸ ${prefix}ᴘʀᴏɢʀᴀᴍᴍɪɴɢ
❒│▸ ${prefix}ᴘᴜʙɢ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍʙᴏʏ
❒│▸ ${prefix}ʀᴀɴᴅᴏᴍɢɪʀʟ
❒│▸ ${prefix}ʜɪᴊᴀʙ
❒│▸ ${prefix}ᴄʜɪɴᴇꜱᴇ
❒│▸ ${prefix}ɪɴᴅᴏ
❒│▸ ${prefix}ᴊᴀᴘᴀɴᴇꜱᴇ
❒│▸ ${prefix}ᴋᴏʀᴇᴀɴ
❒│▸ ${prefix}ᴍᴀʟᴀʏ
❒│▸ ${prefix}ᴛʜᴀɪ
❒│▸ ${prefix}ᴠɪᴇᴛɴᴀᴍᴇꜱᴇ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.randomvideomenu = (prefix) => {
return`┌──『•• 🎯 *ʀᴀɴᴅᴏᴍ ᴠɪᴅᴇᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɢɪʀʟ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɴᴜᴋᴛʜʏ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴋᴀʏᴇꜱ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋᴘᴀɴʀɪᴋᴀ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɴᴏᴛɴᴏᴛ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋɢʜᴇᴀ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴀɴᴛᴜʏ
❒│▸ ${prefix}ᴛɪᴋᴛᴏᴋʙᴏᴄɪʟ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.primbonmenu = (prefix) => {
  return `┌──『•• 🎯 *ᴘʀɪᴍʙᴏɴ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴀʀᴛɪᴍɪᴍᴘɪ
❒│▸ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴊᴏᴅᴏʜʙᴀʟɪ
❒│▸ ${prefix}ꜱᴜᴀᴍɪɪꜱᴛʀɪ
❒│▸ ${prefix}ʀᴀᴍᴀʟᴄɪɴᴛᴀ
❒│▸ ${prefix}ᴄᴏᴄᴏᴋɴᴀᴍᴇ
❒│▸ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ
❒│▸ ${prefix}ᴊᴀᴅɪᴀɴɴɪᴋᴀʜ
❒│▸ ${prefix}ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ
❒│▸ ${prefix}ʀᴇᴢᴇᴋɪ
❒│▸ ${prefix}ᴘᴇᴋᴇʀᴊᴀᴀɴ
❒│▸ ${prefix}ɴᴀꜱɪʙ
❒│▸ ${prefix}ᴘᴇɴʏᴀᴋɪᴛ
❒│▸ ${prefix}ᴛᴀʀᴏᴛ
❒│▸ ${prefix}ꜰᴇɴɢꜱʜᴜɪ
❒│▸ ${prefix}ʜᴀʀɪʙᴀɪᴋ
❒│▸ ${prefix}ʜᴀʀɪꜱᴀɴɢᴀʀ
❒│▸ ${prefix}ʜᴀʀɪꜱɪᴀʟ
❒│▸ ${prefix}ɴᴀɢᴀʜᴀʀɪ
❒│▸ ${prefix}ᴀʀᴀʜʀᴇᴢᴇᴋɪ
❒│▸ ${prefix}ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ
❒│▸ ${prefix}ᴡᴇᴛᴏɴ
❒│▸ ${prefix}ᴋᴀʀᴀᴋᴛᴇʀ
❒│▸ ${prefix}ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ
❒│▸ ${prefix}ᴍᴇᴍᴀɴᴄɪɴɢ
❒│▸ ${prefix}ᴍᴀꜱᴀꜱᴜʙᴜʀ
❒│▸ ${prefix}ᴢᴏᴅɪᴀᴋ
❒│▸ ${prefix}ꜱʜɪᴏ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.beritamenu = (prefix) => {
  return `
┌──『•• 🎯 *ʙᴇʀɪᴛᴀ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ꜰᴀᴊᴀʀ
❒│▸ ${prefix}ᴄɴɴ
❒│▸ ${prefix}ʟᴀʏᴀʀᴋᴀᴄᴀ
❒│▸ ${prefix}ᴄɴʙᴄ
❒│▸ ${prefix}ᴛʀɪʙᴜɴ
❒│▸ ${prefix}ɪɴᴅᴏᴢᴏɴᴇ
❒│▸ ${prefix}ᴋᴏᴍᴘᴀꜱ
❒│▸ ${prefix}ᴅᴇᴛɪᴋɴᴇᴡꜱ
❒│▸ ${prefix}ᴅᴀɪʟʏɴᴇᴡꜱ
❒│▸ ${prefix}ɪɴᴇᴡꜱ
❒│▸ ${prefix}ᴏᴋᴇᴢᴏɴᴇ
❒│▸ ${prefix}ꜱɪɴᴅᴏ
❒│▸ ${prefix}ᴛᴇᴍᴘᴏ
❒│▸ ${prefix}ᴀɴᴛᴀʀᴀ
❒│▸ ${prefix}ᴋᴏɴᴛᴀɴ
❒│▸ ${prefix}ᴍᴇʀᴅᴇᴋᴀ
❒│▸ ${prefix}ᴊᴀʟᴀɴᴛɪᴋᴜꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.islamimenu= (prefix) => {
return`┌──『•• 🎯 *ɪꜱʟᴀᴍɪ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ᴋɪꜱᴀʜɴᴀʙɪ
❒│▸ ${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ
❒│▸ ${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
❒│▸ ${prefix}ᴀᴜᴅɪᴏꜱᴜʀᴀʜ
❒│▸ ${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ
❒│▸ ${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ
❒│▸ ${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ
❒│▸ ${prefix}Qᴜᴏᴛᴇꜱɪꜱʟᴀᴍɪ
❒│▸ ${prefix}ᴅᴏᴀᴛᴀʜʟɪʟ
❒│▸ ${prefix}ᴛᴀꜰꜱɪʀ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.ephoto360menu = (prefix) => {
return`┌──『•• 🎯 *ᴇᴘʜᴏᴛᴏ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ɢʟɪᴛᴄʜᴛᴇxᴛ
❒│▸ ${prefix}ᴡʀɪᴛᴇᴛᴇxᴛ
❒│▸ ${prefix}ᴀᴅᴠᴀɴᴄᴇᴅɢʟᴏᴡ
❒│▸ ${prefix}ᴛʏᴘᴏɢʀᴀᴘʜʏᴛᴇxᴛ
❒│▸ ${prefix}ᴘɪxᴇʟɢʟɪᴛᴄʜ
❒│▸ ${prefix}ɴᴇᴏɴɢʟɪᴛᴄʜ
❒│▸ ${prefix}ꜰʟᴀɢᴛᴇxᴛ
❒│▸ ${prefix}ꜰʟᴀɢ3ᴅᴛᴇxᴛ
❒│▸ ${prefix}ᴅᴇʟᴇᴛɪɴɢᴛᴇxᴛ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋꜱᴛʏʟᴇ
❒│▸ ${prefix}ɢʟᴏᴡɪɴɢᴛᴇxᴛ
❒│▸ ${prefix}ᴜɴᴅᴇʀᴡᴀᴛᴇʀᴛᴇxᴛ
❒│▸ ${prefix}ʟᴏɢᴏᴍᴀᴋᴇʀ
❒│▸ ${prefix}ᴄᴀʀᴛᴏᴏɴꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴘᴀᴘᴇʀᴄᴜᴛꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴡᴀᴛᴇʀᴄᴏʟᴏʀᴛᴇxᴛ
❒│▸ ${prefix}ᴇꜰꜰᴇᴄᴛᴄʟᴏᴜᴅꜱ
❒│▸ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋʟᴏɢᴏ
❒│▸ ${prefix}ɢʀᴀᴅɪᴇɴᴛᴛᴇxᴛ
❒│▸ ${prefix}ꜱᴜᴍᴍᴇʀʙᴇᴀᴄʜ
❒│▸ ${prefix}ʟᴜxᴜʀʏɢᴏʟᴅ
❒│▸ ${prefix}ᴍᴜʟᴛɪᴄᴏʟᴏʀᴇᴅɴᴇᴏɴ
❒│▸ ${prefix}ꜱᴀɴᴅꜱᴜᴍᴍᴇʀ
❒│▸ ${prefix}ɢᴀʟᴀxʏᴡᴀʟʟᴘᴀᴘᴇʀ
❒│▸ ${prefix}1917ꜱᴛʏʟᴇ
❒│▸ ${prefix}ᴍᴀᴋɪɴɢɴᴇᴏɴ
❒│▸ ${prefix}ʀᴏʏᴀʟᴛᴇxᴛ
❒│▸ ${prefix}ꜰʀᴇᴇᴄʀᴇᴀᴛᴇ
❒│▸ ${prefix}ɢᴀʟᴀxʏꜱᴛʏʟᴇ
❒│▸ ${prefix}ʟɪɢʜᴛᴇꜰꜰᴇᴄᴛꜱ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸

${global.supuncaptain1}
${global.supuncaptain2}`}

global.nsfwmenu = (prefix) => {
return`┌──『•• 🎯 *ᴀɴɪᴍᴇ ɴꜰꜱᴡ ᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
❒│▸ ${prefix}ʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɢɪꜰʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɢɪꜰʙʟᴏᴡᴊᴏʙ
❒│▸ ${prefix}ʜᴇɴᴛᴀɪᴠɪᴅ
❒│▸ ${prefix}ʜɴᴇᴋᴏ
❒│▸ ${prefix}ɴᴡᴀɪꜰᴜ
❒│▸ ${prefix}ᴀɴɪᴍᴇꜱᴘᴀɴᴋ
❒│▸ ${prefix}ᴛʀᴀᴘ
❒│▸ ${prefix}ɢᴀꜱᴍ
❒│▸ ${prefix}ᴀʜᴇɢᴀᴏ
❒│▸ ${prefix}ᴀꜱꜱ
❒│▸ ${prefix}ʙᴅꜱᴍ
❒│▸ ${prefix}ʙʟᴏᴡᴊᴏʙ
❒│▸ ${prefix}ᴄᴜᴄᴋᴏʟᴅ
❒│▸ ${prefix}ᴄᴜᴍ
❒│▸ ${prefix}ᴍɪʟꜰ
❒│▸ ${prefix}ᴇʙᴀ
❒│▸ ${prefix}ᴇʀᴏ
❒│▸ ${prefix}ꜰᴇᴍᴅᴏᴍ
❒│▸ ${prefix}ꜰᴏᴏᴛ
❒│▸ ${prefix}ɢᴀɴɢʙᴀɴɢ
❒│▸ ${prefix}ɢʟᴀꜱᴇꜱᴇ
❒│▸ ${prefix}ᴊᴀʜʏ
❒│▸ ${prefix}ᴍᴀꜱᴛᴜʀʙᴀᴛɪᴏɴ
❒│▸ ${prefix}ᴍᴀɴɢᴀ
❒│▸ ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ
❒│▸ ${prefix}ɴᴇᴋᴏ-ʜᴇɴᴛᴀɪ2
❒│▸ ${prefix}ɴꜱꜰᴡʟᴏʟɪ
❒│▸ ${prefix}ᴏʀɢʏ
❒│▸ ${prefix}ᴘᴀɴᴛɪᴇꜱ
❒│▸ ${prefix}ᴘᴜꜱꜱʏ
❒│▸ ${prefix}ᴛᴇɴᴛᴀᴄʟᴇꜱ
❒│▸ ${prefix}ᴛʜɪɢʜꜱ
❒│▸ ${prefix}ʏᴜʀɪ
❒│▸ ${prefix}ᴢᴇᴛᴛᴀɪ
❒│▸ ${prefix}xɴxxꜱᴇᴀʀᴄʜ
❒│▸ ${prefix}xɴxxᴅʟ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸ 

${global.supuncaptain1}
${global.supuncaptain2}`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
