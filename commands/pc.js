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
        .setEmoji('💻')
        .setLabel('750')
        .setStyle('LINK')
    )

    await message.reply({
        content: 'Zeker?',
        components: [row, linkrow]
    })

}


module.exports.help = {
    name: "pc"
}