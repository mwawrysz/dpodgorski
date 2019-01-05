const isPalindrome =  require('./isPalindrome')

test('Palindrome kajak', () => {
  expect(isPalindrome('kajak')).toBe(true);
});

test('Palindrome kobyła', () => {
  expect(isPalindrome('Kobyła Ma mały bok')).toBe(true);
});

test('Not palindrome', () => {
  expect(isPalindrome('this is not a palindrome')).toBe(false);
});
