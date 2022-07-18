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

    await message.reply({
        content: 'Zeker?',
        components: [row]
    })

}


module.exports.help = {
    name: "pc"
}