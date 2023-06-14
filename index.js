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

/*
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
*/

/*
// 4-5
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch4/4-5.txt').toString().trim().split('\n')
const c = b[0].split(' ').map(Number)
const max = Math.max(...c)
console.log(c.reduce((a, b)=>a + (b / max * 100), 0)/a)
*/

/*
// 5-1
const fs = require('fs')
const [a, b] = fs.readFileSync('./input/ch5/5-1.txt').toString().trim().split('\n')
const c = b.split('').map(Number)
let answer = 0

for(let d of c){
    answer += d
}
console.log(answer)
*/

/*
// 5-2
let fs = require('fs');
let input = fs.readFileSync('./input/ch5/5-2.txt').toString().split('\n');
let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
    let [r, s] = input[i].split(" ");
    let result = "";
    
    for (let j = 0; j <= s.length; j++) {
        result += s.charAt(j).repeat(r);
    }
  console.log(result);
}
*/

/*
// 5-3.
const fs = require('fs')
const input = fs.readFileSync('./input/ch5/5-3.txt').toString().trim().split('\n')
const [a, b] = input[0].split(' ')

const c = Number(a.split('').reverse().join(''))
const d = Number(b.split('').reverse().join(''))

console.log(Math.max(c, d))
*/

/*
// 5-4
const fs = require('fs')
let [a, ...b] = fs.readFileSync('./input/ch5/5-4.txt').toString().trim().split('\n')
let summary = 0
const check = (data) => {
    let setData = new Set(data[0])
    
    for(let i = 0; i < data.length -1; i += 1){
        if(data[i] !== data[i + 1]){
            if(setData.has(data[i + 1])){
                return false
            }else {
                setData.add(data[i + 1])
            }
        }
    }
    return true
}

a = Number(a)

for(let i = 0; i <= a - 1; i += 1){
    let data = b[i]
    
    if(check(data)) {
        summary += 1
    }
}
console.log(summary)
*/

/*
// 5-5
const fs = require('fs')
const input = fs.readFileSync('./input/ch5/5-5.txt').toString().split('\n')
const line = input[0].split(' ').filter(item => item !== '')
console.log(line.length)
*/

/*
// 6-1.
const fs = require('fs')
const input = fs.readFileSync('./input/ch6/6-1.txt').toString().trim().split('\n')
const line = input[0].split(' ').map(Number)
const upper = line.sort((a, b) => a - b).join(' ')
console.log(upper)
*/

/*
// 6-2
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch6/6-2.txt').toString().trim().split('\n').map(Number)
b.sort((a, b)=> a - b).map((item) => console.log(item))
*/

/*
// 6-3
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch6/6-3.txt').toString().trim().split('\n').map(Number)
let answer = ''

b.sort((a, b) => a - b)
for(let c of b){
    answer += c + '\n'
}
console.log(answer)
*/

/*
// 6-4
const fs = require('fs')
const [a, b] = fs.readFileSync('./input/ch6/6-4.txt').toString().trim().split('\n')
const [c, d] = a.split(' ').map(Number)
const array = b.split(' ').map(Number).sort((a, b)=> a - b)

const answer = array.filter((_, i)=> i === d - 1)

console.log(...answer)
*/

/*
// 7-1
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch7/7-1.txt').toString().trim().split('\n')
const array = b.map((item)=>item.split(' ').map(Number))
const compare = (a, b) => {
    if(a[0] !== b[0]){
        return a[0] - b[0]
    } else return a[1] - b[1]
}
const answer = array.sort(compare)
let ans =''
for(let c of answer){
    ans += c[0] + ' ' + c[1] + '\n'
}
console.log(ans)
*/

/*
// 7-2
let fs = require('fs');
let input = fs.readFileSync('./input/ch7/7-2.txt').toString().split('\n');
let n = Number(input[0]);
let data = [];
for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    data.push([x, y]);
}
function compare (a, b) {
if (a[1] != b[1]) return a[1] - b[1];
    else return a[0] - b[0];
}
data.sort(compare);
let answer = "";
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);
*/

/*
// 7-3
let fs = require('fs')
let [a, ...b] = fs.readFileSync('./input/ch7/7-3.txt').toString().trim().split('\n')
let arr = [...new Set(b)]
arr.sort((a, b) => {
    if(a.length !== b.length) {
        return a.length - b.length
    } else {
        if(a < b) return -1
        else if(a > b) return 1
        else return 0
    }
})

for(let c of arr){
    console.log(c)
}
*/

/*
// 8-1
let fs = require('fs')
let [a, ...b] = fs.readFileSync('./input/ch8/8-1.txt').toString().trim().split('\n')
let c = b[0].split(' ').map(Number)
let d = [...new Set(c)]
let myMap = new Map()
let answer = ''

d.sort((a, b) => a - b)

for(let i = 0; i < d.length; i += 1){
    myMap.set(d[i], i)
}

for(let i of c) {
    answer += myMap.get(i) + ' '
}

console.log(answer)
*/

/*
// 8-2
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch8/8-2.txt').toString().trim().split('\n')
const c = b.map((item)=>item.split(' '))
let answer = ''

c.sort((a, b) => {
    if(a[0] !== b[0]){
        return Number(a[0]) - Number(b[0])
    }
})

const d = c.map((item) => item.join(' '))

for(let e of d){
    answer += e + '\n'
}

console.log(answer)
*/

/*
// 8-3
const fs = require('fs')
const input = fs.readFileSync('./input/ch8/8-3.txt').toString().trim().split('\n')
const a = input[0].split('').sort((a, b) => b - a).join('')

console.log(a)
*/

/*
// 9-1
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch9/9-1.txt').toString().trim().split('\n')
const c = a.split(' ').map(Number)
let cost = c[1]
let answer = 0

while (cost > 0) {
    for(let i = b.length -1; i >= 0; i -= 1){
        if(b[i] <= cost){
            cost -= b[i]
            answer += 1
            break
        }
    }
}
console.log(answer)
*/

/*
// 9-2
const fs = require('fs')
const [a, ...b] = fs.readFileSync('./input/ch9/9-2.txt').toString().trim().split('\n')
const c = b[0].split(' ').map(Number).sort((a, b) => a - b)
let answer = 0
let e = 0
for(let d of c){
    e += d
    answer += e
}
console.log(answer)
*/

/*
// 9-3
let fs = require('fs')
let input = fs.readFileSync('./input/ch9/9-3.txt').toString().trim().split('\n')
let array = input[0].split('-')
let answer = 0

for(let i = 0; i < array.length; i += 1){
    let cur = array[i].split('+').map(Number).reduce((a, b) => a + b, 0)
    if(i === 0) {
        answer += cur
    }else {
        answer -= cur
    }    
}
console.log(answer)
*/

/*
// 10-1
const fs = require('fs')
const input = fs.readFileSync('./input/ch10/10-1.txt').toString().trim().split('\n')
let a = Number(input[0])
let answer = 0
let flag = false

while (a >= 0) {
    if(a === 0 || a % 5 === 0){
        a = a / 5
        answer += parseInt(a)
        console.log(answer)
        flag = true
        break
    }
    a -= 3
    answer += 1
}
if(!flag) {
    console.log(-1)
}
*/

/*
// 10-2
let fs = require('fs')
let input = fs.readFileSync('./input/ch10/10-2.txt').toString().trim().split('\n')
let [a, b] = input[0].split(' ').map(Number)
let answer = 1
let flag = false

while (a <= b) {
    if(a === b){
        flag = true
        break
    }
    if(b % 2 === 0) {
        b = parseInt(b / 2)
    }else if(b % 10 === 1){
        b = parseInt(b / 10)
    }else break
    answer += 1
}

console.log(flag ? answer : -1)
*/

/*
// 10-3
let fs = require('fs')
let input = fs.readFileSync('./input/ch10/10-3.txt').toString().trim().split('\n')
let number = Number(input[0])
let answer = 0
let sum = 0

while (sum <= number) {
    answer += 1
    sum += answer
}
console.log(answer - 1)
*/

/*
// 10-4
let fs = require('fs')
let input = fs.readFileSync('./input/ch10/10-4.txt').toString().trim().split('\n')
let test = Number(input[0])
let line = 1

for(let tc = 0; tc < test; tc += 1){
    let n = Number(input[line])
    let arr = []
    let count = 0
    let minValue = 100001

    for(let i = line + 1; i <= line + n; i += 1){
        let data = input[i].split(' ').map(Number)
        arr.push(data)
    }

    arr.sort((a, b) => a[0] - b[0])
    
    for(let [x, y] of arr) {
        if(y < minValue) {
            minValue = y
            count += 1
        }
    }
    console.log(count)
    line += n + 1
}
*/

/*
// 11-1
let fs = require('fs')
let [a, b, c] = fs.readFileSync('./input/ch11/11-1.txt').toString().trim().split('\n')
let dist = b.split(' ').map(Number)
let cost = c.split(' ').map(Number)
let minCost = cost[0]
let answer = BigInt(0)

for(let i = 0; i < a; i += 1){
    minCost = Math.min(minCost, cost[i])
    cost[i] = minCost
}

for(let i = 0; i < a - 1; i += 1){
    answer += BigInt(dist[i]) * BigInt(cost[i])
}

console.log(String(answer))
*/

/*
// 11-2
let fs = require('fs')
let input = fs.readFileSync('./input/ch11/11-2.txt').toString().trim().split('\n')
let n = Number(input[0])
let arr = []
let cnt = 1
let cur = 0

for(let i = 1; i <= n; i += 1){
    let a = input[i].split(' ').map(Number)
    arr.push(a)
}

arr.sort((a, b) => {
    if(a[1] !== b[1]){
        return a[1] - b[1]
    }else {
        return a[0] - b[0]
    }
})

for(let i = 1; i < n; i += 1){
    if(arr[cur][1] <= arr[i][0]) {
        cur = i
        cnt += 1
    }
}
console.log(cnt)
*/

// 11-3
let fs = require('fs')
let [a, ...b] = fs.readFileSync('./input/ch11/11-3.txt').toString().trim().split('\n')
const solution = (b) => {
    let arr = b[0].split(' ').map(Number)
    let arrows = Array.from({length:1000000}, () => 0)
    let answer = 0

    for(let i of arr) {
        if(arrows[i]) {
            arrows[i] -= 1
            arrows[i - 1] += 1
        }else {
            answer += 1
            arrows[i - 1] += 1
        }
    }
    return answer
}
console.log(solution(b))

