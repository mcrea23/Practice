const palidndrome = str => {
  // turn string into lowercase
  let checker = "";
  str = str.toLowerCase()
  // reverse  input string and return the result of the comparison
  checker = str;
  console.log(checker)
  checker = str.split('')
  console.log(checker)
  checker = checker.reverse()
  console.log(console.log)
  checker = checker.join('');
  console.log(str === str.split("").reverse().join('')
  // take the string, is it equal to the string reversed
  // first it splits the string, then it reveres it, then joins it back, then checks
  )
}

palidndrome("Kayak")