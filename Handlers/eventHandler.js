async function loadEvents(client) {
  const { loadFiles } = require("../Functions/fileLoader");
  const ascii = require("ascii-table");
  const table = new ascii().setHeading("Events", "Status");

  await client.events.clear();

  const Files = await loadFiles("Events");
  if (!Files || Files.length == 0) {
    throw new Error(
      "Events file not found or no events files were findable\nPlease make sure the events file end with .js"
    );
  }

  Files.forEach((file) => {
    const event = require(file);

    try {
      const execute = (...args) => event.execute(...args, client);
      client.events.set(event.name, execute);
      if (event.rest) {
        if (event.once) client.rest.once(event.name, execute);
        else client.rest.on(event.name, execute);
      } else {
        if (event.once) client.once(event.name, execute);
        else client.on(event.name, execute);
      }

      table.addRow(event.name, "✅");
    } catch {
      table.addRow("Name couldn't be loaded", "❌");
    }
  });

  return console.log(table.toString(), "\nLoaded Events.");
}
module.exports = { loadEvents };
