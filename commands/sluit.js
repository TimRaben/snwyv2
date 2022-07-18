const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const categoryID = "925724299921326111";

    if (message.channel.parentID == categoryID) {
        message.channel.delete();
    } else {


        message.channel.send(":x: **|** Doe dit in een officiële Support Ticket!");
    
    }

    message.member.send(':white_check_mark: **||** Je hebt succesvol je ticket gesloten, zodra je nog een vraag hebt maak gerust opnieuw een ticket.');

}

module.exports.help = {
    name: "sluit",
    description: "Geeft al de verschillende commands",
    category: "Informatie",
}