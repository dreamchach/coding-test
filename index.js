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

/*
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
*/

/*
// 2-2
const fs = require('fs')
const input = fs.readFileSync('./input/ch2/2-2.txt').toString().split('\n')
const line = input[0].split(' ')
let a = parseInt(line[0])
let b = parseInt(line[1])

if(b<45){
    if(a=== 0){
        console.log(23, 60-Math.abs(b-45))
    }else {
        console.log(a-1, 60-Math.abs(b-45))
    }
}else {
    console.log(a, b-45)
}

if (b < 45) {
    a -= 1
    b += 15
    if (a < 0) a = 23;
} else b -= 45;
console.log(a, b)
*/

/*
// 2-3
const fs = require('fs')
const input = fs.readFileSync('./input/ch2/2-3.txt').toString().split('\n')
const line = input[0].split(' ')
let a = parseInt(line[0])
let b = parseInt(line[1])
let c = parseInt(input[1])

if(b + c < 60){
    b = b + c
}else {
    a += Math.floor((b + c) / 60)
    b = (b + c) % 60
    if(a > 23){
        a = a - 24
    }
}

let totalMinute = a * 60 + b + c
a = parseInt(totalMinute / 60);
b = totalMinute % 60

console.log(a, b)
*/

/*
// 2-4.
const fs = require('fs')
const input = fs.readFileSync('./input/ch2/2-4.txt').toString().split('\n')
const [a,b,c] = input[0].split(' ').map((item)=>parseInt(item))

if(a === b && b === c) {
    console.log(10000 + a * 1000)
}else if(a === b) {
    console.log(1000 + a * 100)
}else if(a === c) {
    console.log(1000 + a * 100)
}else if(b === c) {
    console.log(1000 + b * 100)
}else {
    console.log(Math.max(a,b,c) * 100)
}
*/

/*
//3-1
const fs = require('fs')
const input = fs.readFileSync('./input/ch3/3-1.txt').toString().split('\n')
const a = parseInt(input[0])
let b = 0

for(let i = 0; i <= a; i += 1){
    b += i
}

b = a * (a + 1) / 2

console.log(b)
*/

/*
// 3-2
const fs = require('fs')
const input = fs.readFileSync('./input/ch3/3-2.txt').toString().split('\n')
const a = parseInt(input[0])

for(let i = 1; i <= 9; i += 1){
    console.log(`${a} * ${i} = ${a * i}`)
}
*/

/*
// 3-3
const fs = require('fs')
const input = fs.readFileSync('./input/ch3/3-3.txt').toString().split('\n')
const a = parseInt(input[0])

for(let i = 1; i <= a; i += 1){
    let b = ''
    for(let j = 1; j <= i; j += 1){
        b += '*'
    }
    console.log(b)
}
*/

/*
// 3-4
const fs = require('fs')
const input = fs.readFileSync('./input/ch3/3-4.txt').toString().split('\n')
const length = parseInt(input[0])
let answer = ''

for(let i = 1; i <= length; i += 1){
    const line = input[i].split(' ')
    answer += parseInt(line[0]) + parseInt(line[1]) + '\n'
}

console.log(answer)
*/

/*
// 4-1
const fs = require('fs')
const [a, ...rest] = fs.readFileSync('./input/ch4/4-1.txt').toString().split('\n')
const line = rest[0].split(' ').map((item)=>parseInt(item))
console.log(Math.min(...line), Math.max(...line))
*/

/*
// 4-2
const fs = require('fs')
const input = fs.readFileSync('./input/ch4/4-2.txt').toString().split('\n')
const array = [...input].sort((a,b)=> b - a)
const index = input.findIndex(item=> item === array[0])

console.log(array[0])
console.log(index + 1)
*/

/*
// 4-3
const fs = require('fs')
const input = fs.readFileSync('./input/ch4/4-3.txt').toString().trim().split('\n')
let data = input.map(Number)
const answer = new Set()

data.map((item)=> answer.add(item%42))
console.log(answer.size)
*/

// 4-4
const fs = require('fs')
const [a, ...rest] = fs.readFileSync('./input/ch4/4-4.txt').toString().trim().split('\n')

for(let i = 0; i <= a - 1; i += 1){
    const [b, ...c] = rest[i].split(' ').map(Number)
    const avr = c.reduce((a, b)=> a + b, 0)/b
    let num = 0

    c.map((item)=>{
        if(item > avr){
            num += 1
        }
    })
    
    const d = num / b * 100
    console.log(`${d.toFixed(3)}%`)
}