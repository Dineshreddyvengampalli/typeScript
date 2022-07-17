
function add (var1:number,...varx){
    let sum = 0;
    for(let i = 0;i<varx.length;i++){
        sum = sum+varx[i];
        sum = sum+var1;
    }
    console.log(sum);

}
add(1,2,3,4,5);
add(12,1)