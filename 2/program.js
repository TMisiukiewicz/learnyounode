var sum = 0;
process.argv.forEach((val, index)=> {
    if(index >= 2) {
        sum = sum + parseInt(val);
    }
});
console.log(sum);