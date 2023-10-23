function number(num1) {
    if (typeof num1 === 'Number') return NaN
    if (num1 % 3 === 0  ) return 'fizz';
    if (num1 % 5 === 0  ) return 'Buzz';
    if (num1 % 3 || 5 === 1  && num1 % 5 === 0  ) return 'fizzBuzz';
    return num1;
    
}
for (let i = 0; i <= 100; i++) {
    console.log(i)
}
console.log(number(10))