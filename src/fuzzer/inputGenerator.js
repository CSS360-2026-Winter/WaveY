/**
 * Simple input generator for fuzzing
 * Creates random/edge case inputs to break functions
 */

export const generateRandomStrings = (count = 20) => {
  const inputs = [
    // Edge cases
    '',
    ' ',
    '\n',
    '\t',
    null,
    undefined,
    
    // Unicode & special chars
    '你好',
    '🎉🎊',
    '<script>alert("xss")</script>',
    '"; DROP TABLE users; --',
    
    // Long strings
    'a'.repeat(10000),
    
    // Whitespace variations
    '   ANSWER   ',
    '\n\nANSWER\n\n',
    
    // Mixed cases
    'AnSwEr',
    'ANSWER',
    'answer',
    
    // Numbers and symbols
    '123',
    '!@#$%^&*()',
    'answer123',
    
    // Repeated chars
    'aaaaaaaaaa',
  ];
  
  return inputs;
};

export const generateRandomAnswers = (count = 20) => {
  return [
    'A',
    'B',
    'C',
    'D',
    'a',
    'b',
    'c',
    'd',
    '',
    ' ',
    'AA',
    'AB',
    '1',
    'invalid',
    null,
    undefined,
  ];
};

export const generateTrivaAnswerPairs = () => {
  return [
    { correct: 'A', user: 'A' },
    { correct: 'A', user: 'a' },
    { correct: 'A', user: ' A ' },
    { correct: 'B', user: 'C' },
    { correct: 'C', user: '' },
    { correct: 'D', user: null },
    { correct: '', user: 'A' },
    { correct: '你好', user: '你好' },
    { correct: 'A', user: '🎉' },
  ];
};

export const generateMessageInputs = () => {
  return [
    'hello',
    'HELLO',
    'Hello',
    'hello ',
    ' hello',
    ' hello ',
    '',
    '   ',
    'hello world',
    'hello123',
    '你好',
    '🎉',
    null,
  ];
};
