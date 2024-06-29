const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254752588323";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_27_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYsXG4gICAgICAgIDMyLFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NixcbiAgICAgICAgODQsXG4gICAgICAgIDIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxODYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDYzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDksXG4gICAgICAgIDM1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNREREOG9VRCtDdUpVSmVjajFURGs3QzZEcFpyS0JSMm1ORGswenBrczlJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWZ1pCR25ZeVFNU2I4eTNRQVczd2VBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjcwODRjNTdlLWJiMmUtNDA3MS04NDJlLTNlMDY2M2YzNWUxYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxMTMsXG4gICAgICAxNjksXG4gICAgICA2NCxcbiAgICAgIDEzMixcbiAgICAgIDIwMyxcbiAgICAgIDI1LFxuICAgICAgNDcsXG4gICAgICAxNzksXG4gICAgICAyNTIsXG4gICAgICA2NCxcbiAgICAgIDEwOCxcbiAgICAgIDU3LFxuICAgICAgMTY3LFxuICAgICAgNzgsXG4gICAgICAxMTQsXG4gICAgICAyNTUsXG4gICAgICAxNCxcbiAgICAgIDc5LFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA1LFxuICAgICAgMjIxLFxuICAgICAgMjEwLFxuICAgICAgMTgxLFxuICAgICAgMjM3LFxuICAgICAgMTU5LFxuICAgICAgMzIsXG4gICAgICA3NixcbiAgICAgIDI3LFxuICAgICAgMjM1LFxuICAgICAgMjMyLFxuICAgICAgMTkzLFxuICAgICAgMTkwLFxuICAgICAgMTMxLFxuICAgICAgNTcsXG4gICAgICAxODQsXG4gICAgICAyNTQsXG4gICAgICA0MixcbiAgICAgIDgyLFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEhOUUMyS0pcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1MjU4ODMyMzo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjYzMjczMzQxNTU5MDMxOjg0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BMVzZiOEVFT3FLLzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZnlQNXBrQy9VUUx0MXlnUWR1RnJxb25IRVEvZUZ6TWRWY1k0V0Q3V1Jrcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyN0FVaGJEVVlNUUppRTFXSTRCSTdMM3FDMHpjaEVMQWovYWhaSzZDajAxUmtPTy9idGFuWWJreXlsVUlOdDRBMEZFZVRPMUVDU016dU9RVTRwbUdDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJYZHVlOGROMFBCaDVqVjVzMmpsclJTU3Z4MjZPVHYxUnpRNU9sOW9UcHZmbEhYdm85alBZbTdCOVkzSkJRbXM2VUhWZmluMmova055K0ZVYXJsMjRoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NTI1ODgzMjM6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk2NDk2NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKWnNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpacy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Collins",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
