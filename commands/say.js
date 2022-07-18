const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Administratie - Tech Snwy")
            .setDescription('Beste Leden,\n\nDit Kanaal is om mensen jou Setup te laten zien en mensen te helpen met het upgraden van hun setup doormiddel van ideeën, hulp enzovoort, daarom is het niet te bedoeling dat jij Setups van andere mensen stuurt of van internet pakt zodra wij hier achter komen zullen hier consequenties aan zitten, dat is het risico.\n\n')
            .setAuthor("Snwy Discord", "https://images-ext-2.discordapp.net/external/I2ZYn5h72yExewguZzpWhObtsXHNf5H-yuBZWy-YkNw/%3Fsize%3D256/https/cdn.discordapp.com/banners/845678808857051146/29290c6892cf37941c542a77146da8dc.png")
            .setFooter("Snwy Discord - Tickets");

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "afgerond"
}