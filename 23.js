let marks = {
    harry:98,
    satvik:100,
    rohan:50,
    aakash :10
}


for ( let i = 0; i < Object.keys(marks).length; i++ ){
    console.log('marks of ', Object.keys(marks)[i] , ' are ', marks[Object.keys(marks)[i]])
}

for ( n in marks){
    console.log('marks of ',n,' are ',marks[n])
}