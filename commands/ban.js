const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply(":x: **-** Jij bent niet gemachtigd dit commando uit te voeren!");

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(":x: **-** Geen Permissies!");

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));

    var reason = args.slice(2).join(" ");

    if (!banUser) return message.reply(":x: **-** Ik kan deze gebruiker niet vinden, geef een tag of account ID op!");

    var embed = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Snwy Discord - Ban Systeem")
        .setThumbnail(banUser.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`** Geband:** ${banUser} (${banUser.id})
            **Geband door:** ${message.author}
            **Reden: ** ${reason}`);

    var embeduser = new discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("Snwy Discord - Ban Systeem")
        .setThumbnail(banUser.user.displayAvatarURL)
        .setTimestamp()
        .setDescription(`**Je bent verbannen uit de Snwy Discord!**
                **Geband door:** ${message.author}
                **Reden: ** ${reason}\n\n**Wil je terug in onze Server komen? doe dan een unban apply [klik hier](https://discord.gg/KHC4g3umee)`);

    var embedPrompt = new discord.MessageEmbed()
    .setTitle("Gelieve te reageren binnen **30** seconden!")       
        .setColor("ORANGE")
        .setDescription(`Weet je zeker dat je ${banUser} wilt verbannen?`);


    message.channel.send(embedPrompt).then(async msg => {

        var emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);


        // We kijken dat het de gebruiker is die het als eerste heeft uitgevoerd.
        // message.channel.awaitMessages(m => m.author.id == message.author.id,
        //     { max: 1, time: 30000 }).then(collected => {

        //         if (collected.first().content.toLowerCase() == 'yes') {
        //             message.reply('Kick speler.');
        //         }
        //         else
        //             message.reply('Geanuleerd');

        //     }).catch(() => {
        //         message.reply('Geen antwoord na 30 sec, geanuleerd.');
        //     });


        if (emoji === "✅") {

            msg.delete();


            banUser.ban(reason).catch(err => {
                if (err) return message.channel.send(`:x: **-** Verbanning geannuleerd! FOUT!`);
            });

            message.reply(embed)
            banUser.send(embeduser)

        } else if (emoji === "❌") {

            msg.delete();

            message.reply("✅ **-** Actie succesvol geannuleerd!").then(m => m.delete(5000));

        }

    });

}

// Emojis aan teksten kopellen.
async function promptMessage(message, author, time, reactions) {
    // We gaan eerst de tijd * 1000 doen zodat we seconden uitkomen.
    time *= 1000;

    // We gaan ieder meegegeven reactie onder de reactie plaatsen.
    for (const reaction of reactions) {
        await message.react(reaction);
    }

    // Als de emoji de juiste emoji is die men heeft opgegeven en als ook de auteur die dit heeft aangemaakt er op klikt
    // dan kunnen we een bericht terug sturen.
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;

    // We kijken als de reactie juist is, dus met die filter en ook het aantal keren en binnen de tijd.
    // Dan kunnen we bericht terug sturen met dat icoontje dat is aangeduid.
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
}

module.exports.help = {
    name: "ban",
    description: "Ban iemand",
    category: "Algemeen"
}