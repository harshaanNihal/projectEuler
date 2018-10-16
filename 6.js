function problem() {
  var sum =0;
  var squareOfSum = 0;
  for (i =1 ;i <= 100; i++ ) {
    sum += i;
    squareOfSum += (i*i);
  }
  var result = (sum*sum) - squareOfSum;
  return result;
}
 problem ();

// 25164150
// [Done] exited with code = 0 in 3.115 seconds