const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "507614444592037889"; // ايدي السررفر
var channel = "507614444592037895";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر  سلفستر   **')
    },305);
})

client.login(process.env.BOT_TOKEN);
