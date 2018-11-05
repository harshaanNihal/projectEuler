// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 14 is not a sum it is not included.
// The sum of these numbers is 1634 + 8208 + 9474 = 19316.
// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
function problem() {
  var sum = 0;
  for (let i = 100; i < 1000000; i++) {
    var first = i % 10;
    var second = (Math.floor(i / 10)) % 10;
    var third = (Math.floor(i / 100)) % 10;
    var fourth = (Math.floor(i / 1000)) % 10;
    var fifth = (Math.floor(i / 10000)) % 10;
    var sixth = Math.floor(i / 100000) % 10;
    if (i === Math.pow(first, 5) + Math.pow(second, 5) + Math.pow(third, 5) + Math.pow(fourth, 5) + Math.pow(fifth, 5) + Math.pow(sixth, 5)) {
      sum += i;
    }
  }
  console.log(`sum= ${sum} `);
  return sum;
}
problem();
// sum = 443839

// [Done] exited with code = 0 in 0.571 seconds