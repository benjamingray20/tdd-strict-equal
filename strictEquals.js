const strictEquals = (numOne, numTwo) => {
  if (Object.is(numOne, numTwo)) {
    return true
  }
  else {
    return false
  }

}
module.exports = strictEquals