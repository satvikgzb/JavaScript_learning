let a = [23,43,32,266,76]
b = a.map((value)=>{
    console.log(value*value)
    return value*value
})
console.log(b)
console.log(a)

c= a.map((value,index,array)=>{
    console.log(value*value,index,array)
    return ( value+index)
})
console.log(c)