/*
// 1-1
console.log('Hello World!')
*/

/*
// 1-2
const fs = require('fs')
const input = fs.readFileSync('./input/ch1/1-2.txt').toString().split('\n')
// console.log(input)
// ['1 2']
const line = input[0].split(' ')
const a = parseInt(line[0])
const b = parseInt(line[1])
console.log(a+b)
*/

/*
// 1-3
const fs = require('fs')
const input = fs.readFileSync('./input/ch1/1-3.txt').toString().split('\n')
const line = input[0].split(' ')
const a = parseInt(line[0])
const b = parseInt(line[1])
console.log(a*b)
*/

/*
// 1-4
const fs = require('fs')
const input = fs.readFileSync('./input/ch1/1-4.txt').toString().split('\n')
const line = input[0].split(' ')
const a = parseInt(line[0])
const b = parseInt(line[1])

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)
*/

/*
//1-5
const fs = require('fs')
const input = fs.readFileSync('./input/ch1/1-5.txt').toString().split('\n')
// console.log(input)
// ['472', '385']
const a = parseInt(input[0])
const b = parseInt(input[1])
const[c,d,e] = input[1].split('')

console.log(a * parseInt(e))
console.log(a * parseInt(d))
console.log(a * parseInt(c))
console.log(a * b)
*/

// 2-1
const fs = require('fs')
const input = fs.readFileSync('./input/ch2/2-1.txt').toString().split('\n')
const a = parseInt(input[0])

if(a >= 90){
    console.log('A')
}else if(a>=80 && a<90){
    console.log('B')
}else if(a>=70 && a<80){
    console.log('C')
}else if(a>=60 && a<70){
    console.log('D')
}else {
    console.log('F')
}