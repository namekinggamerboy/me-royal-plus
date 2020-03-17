const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const Discord = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch");

exports.run = async (client, message, args) => {
  let i = message.mentions.users.first()||client.user;
    const link = i.displayAvatarURL({ format: 'png', size: 2048 });
const result = await fetch(link);
const avatar = await result.buffer();

  const aa = "https://cdn.discordapp.com/attachments/626234090697523201/688393090897150017/slap.png";
  const rr = await fetch(aa);
  const ad = await rr.buffer();
  
  const lin = message.author.displayAvatarURL({ format: 'png', size: 2048 });
const resul = await fetch(lin);
const avata = await resul.buffer();
 
  
  message.channel.send(
    `<@${message.author.id}> slap to <@${i.id}>`,
    new Discord.MessageAttachment(
   new Canvas(1000, 500)
.addImage(ad, 0, 0, 1000, 500)
.save()
.setColor("#00ffff")
.addCircle(450, 180, 140)
.save()
.setColor("#ff0000")
.addCircle(670, 370, 130)
.addRoundImage(avata, 310, 40, 280, 280, 140)
.addRoundImage(avatar, 540, 240, 260, 260, 130)
        .toBuffer(),
      "slap.png"    )
  );
  
}