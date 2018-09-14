function smlNum() {
  var num = 0;
  for (i = 20; ; i++) {
    var flag = 1;
    for (j = 2; j <= 20; j++) {
      if (i % j != 0) {
        flag = 0;
      }
    }
    if (flag == 1) {
      num = i;
      console.log(num);
      break;
    }
  }
  return num;
}