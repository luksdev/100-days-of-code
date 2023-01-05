function barbecueSkewers(barbecueGrill) {
  let isVegan = 0;
  let isNotVegan = 0;

  for (let i = 0; i < barbecueGrill.length; i++) {
    if (barbecueGrill[i].toLowerCase().includes("x")) {
      isNotVegan++;
    } else {
      isVegan++;
    }
  }

  return [isVegan, isNotVegan];
}

module.exports = barbecueSkewers;
