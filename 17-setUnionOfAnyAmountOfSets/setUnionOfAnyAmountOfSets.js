function setUnionOfAnyAmountOfSets(...args) {
  let set = new Set()
  args.forEach(arr => arr.forEach(a => set.add(a)))
  return set
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;