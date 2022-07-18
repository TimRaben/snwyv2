const { Client, Intents, Collection, Interaction } = require("discord.js");
const botConfig = require("./botConfig.json");
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith(".js"));

for(const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.help.name, command);

    console.log(`De File ${command.help.name}.js is geladen.`)

}

client.once("ready", () => {

    console.log(`Opgestart`);

    setInterval(() => {
        const statuses = [
            `💻 @.tech_snwy`,
            `🌎 Leden`,
        ]
    
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"}) 
    }, 4500) 

});

client.on("messageCreate", async message => {

    if (message.author.bot) return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    const commandData = client.commands.get(command.slice(prefix.length));

    if (!commandData) return;

    var arguments = messageArray.slice(1);

    try {

        await commandData.run(client, message, arguments);

    } catch (error) {
        console.log(error);
        await message.reply("Foutcode: **1**\n\nStuur een Developer een bericht en geef de foutcode door.")
    }

    client.on("interactionCreate", interaction => {

        if (!interaction.isSelectMenu()) {
            return;
        }

        const { customId, values, member } = interaction;

        if (customId === 'roles') {

            const component = interaction.component;

            const removed = component.options.filter((option) => {
                return !values.includes(option.value)
            });

            for(var id of removed) {
                member.roles.remove(id.value)
            }

            for(var id of values) {
                member.roles.add(id)
            }

            interaction.reply({
                content: ":white_check_mark: **||** Rol geupdate!",
                ephemeral: true
            });
        }

    })


});



client.login(process.env.token);