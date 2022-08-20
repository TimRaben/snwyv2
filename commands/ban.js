const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(":x: **-** Je kan geen collega's verbannen!");

    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(":x: **-** Je hebt niet de juiste machtigingen om iemand te verbannen!");

    if (!args[1]) return message.reply("Geef een reden op!")

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(1).join(" ");

    if (!banUser) return message.reply(":x: **-** Ik kan deze gebruiker niet vinden, geef een tag of account ID op!");

    if (!banUser.permissions.has("BAN_MEMBERS")) return message.reply(":x: **-** Je kan geen collega's verbannen!");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Snwy Discord - Ban Systeem")
        .setTimestamp()
        .setDescription(`** Geband:** ${banUser} (${banUser.id})
            **Geband door:** ${message.author}
            **Reden: ** ${reason}`);

    var embeduser = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Snwy Discord - Ban Systeem")
        .setTimestamp()
        .setDescription(`**Je bent verbannen uit de Snwy Discord!**
                **Geband door:** ${message.author}
                **Reden: ** ${reason}\n\n**Wil je terug in onze Server komen? doe dan een unban apply [klik hier](https://discord.gg/KHC4g3umee)`);

    var embedPrompt = new discord.MessageEmbed()
    .setTitle("Gelieve te reageren binnen **30** seconden!")       
        .setColor("ORANGE")
        .setDescription(`Weet je zeker dat je ${banUser} wilt verbannen?`);


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

                    msg.delete()

                    banUser.ban({reason: reason}).catch(err => {
                        if (err) return message.channel.send(`Error! Er is iets fout gegaan!`);
                    });

                    message.channel.send({ embeds: embed });

                } else if (emojiDetails.emoji.name === "❌") {

                    msg.delete();

                    message.channel.send("Ban succesvol geannuleerd!").then(msg => {

                        message.delete();
                        setTimeout(() => msg.delete(), 5000);
                    }
                        )};
                
         
                
            });
        });

}
    

module.exports.help = {
    name: "ban",
    description: "Ban iemand",
    category: "Algemeen"
}