// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

function problem() {
  var sum = 2;
  for (i = 3; i < 2000000; i += 2) {
    let flag = 1;
    for (j = 2; j <= Math.sqrt(i); j++) {
      (i % j == 0) ? (flag = 0) : '';
    }
    (flag == 1) ? (sum += i) : ''; 
  }
  console.log(sum);
}

problem();


// 142913828922
// [Done] exited with code = 0 in 19.244 seconds