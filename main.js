const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '//';

client.once('ready', () => {
	console.log('Bot is online!');
});

client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	
	const args = message.content.slice(prefix.length).split(/ +/);
	const command =  args.shift().toLowerCase();
	
	if(command === 'test'){
		if(message.member.roles.cache.has('739406106866221057')){
			message.channel.send('<:info95:739833428782088214>');
			message.channel.send('Fully works!');
		} else  {
			message.channel.send('Sorry, You dont have enough permissions to use this command.')
		}
	} else if (command == 'help'){
		message.channel.send('<:question95:739831834673938443>');
		message.channel.send('Making...')
	}
});

client.login('NzM5ODY4MjAyNzk5OTg4NzU3.Xygt9Q.ONyGD8phmU14kmcW7_9qwNlCffE')