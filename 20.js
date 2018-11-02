
function problem(a) {
  var res = Number(fact())
  sum = 0;
  while (res % 10 == 0) {
    res = res / 10;
  }
  while (res > 0) {
    if (res % 10 == 0) {
      res = res / 10;
    }
    else {
      let lDigit = (res % 10);
      res = Math.floor(res / 10);
      sum += lDigit;
    }
    console.log(sum);
  }
}
problem(100);
function fact(a) {
  res = 1;
  for (let i = a; i > 0; i--) {
    res = res * i; 
  }
  return res;
}