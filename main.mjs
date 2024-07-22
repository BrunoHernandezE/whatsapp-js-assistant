import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg
import generate from "qrcode-terminal";
import { addRecipe } from './db/config.mjs';


const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    generate(qr, {small: true});
});
client.initialize();


client.on("message_create", (message)=> {
  
  console.log(message.author)
  console.log(message.body)
})

client.on("message_create", message => {
  if(message.body === "Hola") {
    // client.sendMessage(message.from, "pong!")
    message.reply(`
      01-`);
  }
  if(message.body === "Video") {
    addRecipe()
    client.sendMessage(message.from, "m")
  }
})
