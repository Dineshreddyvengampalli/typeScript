
function add<T>(a:T,b:T){
    console.log(a,b)
}

add<number>(1,2)
function array<T>(para:T[]){
    let new_arr:T[] = []
    for (let i=0;i<para.length;i++){
        new_arr.push(para[i])
    } 
    console.log(new_arr)
}

array<number>([1,2,3,4])
array<string>(['hai','hello'])