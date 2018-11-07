// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
// What is the sum of the digits of the number 21000 ?

function problem(a,b) {
  var res = Number(Math.pow(a,b));
  sum = 0;
  while (res % 10 == 0) {
    res = res / 10;
  }
  while(res > 0) {
    if (res % 10 == 0) {
      res = res / 10;
    }
    else {
      let lDigit = (res % 10);
      res = Math.floor(res / 10);
      sum += lDigit;
      console.log(sum );
    }
  }
}

problem(2,1000);
