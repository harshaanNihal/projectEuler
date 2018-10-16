// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
function largPrimeFact(n) {
  var larNum = 0;
  for (i = 2; i <= Math.sqrt(n); i++) {
    let flag = 1;
    for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j == 0) {
        flag = 0;
      }
    }
    if (n % i == 0 && i > larNum && flag == 1) {
      larNum = i;
    }
  }
  console.log(larNum);
}
largPrimeFact(600851475143);


// 6857
// [Done] exited with code = 0 in 5.106 seconds
