const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
        .setCustomId('750')
        .setURL('https://snwy.jouwweb.nl/')
        .setLabel('€750,-')
        .setStyle('LINK')


    ); 

    message.channel.send({content: 'test bericht', components: [row] });

}

module.exports.help = {
    name: "pc"
}