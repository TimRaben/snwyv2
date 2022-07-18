const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.reply("⛔ **|** Geef geen geldige persoon op.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    user.send(`${args.slice(1).join(" ")}`) (err => {

    if (err) return message.channel.send("⛔ **|** Deze persoon heeft PM's uitstaan...");

    });

    message.channel.send("done =)"); 


}

module.exports.help = {
    name: "msg"
}