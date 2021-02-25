var num = [];
var ins, ins_two;

for (i = 1; i <= 100; i++) {
    num[i] = i;
    ins = num[i] % 3;
    ins_two = num[i] % 5;

    if ((ins == 0) && (ins_two == 0)) {
        console.log("FizzBuzz");
    } else if (ins == 0) {
        console.log("Fizz");
    } else if (ins_two == 0) {
        console.log("Buzz");
    } else {
        console.log(num[i]);
    }
    
}

