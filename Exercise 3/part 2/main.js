// select text (string)

let text = 'just do it'

// this function search and return final characters


function finalChar(string){
    let existenceText = string.length;
    if (existenceText == 0){
        return "string has zero lenth";
    }
    else{
        return string.slice(-1);
    }
    
}


// set input variabls(my text)

console.log(finalChar(text));