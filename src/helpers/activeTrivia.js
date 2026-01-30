// Stores active trivia questions per user (or per channel)
export const activeTrivia = new Map();
// key: userId (string)
// value: { correctLetter: "A"|"B"|"C"|"D" }
