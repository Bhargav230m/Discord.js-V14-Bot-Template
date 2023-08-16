const {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} = require("discord.js");
const Reply = require("../../Systems/Reply");
const { loadCommands } = require("../../Handlers/commandHandler");
const { loadEvents } = require("../../Handlers/eventHandler");
const ms = require("ms");
module.exports = {
  Cooldown: ms("5s"),
  developer: true,
  data: new SlashCommandBuilder()
    .setName("reload")
    .setDescription("Reload")
    .addStringOption((options) =>
      options
        .setName("action")
        .setDescription("Select an action")
        .setRequired(true)
        .addChoices(
          { name: "Events", value: "Events" },
          { name: "Commands", value: "Commands" }
        )
    ),
  /**
   *
   * @param { ChatInputCommandInteraction } interaction
   */
  async execute(interaction, client) {
    const action = interaction.options.getString("action");
    switch (action) {
      case "Events":
        console.clear();
        loadEvents(client);
        Reply(
          interaction,
          "white_check_mark",
          `Successfully reloaded ${action}`
        );
        break;
      case "Commands":
        console.clear();
        loadCommands(client);
        Reply(
          interaction,
          "white_check_mark",
          `Successfully reloaded ${action}`
        );
        break;
    }
  },
};
