const discord = require("discord.js");

let suggestionChannel = client.channels.cache.find(c => c.name == "test-development");
        if(message.channel == suggestionChannel) {
            if (message.author.bot) return;
            message.delete();
            let msg = message.content;
            let suggestionEmbed;
            suggestionEmbed = new discord.MessageEmbed()
                .setTitle(`Suggestie van ${message.author.username}#${message.author.discriminator}`)
                .setColor('RANDOM')
                .setDescription(msg)
                .setTimestamp()

                
            message.channel.send({
                embed: suggestionEmbed,
            }).then(async msg => {
                    await msg.react('✅');
                    await msg.react('❌');
                })
        }