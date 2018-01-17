for (i=2; i <= 1000 ;i++) {
  var isPrime = true;
  for (g=2; g < i ; g++) {
    if (i % g == 0) {
      isPrime = false
    }
    }
    if (isPrime == true) {
      document.write(i)
      document.write("<br/>")
    }
    }
