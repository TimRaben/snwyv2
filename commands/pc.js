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
        .setURL('https://www.megekko.nl/wl/N73A4GFD')
        .setEmoji('💲')
        .setLabel('750,-')
        .setStyle('LINK')
    )
    .addComponents(
        new discord.MessageButton()
        .setURL('https://www.megekko.nl/wl/R6YP59ET')  
        .setEmoji('💲')
        .setLabel('€1.000')
        .setStyle('LINK')

    ) 
    const test = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
        .setURL('https://www.megekko.nl/wl/CHJ9X64S')  
        .setEmoji('💲')
        .setLabel('€1.500')
        .setStyle('LINK')

    ) 
    .addComponents(
        new discord.MessageButton()
        .setURL('https://www.megekko.nl/wl/4FXQ9N2Z')  
        .setEmoji('💲')
        .setLabel('€2.000')
        .setStyle('LINK')

    )
    const test2 = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
        .setURL('https://www.megekko.nl/wl/6DBXR78G')  
        .setEmoji('💲')
        .setLabel('€2.500')
        .setStyle('LINK')

    )
    .addComponents(
        new discord.MessageButton()
        .setURL('https://www.megekko.nl/wl/M3A7PYCZ')  
        .setEmoji('💲')
        .setLabel('€3.000')
        .setStyle('LINK')

    ) 

    await message.reply({
        content: 'Zeker?',
        components: [linkrow, test, test2]
    })

}


module.exports.help = {
    name: "pc"
}