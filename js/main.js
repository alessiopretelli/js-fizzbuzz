var num = [];

for (i = 1; i <= 100; i++) {
    num[i] = i;

    if (((num[i] % 3) == 0) && ((num[i] % 5) == 0)) {
        console.log("FizzBuzz");
    } else if ((num[i] % 3) == 0) {
        console.log("Fizz");
    } else if ((num[i] % 5) == 0) {
        console.log("Buzz");
    } else {
        console.log(num[i]);
    }
    
}

