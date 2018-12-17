const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(bot, message, args) => {
    var guild = message.guild;
    message.channel.send(':ping_pong: Pinging...').then((msg) => {
        msg.edit(`:knife: Pong! Latency is ${msg.createdTimestamp - message.createdTimestamp}ms!`);
    });
    console.log(`Ping command used by ${message.author.tag} ID: ${message.author.id} Time: ${Date()} Guild: ${guild}`);
};

module.exports.help = {
    name: "ping"
}