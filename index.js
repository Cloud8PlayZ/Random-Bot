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
const bot = new Discord.Client({
	disableEveryone: true
});
const config = require('./config.json');
bot.commands = Discord.Collection();
const fs = require('fs');

fs.readdir('./commands/', (err, files) => {
	if (err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if (jsfile.length <= 0) {
		console.log("No command file found!");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} loaded!`);
		bot.commands.set(props.help.name, props);
	});

	bot.on("message", async message => {
		if (message.author.bot) return;
		if (message.channel.type === "dm") return;

		let prefix = config.prefix;
		let messageArray = message.content.split(" ");
		let cmd = messageArray[0];
		let args = cmd.splice(1);
		let commandFile = bot.commands.get(cmd.splice(prefix.length));

		if (commandFile) commandFile.run(bot, message, args);
	});

});

if (config.token === "") {
	console.log("Invalid Token!");
} else {
	bot.log(config.token);
}

/*
	   Message From Developer
		Dependencies:
		- discord.js : npm install discord.js
		- fs : npm install fs
		
		Changed Features:
		- Rewrite Base
		- Added 2 Commands : ping & serverinfo

		What can you do?
		- Expand commands according to base
*/
