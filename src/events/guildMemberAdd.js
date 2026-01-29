//import { EmbedBuilder, messageLink, userMention } from "discord.js";
import { EmbedBuilder, userMention } from "discord.js";

const MEME_URL = process.env.MEME_URL || "";

const MEMES = [
MEME_URL, 
  "https://i.pinimg.com/474x/43/42/01/4342016322c2d9aeaa8db22f6c4eb22f.jpg", //chungus
  "https://thehowler.org/wp-content/uploads/2018/01/roll-safe-meme-1.jpg", //think
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCuzCs7pdOLIyxrpfu917nwNjKLKmWTbcocg&s" //spongebob

];

const event = {
  name: "messageCreate",
  async execute(message) {
    if(message.author.bot) return;

      if(message.content.toLowerCase()== "hello"){
        const welcomeMessage = await getWelcomeMessageWithMeme(message.author.id);
        await message.channel.send(welcomeMessage);
      }
      },
    };

const getWelcomeMessageWithMeme = async (userId) => {

  const meme = await getWelcomeMeme();

  return {
    content: `Welcome ${userMention(userId)},
    Welcome to the server! We got memes aplenty, hope you have a great time here in the Chatroom!`,
    embeds: [meme],
  };
};

const getWelcomeMeme = async () => {
 const randomMeme = MEMES[Math.floor(Math.random() * MEMES.length)];
  return new EmbedBuilder().setImage(randomMeme);
};

export default event;
