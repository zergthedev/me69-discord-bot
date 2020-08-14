module.exports = {
	name: 'help',
	description: 'Help command!',
	execute(message, args){
		message.channel.send('<:question95:739831834673938443>');
		message.channel.send('Making...');
	}
}