const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '//'; //prefix
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //read directories for commands (./commands/)
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('ME69 is online!'); //logon
});
 
client.on('message', message =>{ // commands
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'help'){
        client.commands.get('help').execute(message, args); //help command
    } else if (command === 'test'){
		client.commands.get('test').execute(message, args); //test command
	} else if (command === 'github'){
		client.commands.get('github').execute(message, args); //github command
	}
});

client.login('') //insert your token here
