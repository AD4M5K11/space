function leftArrowPressed() {
    let canvas = document.getElementById("canvas");
    let element = document.getElementById("ship");
    if (canvas.style.width > 1200 + 'px'){
    element.style.left = parseInt(element.style.left) - 10 + 'px';
    } 
    console.log (element.style.left)
}
function rightArrowPressed() {
    let canvas = document.getElementById("canvas");
    let element = document.getElementById("ship");
    if (canvas.style.width > 110 +'px'){
    element.style.left = parseInt(element.style.left) + 10 + 'px';
    console.log (element.style.left)
    }
} 

function move(event){
    switch (event.keyCode) {
        case 37:
        leftArrowPressed();
        break;

        case 39:
        rightArrowPressed();
        break;
    }
}
function gameLoop(){
    window.addEventListener('keydown', move);
    
}
