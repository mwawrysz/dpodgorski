function alphaSort(value) {
  return value
    .replace(/ /g,'')
    .split('')
    .sort()
    .join('');
}

module.exports = alphaSort;
