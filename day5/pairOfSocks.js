function sockPairs(string) {
  if (!string.trim()) return 0;

  let count = 0
  const socks = string.split("").sort();

  for (let i = 0; i < socks.length; i++){
    if (socks[i] === socks[i + 1]) {
      count++
      i++
    }
  }

  return count
}

module.exports = sockPairs
