module.exports = {
	name: 'test',
	description: 'Test command!',
	execute(message, args){
		if(message.member.roles.cache.has('739406106866221057')){
			message.channel.send('<:info95:739833428782088214>');
			message.channel.send('Fully works!');
		} else  {
			message.channel.send('Sorry, You dont have enough permissions to use this command.')
		}
	}
}