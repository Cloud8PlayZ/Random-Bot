/*
  ____                 _                 
 |  _ \ __ _ _ __   __| | ___  _ __ ___  
 | |_) / _` | '_ \ / _` |/ _ \| '_ ` _ \ 
 |  _ < (_| | | | | (_| | (_) | | | | | |
 |_| \_\__,_|_| |_|\__,_|\___/|_| |_| |_|

   ____        _   
 | __ )  ___ | |_ 
 |  _ \ / _ \| __|
 | |_) | (_) | |_ 
 |____/ \___/ \__|

   _   _           _         _     
 | \ | | ___   __| | ___   (_)___ 
 |  \| |/ _ \ / _` |/ _ \  | / __|
 | |\  | (_) | (_| |  __/_ | \__ \
 |_| \_|\___/ \__,_|\___(_)/ |___/
                         |__/     
*/
const Discord = require('discord.js');
const faker = require('faker');
const client = new Discord.Client();
const prefix = "$"
var token = ''
client.on('ready', () => {
  console.log(`Random Bot Online`);
});

client.on('message', message => {
	var msg = message.content
	if(msg === '$name'){
		message.channel.send(`The Name Is ${faker.fake("{{name.lastName}}, {{name.firstName}}")}`);
	}
	if(msg === '$nick'){
		message.guild.members.get(client.user.id).setNickname(`${faker.fake("{{commerce.productName}}")}`)
	}
	if(msg === '$cat'){
		message.channel.send(`${faker.fake("{{image.cats}}")}`);
	}
	if(msg === '$avatar'){
		message.channel.send(`${faker.fake("{{internet.avatar}}")}`);
	}
	if(msg === '$color'){
		message.channel.send(`${faker.fake("{{internet.avatar}}")}`);
	}
});

client.login(token);