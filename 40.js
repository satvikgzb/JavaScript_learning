let arr = [1,2,3,4,5]

let fun = (a,b) =>{
    return a+b
}


let arr2 = arr.reduce(fun)
console.log('arr2 is ',arr2)



let arr3 = arr.reduce((c,d)=>{
    return c+d
})
console.log('arr3 is ',arr3)



let arr4 = arr.reduce((e,f)=>{
    return e*f
})
console.log('arr4 is ',arr4)