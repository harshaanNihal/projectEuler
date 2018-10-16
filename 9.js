
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
//   a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.
// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.
function problem() {
  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) { 
      for (let c = b; c < 1000; c++) {
        let cSquare = c*c;
        if (cSquare === ((a*a) + (b*b)) ) {
          if ((a+b+c) === 1000) {
            let result = (a*b*c);
            console.log(result);
            return result;
          }
        }
      }
    }
  }
}
problem();

// 31875000
// [Done] exited with code = 0 in 0.886 seconds