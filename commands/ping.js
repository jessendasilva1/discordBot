module.exports = {
    name: '!ping',
    description: 'Ping people who are afk',
    execute(msg, args){
        //msg.reply('Bing Bong!');
        msg.channel.send('Bing Bong!');
    }
}