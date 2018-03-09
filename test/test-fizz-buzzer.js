
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
    it('should divide by three', function() {
       const normalCases = [
          {a: 9, expected: 'fizz'},
          {a: 12, expected: 'fizz'},
          {a: -99, expected: 'fizz'}
       ];
       normalCases.forEach(function(input) {
          const answer = fizzBuzzer(input.a);
          expect(answer).to.equal(input.expected);
       });
    })

    it('should raise error if args not numbers', function() {
      const badInputs = [
        ['2'],
        [true],
        ['four']
      ];
      badInputs.forEach(function(input) {
        expect(function() {
          fizzBuzzer(input[0]);
        }).to.throw(Error);
      });
    });
});