/**
 * Simple Fuzzer for evaluateAnswer function
 * Tests with various inputs to find edge cases and crashes
 */

import { evaluateAnswer } from '../helpers/evaluateAnswer.js';
import {
  generateRandomStrings,
  generateTrivaAnswerPairs,
} from './inputGenerator.js';

export const fuzzEvaluateAnswer = () => {
  console.log('\n🧪 FUZZING evaluateAnswer()...\n');

  const testCases = generateTrivaAnswerPairs();
  let passed = 0;
  let failed = 0;

  testCases.forEach((testCase, index) => {
    try {
      const result = evaluateAnswer(testCase.user, testCase.correct);

      // Check that result has expected structure
      if (
        !result ||
        typeof result.isCorrect !== 'boolean' ||
        typeof result.message !== 'string'
      ) {
        console.error(`❌ Test ${index}: Invalid result structure`, result);
        failed++;
      } else {
        console.log(
          `✅ Test ${index}: user="${testCase.user}" vs correct="${testCase.correct}" -> ${result.isCorrect}`
        );
        passed++;
      }
    } catch (error) {
      console.error(
        `💥 Test ${index} CRASHED: user="${testCase.user}" vs correct="${testCase.correct}"`
      );
      console.error(`   Error: ${error.message}`);
      failed++;
    }
  });

  console.log(`\n📊 Results: ${passed} passed, ${failed} failed\n`);
  return { passed, failed };
};

// Run if invoked directly
if (import.meta.url === `file://${process.argv[1]}`) {
  fuzzEvaluateAnswer();
}
