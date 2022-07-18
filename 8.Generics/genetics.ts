function sort<T>(arr:T[]){
    let temp
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        
}
console.log(arr)
}

sort<number>([8,7,9,0,0,4,4,5])
sort<string>(['hai','dinsh'])

function array<T>(para:T[]){
    let new_arr:T[] = []
    for (let i=0;i<para.length;i++){
        new_arr.push(para[i])
    } 
    console.log(new_arr)
}

array<number>([1,2,3,4])
array<string>(['hai','hello'])