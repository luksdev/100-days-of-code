function calcAge(age) {
  const numberOfDaysInAYear = 365

  if (age <= 0) return 0

  return age * numberOfDaysInAYear
}

module.exports = calcAge
