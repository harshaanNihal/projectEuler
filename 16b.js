var number = [1],
  sum = 0;

for (var i = 0; i < 1000; i++) {
  var carry = 0,
    count = number.length + 1

  for (var j = 0; j < count; j++) {
    var digit = number[j] || 0;

    digit = 2 * digit + carry;

    if (digit > 9) {
      digit -= 10;
      carry = 1;
    }
    else {
      carry = 0;
    }

    number[j] = digit;
  }
}

for (var i = 0; i < 1000; i++) {
  sum += number[i];
}

console.log(sum);