const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const embed = new Discord.EmbedBuilder()
    .setTitle("Help Menu (Prefix)")
    .setDescription("Commands: ?ping, ?help, ?amogus, ?8ball")
    .setColor("DarkGold");
  message.reply({ embeds: [embed] });
};
module.exports.name = "help";
