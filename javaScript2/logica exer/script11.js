function number(num1) {
    if (typeof num1 === 'Number') return NaN
    if (num1 % 3 === 0 && num1 % 5 === 0  ) return 'fizzBuzz';
    if (num1 % 3 === 0  ) return 'fizz';
    if (num1 % 5 === 0  ) return 'Buzz';
    return num1;
    
}
console.log('a', number('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i,number(i))
}
console.log(number(10))