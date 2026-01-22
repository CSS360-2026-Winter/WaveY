//import { EmbedBuilder, messageLink, userMention } from "discord.js";
import { EmbedBuilder, userMention } from "discord.js";
const CHANNEL_NAME = process.env.CHANNEL_NAME;
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
        message.channel.send(welcomeMessage);
      }
      },
    }
   // const channel = member.guild.channels.cache.find(
     // (channel) => channel.name === CHANNEL_NAME
    //);

    /*
      TODO: Change getWelcomeMessage to getWelcomeMessageWithMeme to send a meme to welcome your user.
      Did this this is done - GM
      */
    //const welcomeMessage = await getWelcomeMessageWithMeme(member.id);
    //channel.send(welcomeMessage);
  //},
//};

const getWelcomeMessage = (userId) => {
  /*
    this function returns a welcome message.
    Play around with the code here and customise the welcome message.
    Did this - GM
    */
  return {
    content: `Welcome ${userMention(userId)},
    Welcome to the server! We got memes aplenty, hope you have a great time here in the Chatroom!
  `,
  };
};

//
const getWelcomeMessageWithMeme = async (userId) => {
  /*
    this function returns a welcome message with a meme.
    Play around with the code here and customise the welcome message.

    TODO: Change this function to return different welcome message with a meme everytime a new user joins.
    Done - GM
    */
  const meme = await getWelcomeMeme();

  return {
    content: `Welcome ${userMention(userId)},
    Welcome to the server! We got memes aplenty, hope you have a great time here in the Chatroom!`,
    embeds: [meme],
  };
};

const getWelcomeMeme = async () => {
  /*
    this function returns a meme.

    TODO: change this function to return a different meme randomly everytime a new user joins.
Edited code on top and finished this - GM 
math floor = round down to nearest whole number
 math.random = random decimal between 0 -> 1
 MEMES.length = (^^) * length of array so it gives a realistic number in array 

    */
 const randomMeme = MEMES[Math.floor(Math.random() * MEMES.length)];
  return new EmbedBuilder().setImage(randomMeme);
};

export default event;
