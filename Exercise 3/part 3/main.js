function getSelectedString (string , numberOfCharacters){
    
    // create variable for final string
    let selectedString = "";
    // { error
    selectedString = string.replace(" ", "").Slice(0, numberOfCharacters);
    //  }
    return selectedString;
}

    //guide >>  console.log(number("*string*", *Number of characters required*))
console.log(getSelectedString("this example string", 7));