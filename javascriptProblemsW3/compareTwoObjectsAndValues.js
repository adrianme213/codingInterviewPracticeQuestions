const checkIfObjectHasSamePropertiesAsGiven = (givenObject, obj1) => {
  for (let prop in givenObject) {
    if (obj1[prop] === undefined) {
      return false;
    } else if (givenObject[prop] !== obj1[prop]) {
      return false;
    }
  }
  return true;
}
console.log(checkIfObjectHasSamePropertiesAsGiven({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // false
console.log(checkIfObjectHasSamePropertiesAsGiven({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // true
console.log(checkIfObjectHasSamePropertiesAsGiven({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // true
