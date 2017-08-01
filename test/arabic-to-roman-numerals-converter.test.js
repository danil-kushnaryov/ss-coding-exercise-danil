const chai = require('chai');
const expect = chai.expect;
const arabicToRomanNumeralsConverter = require('../src/arabic-to-roman-numerals-converter');

const expects = ({converted, expected}) => {
  const result = arabicToRomanNumeralsConverter.convert(converted);
  expect(result).to.equal(expected);
};

describe('Pluralsight engineer coding exercise.', () => {
  describe('Arabic to roman numerals converter class:', () => {
    it('does nothing, just a blank test',
      () => expect(true).to.equal(true));

    it('returns an empty string if passed value is 0',
      () => expects({converted: 0, expected: ''}));

    it('returns V if passed value is 5',
      () => expects({converted: 5, expected: 'V'}));

    it('returns X if passed value is 10',
      () => expects({converted: 10, expected: 'X'}));

    it('returns II if passed value is 2',
      () => expects({converted: 2, expected: 'II'}));

    it('returns III if passed value is 3',
      () => expects({converted: 3, expected: 'III'}));

    it('returns XX if passed value is 20',
      () => expects({converted: 20, expected: 'XX'}));

    it('returns L if passed value is 50',
      () => expects({converted: 50, expected: 'L'}));

    it('returns IV if passed value is 4',
      () => expects({converted: 4, expected: 'IV'}));

    it('returns MMMCMLXXVIII if passed value is 3978',
      () => expects({converted: 3978, expected: 'MMMCMLXXVIII'}));
  });
});