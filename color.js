let colors = genRGB(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("color-display");
let msgDisplay = document.querySelector("#msg");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let softBtn = document.querySelector("#soft-btn");
let hardBtn = document.querySelector("#hard-btn");

softBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    softBtn.classList.add("selected");
    
    colorDisplay.textContent = pickedColor;
});
hardBtn.addEventListener("click", function(){
    softBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    
});

resetButton.addEventListener("click", function(){
    //generate all new colors
    colors = genRGB(6);
    //pick a new color from arr
    pickedColor = pickColor();
    //change colorDisplay to match new picked color
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New Colors";
    //change the color of all the squares
    for(let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
    }
});

colorDisplay.textContent = pickedColor;
//adding init colors to the squares
for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    //adding click listeners to all of the squares
    squares[i].addEventListener("click", function(){
        //grab color of the picked square
        let guess = this.style.backgroundColor;
        //compare the color to the pickedColor var
        if(guess === pickedColor){
            msgDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again";
            h1.style.backgroundColor = pickedColor;
            winningColors(guess);
        }else{
            this.style.backgroundColor = "#232323";
            msgDisplay.textContent = "Try Again";
        }
    });
}
// function to change all the colors to the picked color when you win
function winningColors(color){
    //loop through all the squares
    for(let i=0;i<squares.length;i++){
    //change all colors to match the picked color
    squares[i].style.backgroundColor = color;   
    }
   
}

function pickColor(){
    //store a random index in a var
    let random = Math.floor(Math.random() * colors.length);
    //return that index color 
    return colors[random];
}

function genRGB(num){
    //make arr
    let arr = [];
    //add num random colors
    for(let i=0;i<num;i++){
      //get random color and push into arr
      arr.push(randomColor());
    }
    //return an arr with num ammount of colors
    return arr;
}

function randomColor(){
    //pick "red" from 0 -> 255
    let red = Math.floor(Math.random()*256);
    //pick "green" from 0 -> 255
    let green = Math.floor(Math.random()*256);
    //pick "blue" from 0 -> 255
    let blue = Math.floor(Math.random()*256);
    //construct string to match rgb format
    return "rgb("+red+", "+green+", "+blue+")";
}