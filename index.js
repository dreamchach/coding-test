/*
// 1-1
console.log('Hello World!')
*/

// 1-2
const fs = require('fs')
const input = fs.readFileSync('./input/ch1/1-2.txt').toString().split('\n')
// console.log(input)
// ['1 2']
const line = input[0].split(' ')
const a = parseInt(line[0])
const b = parseInt(line[1])
console.log(a+b)