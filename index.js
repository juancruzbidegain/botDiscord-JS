const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Prueba discord Bot!');
});

client.on('message',  msg => {
    msg.content === "Hola" "){
     msg.channel.send('Todo Bien?')
   }
});

client.login('Nzk3MjUyMzkxMDI3NjA1NTA1.X_jxJg.I4coQ-OKoz7teg_cxYAppH3D2Dc');