// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number ?
var arr = [];
function thousandPrime() {
  for (i = 2; ; i++) {
    let flag = 1;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        flag = 0;
      }
    }
    if (flag == 1) {
      arr.push(i);
    }
    if (arr.length == 10001){
      return i;
    }
  }
}

thousandPrime();

// 104743
// [Done] exited with code = 0 in 0.717 seconds