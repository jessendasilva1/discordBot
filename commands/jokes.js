module.exports = {
    name: '!joke',
    description: 'tells a random joke',
    jokes: ['Evan leaves maple syrup on his window sill, thus ANTS APPEAR!', 
            'Carter Douds Dentist goggles', 
            'I defecate on floors',
            'I still think im going to be a pro gamer', 
            'I dont care bitch',
            'Sam sucks at clone hero',
            'I hate siege'],
    execute(msg, args){
        //change to be dynamic to an arbitrary list
        const choice = Math.floor(Math.random() * 7);
        msg.channel.send(`Heres a joke: ${this.jokes[choice]}`);
        //msg.reply('pong')
    }
}