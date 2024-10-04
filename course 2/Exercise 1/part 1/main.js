const square = document.getElementById("square");
document.addEventListener("keydown",press)


function press(event){
    if(event.keyCode == 49){
        square.style.background = "red";
        //shapeColor = square.style.background;
    }
// else if(event.keyCode == 50){
//     square.style.background = "green";
//     currentColor = square.style.background;
// }else if(event.keyCode == 51){
//     square.style.background = "blue";
//     currentColor = square.style.background;
// }
    
}
