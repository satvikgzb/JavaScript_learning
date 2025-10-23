let num = [23,43,322,54,2]

let func = (a)=>{
    console.log(a*a)
}
num.forEach(func)

b = num.forEach((element)=>{
    console.log(element*element)
    return element*element   //doesnt return anything
})
console.log(b)
console.log(num)