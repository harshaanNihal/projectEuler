// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3 - digit numbers.
function problem() {
  var largest = 0;
  for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
      let prdct = i * j;
      let strN = String(prdct);
      var flag = 1;
      flag = palan(strN);
      
      if (flag) {
        largest = i * j > largest ? (i * j) : largest;
      }
    }
  }
  return largest;
}
problem();

function palan(strN) {
  flag = 1;
  numStr = strN.split("");
  for (let x = 0,j = numStr.length; x <= numStr.length / 2; x++,j--) {
    if (numStr[x] != numStr[j - 1]) flag = 0;
  }
  return flag;
}