module.exports = class Embed {
  constructor(title, description, footer, timestamp, color) {
    title = this.title
    description = this.description
    footer = this.footer
    timestamp = this.timestamp
    color = this.color
  }
  embed(title, description, footer, timestamp, color) {
    const Discord = require('discord.js');
    if (timestamp === false) return new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color);
    else return new Discord.MessageEmbed()
    .setTitle(title)
    .setDescription(description)
    .setFooter(footer)
    .setColor(color)
    .setTimestamp();
  } 
}