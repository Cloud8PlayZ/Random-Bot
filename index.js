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
const cc = require('cryptocompare')
var token = ''
client.on('ready', () => {
  console.log(`Bot Is Now Online!`);
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
	if(msg === '$bitcoin'){  //This bit is fairly experimental and may not work depending... It was added Without testing
		cc.priceFull(['BTC', 'ETH'], ['USD', 'EUR'])
		.then(prices => {
		message.channel.send(prices);	
		}
	}
        if(msg === '$number'){
		message.channel.send(`${Math.floor(Math.random() * 100)}`);
		}
});

client.login(token);
	
/*
	   Message From Developer
		Dependencies:
		-Faker.js
		-CryptoCompare
		-Discord.js
		Original Features:
		Nick - Rename
		Name - False Name
		Cat - Just A Cat
		Avatar - A Random Avatar
		Color - I forgot
		 New Stuff:
		 Bitcoin - Should Tell The Price Of Bitcoin and ETH
		 Number - Random Number Genertor
*/
