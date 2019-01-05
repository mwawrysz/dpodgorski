function getLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((accumulator, element) => element.length > accumulator.length
      ? element
      : accumulator
    , '')
}

module.exports = getLongestWord
