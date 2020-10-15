
var isCustomerWinner = (codeList=[], shoppingCart=[]) => {
  if(codeList.length === 0) return 1;
  if(shoppingCart.length === 0) return 0;

  let [iiCodeList, iiShopCart] = [0,0];
  while(iiCodeList < codeList.length && iiShopCart + codeList[iiCodeList].length  <= shoppingCart.length) {
    let isMatch = true;
    for(let ii = 0; ii < codeList[iiCodeList].length; ii++) {
      if(codeList[iiCodeList][ii] !== "anything" && shoppingCart[iiShopCart+ii] !== codeList[iiCodeList][ii]) {
        isMatch = false;
        break;
      }
    }

    if(isMatch) {
      iiShopCart += codeList[iiCodeList].length;
      iiCodeList++;
    } else {
      iiShopCart++;
    }
  }
  return (iiCodeList === codeList.length) ? 1 : 0;
}

console.log(isCustomerWinner([['apple', 'apple'], ['banana', 'anything', 'banana']], ['orange', 'apple', 'apple', 'banana', 'orange', 'banana']) === 1)
console.log(isCustomerWinner([['apple', 'apple'], ['banana', 'anything', 'banana']], ['banana', 'orange', 'banana', 'apple', 'apple']) === 0)
console.log(isCustomerWinner([['apple', 'apple'], ['banana', 'anything', 'banana']], ['apple', 'banana', 'apple', 'banana', 'orange', 'banana']) === 0)
console.log(isCustomerWinner([['apple', 'banana','apple', 'banana', 'coconut']], ['apple', 'banana', 'apple', 'banana', 'apple', 'banana']) === 0)
console.log(isCustomerWinner([['apple', 'orange'], ['orange', 'banana', 'orange']], ['apple', 'orange', 'banana', 'orange', 'orange', 'banana', 'orange', 'grape']) === 1)
console.log(isCustomerWinner([['apple', 'apple'], ['banana', 'anything', 'banana']], ['apple', 'apple', 'banana', 'banana']) === 0)
console.log(isCustomerWinner([['apple', 'apple'], ['apple', 'anything', 'banana']], ['apple', 'apple', 'banana', 'banana']) === 0)
console.log(isCustomerWinner([['apple', 'apple'], ['apple', 'anything', 'banana']], ['apple', 'apple', 'apple', 'apple', 'banana']) === 1)
console.log(isCustomerWinner([['apple', 'apple'], ['apple', 'banana']], ['apple', 'apple', 'apple', 'banana']) === 1)
console.log(isCustomerWinner([["anything", "apple" ], ["banana", "anything", "banana"]], ["orange", "grapes", "apple", "orange", "orange", "banana", "apple", "banana", "banana"]) === 1)
console.log(isCustomerWinner([['anything']], ['apple', 'apple', 'apple', 'banana']) === 1)
