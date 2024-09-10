// merge array :
function addArray(array1,array2){
    //  create new variable
    let all
    // merge arrays with Spread method
    all = [...array1, ...array2];
    return all
}

// input your array 
// guide >>>> console.log(addArray( array2 , array1 ));

console.log(addArray(['jey','nik','sali'],[13,17,18]));