let a = [1,2,34,44443,33]
let b = a.filter((value)=>{
    return value>10
    
})
console.log(b)

let func = (x) =>{
    return x>10
}
let c = a.filter(func)
console.log(c)