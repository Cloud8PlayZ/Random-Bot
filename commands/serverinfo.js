const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async(bot, command, args) => {
    var guild = message.guild;
    const DiscordEmbed = new Discord.RichEmbed()
    .setColor('#7d5bbe')
    .setTitle(message.guild.name + ` Server Stats`)
    .addField('📄 Channels', `${message.guild.channels.filter(chan => chan.type === 'voice').size} Voice Channels | ${message.guild.channels.filter(chan => chan.type === 'text').size} Text Channels | ${Math.round((message.guild.channels.filter(chan => chan.type === 'voice').size / message.guild.channels.size) * 100)} % Voice Channels | ${Math.round((message.guild.channels.filter(chan => chan.type === 'text').size / message.guild.channels.size) * 100)} % Text Channels`, true)
    .addField(':man: Members', `${message.guild.members.filter(member => member.user.bot).size} Bots  | ${message.guild.memberCount} Total Members | ${Math.round((message.guild.members.filter(member => member.user.bot).size / message.guild.memberCount) * 100)} % Bots`, true)
    .addField(':date: Guild Created At', message.guild.createdAt, true)
    .addField(":globe_with_meridians: Server Region", message.guild.region, true)
    .addField(`:keyboard: AFK Channel ID `, message.guild.afkChannelID, true)
    .addField(`:keyboard: AFK Channel Timeout`, message.guild.afkTimeout + " seconds", true)
    .addField(`:frame_photo: Server Icon`, message.guild.iconURL, true)
    .addField(`:id: Guild ID`, message.guild.id, true)
    .addField(`:man_in_tuxedo: Server Owner`, message.guild.owner, true)
    .addField(`:man_in_tuxedo: Server Owner ID`, message.guild.ownerID, true)
    .addField(`:closed_lock_with_key: Server Verification Level`, message.guild.verificationLevel, true)
    .addField(`:joystick: Roles Size`, message.guild.roles.size, true)
    .setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL)

    message.channel.send({embed: DiscordEmbed});
    console.log(`Serverinfo command used by ${message.author.tag} ID: ${message.author.id} Time: ${Date()} Guild: ${guild}`);
};

module.exports.help = {
    name: "serverinfo"
}