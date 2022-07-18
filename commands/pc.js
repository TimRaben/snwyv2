const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
        .setURL('https://snwy.jouwweb.nl/')
        .setCustomId('750')
        .setLabel('€750,-')
        .setStyle('LINK')


    ); 

    message.channel.send({content: "test", components: [row] });

}

module.exports.help = {
    name: "pc"
}