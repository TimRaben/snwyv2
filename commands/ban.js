const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Mijn excuses, jij bent niet bevoegd om iemand te kicken!");

    if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("Foutcode: 21");
    
    if (!args[0]) return message.reply("Gelieve een gebruiker op te geven.");

    if (!args[1]) return message.reply("Gelieve een reden op te geven.");

    var banUser = message.guild.members.cache.get(message.mentions.users.first().id || message.guild.members.get(args[0]).id)

    if (!banUser) return message.reply("Gelieve deze persoon kan ik niet vinden.");

    if (banUser.permissions.has("MANAGE_MESSAGES")) return message.reply("Je kan je collega's niet kicken.")

    var reason = args.slice(1).join(" ");

    var datum = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

    var embedPrompt = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Gelieve te reageren binnen 30 Seconde...")
        .setDescription(`Wil je ${banUser} bannen?`);

    var embed = new discord.MessageEmbed()
        .setColor("DARK_RED")
        .setDescription(`**Geband:** ${banUser}\n**Stafflid:** ${message.author}\n**Reden:** ${reason}\n\n**Snwy Discord - Moderatie**`)
        .setTimestamp();

    var embedUser = new discord.MessageEmbed()
        .setTitle("Je bent verbannen uit onze Server...")
        .setDescription(`Je bent helaas verwijderd uit onze Server aangezien je een of meerdere regels hebt overtreden, lees hier onze verdere informatie. \n\n__**Informatie**__\n**Stafflid:** ${message.author}\n**Reden:** ${reason}\n**Datum:** ${datum}\n\nWil jij terug komen in onze Server? doe dan een Unban Verzoeken! [klik hier](https://discord.gg/KHC4g3umee)`)
    
        message.channel.send({ embeds: [embedPrompt] }).then(async msg => {
 
            let authorID = message.author.id;
            let time = 30;
            let reactions = ["✅", "❌"];
             
                // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
            time *= 1000;
             
                // We gaan iedere reactie meegegeven onder de reactie en deze daar plaatsen.
            for (const reaction of reactions) {
                await msg.react(reaction);
            }
             
                // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
                // dan kunnen we een bericht terug sturen.
            const filter = (reaction, user) => {
                return reactions.includes(reaction.emoji.name) && user.id === authorID;
            };
             
                // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
                // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
            msg.awaitReactions({ filter, max: 1, time: time }).then(collected => {
                var emojiDetails = collected.first();
             
        
            if (emojiDetails.emoji.name === "✅") {

                message.delete();

                banUser.kick(reason).catch(err => {
                    if (err) return message.channel.send(`Er is iets fout gegaan.`);
                });

                message.channel.send({embeds: [embed]});

            } else if (emojiDetails.emoji.name === "❌") {

                msg.delete();

                message.channel.send("🔁 Ban succesvol geannuleerd.").then(msg => {
                    message.delete();
                    setTimeout(() => msg.delete(), 5000);

                });

            }
                
        });
    });

    

}
    
    module.exports.help = {
        name: "ban"
    }