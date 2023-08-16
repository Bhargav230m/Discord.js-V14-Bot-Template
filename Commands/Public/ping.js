const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const Reply = require("../../Systems/Reply");
const ms = require("ms");
module.exports = {
  Cooldown: ms("5s"),
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Responds with pong"),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  execute(interaction, client) {
    Reply(
      interaction,
      "⏳",
      `The current Websocket Latency is : \`${client.ws.ping} ms\``,
      true
    );
  },
};
