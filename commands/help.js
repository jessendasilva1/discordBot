module.exports = {
    name: '!help',
    description: 'Informs the user on how to use the different commands and where to find support',
    execute(msg, args){
        msg.channel.send(
            `List of Commands: \n 

                1. !ping: Replys with a message if the bot is active.\n
                2. !joke: Tells a random joke about someone in the group.\n
                3. !help: Lists the commands and where to find documentation.\n

                Documentation can be found at https://github.com/jessendasilva1
            `);
        //msg.reply('pong')
    }
}