const names = ['red', 'blue', 'green'];

names.forEach(name => {
    console.log(name);
});

//cb is a function
const myForEach = (arr, cb) => {
    for(let i = 0; i < arr.length; i++){
        const element = arr[i];
        //calls cb function with input parameter element for each iteration
        cb(element);
    }
};

//variabel is the cb parameter passed into cb function. while variabel => is the callback function
myForEach(names, (variabel) =>{
    console.log(variabel);
});