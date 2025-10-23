let num=[1,23,4,55,6,23,2]

let b= num.toString()
console.log(typeof b)
console.log(typeof b[2])

let c= num.join(' and ')
console.log(c)
console.log(typeof c)

let d = num.pop()
console.log(num,d)

let e = num.push(9)
console.log('e',num,e)

let f = num.shift()
console.log('f',num,f)

let g  = num.unshift(10)
console.log('g',num,g)

let h= delete(num[1])
console.log('h',num,h)

let num1= ['num',1,3,44,5,66,4]
let num3 = ['num3',34]
let num2 = num.concat(num1,num3)
console.log('i',num2)

let j = [1,2,33,23,223,34,45,66,44,1]
console.log('j',j.sort())

console.log(j.reverse())