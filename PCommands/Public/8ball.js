let { EmbedBuilder } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let repli = [
    "No.",
    "Never!",
    "NOT POSSIBLE",
    "Impossible.",
    "Nope.",
    "Nah",
    "NO",
    "Yes.",
    "Yeah.",
    "Definitely.",
    "Certainly!",
    "Ofcourse.",
    "YEEEEEEEEE",
    "Yup",
    "Amogos 😳",
    "Sussy.",
    "What",
    "Wait what",
    "ur mom",
    "Ask me later im busy with your mom",
    "yesnt",
    "sus",
  ];

  let no = new EmbedBuilder()
    .setDescription("🗿 | 8Ball needs a question to give an answer.")
    .setColor("Yellow");

  let replies = repli[Math.floor(Math.random() * repli.length)];
  let question = args.join(" ");
  if (!question) return message.reply({ embeds: [no] });

  let answer = new EmbedBuilder()
    .setTitle(`8Ball answers your question`)
    .setDescription(`:question:${question}:question:`)
    .addFields({ name: "**Answer 🎱**", value: `${replies}`})
    .setColor("Random")

  message.channel.send({ embeds: [answer] });
};
module.exports.name = "8ball";
