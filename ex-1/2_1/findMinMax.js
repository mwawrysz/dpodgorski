function findMinMax(array) {
  const sortedArray = array.sort()
  return [sortedArray[1], sortedArray[sortedArray.length - 2]]
}

module.exports = findMinMax


const object = {
  age: 13,
  getAge: () => 123,
}