var express = require('express');
var app = express();
require("dotenv").config();
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require("./commands");

Object.keys(botCommands).map((key) => {
	bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.BOT_TOKEN;

bot.login(TOKEN);

bot.on("ready", () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", (msg) => {
	const args = msg.content.split(/ +/);
	const command = args.shift().toLowerCase();
	console.log(`Called command: ${command}`);
    if(command[0] !== '!'){
        console.log('incorrect syntax. use `!` followed by the command you want.');
    } else {
        if (!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).execute(msg, args);
        } catch (error) {
            console.error(error);
            msg.reply("That command doesnt exist.");
        }
    }
	
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
