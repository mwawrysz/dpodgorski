function isPalindrome(sentence) {
  const reversed = sentence
    .replace(/ /g,'')
    .split('')
    .reverse()
    .join('')

  return sentence.replace(/ /g,'').toLowerCase() === reversed.toLowerCase()
}

module.exports = isPalindrome
