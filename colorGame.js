
//defining all variables
let colors = genRGB(6);
let numSquares = 6;
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("color-display");
let msgDisplay = document.querySelector("#msg");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


//looping through mode buttons to add function
for(let i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
        //adds highlight to selected button
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        //picks number of squares to show depending on the mode
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        // if this ^ is=to this ^  do this^^   else ^ do this ^^
        reset();
    });
}
function reset(){
    //adds rgb profiles to the "colors" array
    colors = genRGB(numSquares);
    //picks a color from colors array for the player to guess
    pickedColor = pickColor();
    //updates header to show the new picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    msgDisplay.textContent = "";
    //adds new colors to the the squares
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
//adding reset function to the reset button
resetButton.addEventListener("click", reset);

//adding the color to guess to the div
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
};
//returns a random color from the colors array
function pickColor(){
    //store a random index in a var
    let random = Math.floor(Math.random() * colors.length);
    //return that index color 
    return colors[random];
};
//generates a list of rgb colors based on the num var
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
};
//this function makes a usable rgb string to make a color
function randomColor(){
    //pick "red" from 0 -> 255
    let red = Math.floor(Math.random()*256);
    //pick "green" from 0 -> 255
    let green = Math.floor(Math.random()*256);
    //pick "blue" from 0 -> 255
    let blue = Math.floor(Math.random()*256);
    //construct string to match rgb format
    return "rgb("+red+", "+green+", "+blue+")";
};