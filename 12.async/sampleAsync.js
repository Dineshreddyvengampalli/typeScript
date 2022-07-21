console.log('this is sequential 01');
setTimeout(function () {
    console.log("this is from async function"); // executes after 2 seconds
}, 2000);
console.log("this is from sequential execution"); // in the mean time this statement executes
