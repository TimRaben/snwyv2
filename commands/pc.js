const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const row = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
        .setCustomId('ban_2')
        .setEmoji('💻')
        .setLabel('Confirm')
        .setStyle('SUCCESS')
    )
    .addComponents(
        new discord.MessageButton()
            .setCustomId('test_1')
            .setLabel('Cancel')
            .setStyle('DANGER')

    ) 
    
    const linkrow = new discord.MessageActionRow().addComponents(

        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/PhdtLs')
        .setEmoji('💲')
        .setLabel('€750,-')
        .setStyle('LINK')
    )
    .addComponents(
        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/dywLd9')  
        .setEmoji('💲')
        .setLabel('€1.000')
        .setStyle('LINK')

    ) 
    const test = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/zJPhv3')  
        .setEmoji('💲')
        .setLabel('€1.500')
        .setStyle('LINK')

    ) 
    .addComponents(
        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/YT9XVw')  
        .setEmoji('💲')
        .setLabel('€2.000')
        .setStyle('LINK')

    )
    const test2 = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/DBJqrD')  
        .setEmoji('💲')
        .setLabel('€2.500')
        .setStyle('LINK')

    )
    .addComponents(
        new discord.MessageButton()
        .setURL('https://nl.pcpartpicker.com/list/vmKxxs')  
        .setEmoji('💲')
        .setLabel('€3.000')
        .setStyle('LINK')

    ) 

    message.channel.send({
        components: [linkrow, test, test2],
        embed: embed
    })

}


module.exports.help = {
    name: "pcsamenstellingen"
}