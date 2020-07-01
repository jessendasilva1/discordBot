require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

const TOKEN = process.env.BOT_TOKEN;
const channel1 = 'banter-for-the-lads';

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    const args = msg.content.split(/ +/);
    const command = args.shift().toLowerCase();
    console.info(`Called Command: ${command}`);

   // if(bot.command.has(command)) return ;

    try {
        bot.commands.get(command).description;
    } catch (error) {
        console.log(error);
        //msg.reply('There was an error trying to execute that command!');
    }

});

/*
if(msg.content === "ping"){
        msg.reply('Pong');
        msg.channel.send('pong');
    }
    else if (msg.content.startsWith('!kick')){
        if(msg.mentions.users.size){
            const taggedUser = msg.mentions.users.first();
            msg.channel.send(`You wanted to kick ${taggedUser.username}. What are you going to do about it?`)
        } else {
            msg.reply('That User Does not exist!');
        }
    }

*/