// helpers/meme.js
import { EmbedBuilder } from "discord.js";
import axios from 'axios';

export const getMeme = async () => {
  try {
    const response = await axios.get('https://meme-api.com/gimme');
    const data = response.data;
    return new EmbedBuilder()
      .setImage(data.url)
      .setTitle(data.title);
  } catch (error) {
    console.error(error);
    return new EmbedBuilder()
      .setTitle('Error')
      .setDescription('Could not fetch a meme right now.');
  }
};
