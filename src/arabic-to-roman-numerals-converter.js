class ArabicToRomanNumeralsConverter {
  constructor () {
    this.lookup = { M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1 };
  }

  convert(arabicDigit) {
    let roman = '';

    if(arabicDigit === 0) {
      return roman;
    } else {
      for (let i in this.lookup ) {
        while ( arabicDigit >= this.lookup[i] ) {
          roman += i;
          arabicDigit -= this.lookup[i];
        }
      }

      return roman;
    }
  }
}

module.exports = new ArabicToRomanNumeralsConverter();