const patternGuess = require('./patternGuess');
test('ten numbers pattern', () => {
    expect(patternGuess('1234567890')).toBe('[0-9]{10}')
});