import { activeTrivia } from "../helpers/activeTrivia.js";

export default {
  name: "messageCreate",
  async execute(message) {
    if (message.author.bot) return;

    const state = activeTrivia.get(message.author.id);
    if (!state) return; // user isn't currently answering a trivia question

    const input = message.content.trim().toUpperCase();
    const letter = input[0];

    if (!["A", "B", "C", "D"].includes(letter)) return;

    if (letter === state.correctLetter) {
      await message.reply("✅ Correct!");
    } else {
      await message.reply(`❌ Incorrect. The correct answer was **${state.correctLetter}**.`);
    }

    // Clear the active question so they can't keep guessing
    activeTrivia.delete(message.author.id);
  },
};
