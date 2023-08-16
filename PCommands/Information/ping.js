module.exports.run = async (client, message, args) => {
  message.channel.send(`Current websocket latency \`${client.ws.ping}\``);
};
module.exports.name = "ping";
