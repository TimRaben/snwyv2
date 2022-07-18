const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const embed = new discord.MessageEmbed()
        .setTitle("PC Builds - Prijzen")
        .setColor("PURPLE")
        .setDescription("We hebben een aantal PC Builds samen gesteld voor verschillende prijsklasses, klik hieronder op het bedrag dat jij wilt uitgeven aan een PC en krijg een lijst met producten die jij moet bestellen voor een goede build voor je budget!");

        message.channel.send(embed)

}


module.exports.help = {
    name: "pcsetup"
}