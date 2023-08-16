const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const { Start } = require("./Structure/StartUp");
const { Guilds, GuildMembers, GuildMessages, MessageContent } =
  GatewayIntentBits;
const { User, Message, GuildMember } = Partials;

const client = new Client({
  intents: [Guilds, GuildMembers, GuildMessages, MessageContent],
  partials: [User, Message, GuildMember],
});

client.events = new Collection();
client.subCommands = new Collection(); //SubCommand handler
client.errors = new Collection(); //Error Handler
client.prefixCommands = new Collection(); //Prefix Command Handler
client.commands = new Collection(); //Command Handler

Start(client);
