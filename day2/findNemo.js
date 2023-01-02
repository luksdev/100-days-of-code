function findNemo(phrase) {
  const phraseConvertedToArray = phrase.split(" ");

  for (let i = 0; i < phraseConvertedToArray.length; i++) {
    if (phraseConvertedToArray[i] === "Nemo") {
      return `I found Nemo at ${i + 1}`;
    }
  }

  return result;
}

module.exports = findNemo;
