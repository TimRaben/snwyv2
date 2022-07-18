const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var welkomEmbed = new discord.MessageEmbed()
            .setColor("PURPLE")
            .setTitle("Tickets - Tech Snwy")
            .setDescription('Hallo! Het Support Team heeft je zo goed mogelijk proberen te helpen met je vraag, probleem, klacht of aanvraag, hopelijk is het voor jou duidelijk, zodra u nog ergens hulp bij nodig heeft helpen we u gerust verder.\n\nGeen vragen meer? Typ dan ``!sluit``')
            .setAuthor("Snwy Discord", "https://images-ext-2.discordapp.net/external/I2ZYn5h72yExewguZzpWhObtsXHNf5H-yuBZWy-YkNw/%3Fsize%3D256/https/cdn.discordapp.com/banners/845678808857051146/29290c6892cf37941c542a77146da8dc.png")
            .setFooter("Snwy Discord - Tickets");

        return message.channel.send(welkomEmbed);

}

module.exports.help = {
    name: "afgerond"
}