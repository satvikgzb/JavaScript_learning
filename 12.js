
let a= prompt('enter your age:')
a= Number.parseInt(a)
console.log(typeof a)
if(a<0){
    alert('this is an invalid age')
}
else if (a<9){
    alert('you are a kid')
}
else if (a<18 && a>=9){
    alert('still a kid')
}
else if (a>18 && a<100){
    alert('you are adult')
}
else{
    alert('you are dead')
}