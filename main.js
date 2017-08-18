function find_index(arr,item){
    return arr.map((value,index,arr)=>value===item?index:undefined).join('').split('').join(',');
}

console.log(find_index([1,3,7,1,4],1));