async function loadCommands(client) {
  const { loadFiles } = require("../Functions/fileLoader");
  const config = require("../config.json");
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("SlashCommands", "Status");
  const PTable = new ascii().setHeading("PrefixCommands", "Status");
  require("colors");

  await client.commands.clear();
  await client.subCommands.clear();
  await client.prefixCommands.clear();
  let commandsArray = [];

  const Files = await loadFiles("Commands");
  const PFiles = await loadFiles("PCommands");
  if (!Files)
    throw new Error(
      "[FILE_NOT_FOUND]".red + " SlashCommands folder was not found"
    );
  if (!PFiles)
    throw new Error(
      "[FILE_NOT_FOUND]".red + " PrefixCommands folder was not found"
    );
  //PrefixCommands
  PFiles.forEach((file) => {
    const command = require(file);
    try {
      if (command.name) {
        client.prefixCommands.set(command.name, command);
        PTable.addRow(command.name, "✅");
      }
    } catch {
      PTable.addRow("Failed to load name", "❌");
    }
  });
  console.log(PTable.toString(), "\nPrefixCommands Loaded");
  //SlashCommands
  Files.forEach((file) => {
    const command = require(file);
    if (command.subCommand) {
      return client.subCommands.set(command.subCommand, command);
    }
    try {
      client.commands.set(command.data.name, command);

      commandsArray.push(command.data.toJSON());
      table.addRow(command.data.name, "✅");
    } catch {
      table.addRow("Failed to load name", "❌");
    }
  });
  if (config.Handler.global == true) {
    await client.application.commands.set(commandsArray);
  }
  if (config.Handler.global == false) {
    const guild = client.guilds.cache.get(config.Handler.guild_id);
    if (!guild) {
      throw new Error(
        "[HANDLER_ERROR]".red +
          " Global is set to false yet no guild id was provided"
      );
    }
    guild.commands.set(commandsArray);
  }

  return console.log(table.toString(), "\nSlashCommands Loaded");
}
module.exports = { loadCommands };
