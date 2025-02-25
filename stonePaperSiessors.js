let you = 0;
let computer = 0;
const msg = document.querySelector("#msg")
const count1 = document.querySelector("#count1")
const count2 = document.querySelector("#count2")

const showWinner = (result ,userChoice ,compChoice) => {
    if(result === true){
        you++;
        count1.innerText = you;
        msg.innerText = `You Win !! your ${userChoice} Beat ${compChoice}`
        msg.style.backgroundColor ="rgb(4, 255, 4)";
        console.log(`You Win !! your ${userChoice} Beat ${compChoice}`)
    }else {
        computer++
        count2.innerText = computer;
        msg.innerText = `You Lose !! ${compChoice} Beat your ${userChoice}`
        msg.style.backgroundColor ="rgb(255, 0, 0)";
        console.log(`You Lose !! ${compChoice} Beat your ${userChoice}`)
    }
    if(you === computer){
        count1.style.backgroundColor = "rgb(0, 140, 255)"
        count2.style.backgroundColor = "rgb(0, 140, 255)"
    }else if ( you > computer){
         count1.style.backgroundColor = "rgb(4, 255, 4)"
        count2.style.backgroundColor = "rgb(255, 0, 0)"
    }else{
           count1.style.backgroundColor = "rgb(255, 0, 0)"
        count2.style.backgroundColor = "rgb(4, 255, 4)"

    }
}
const drawConditon = () => {
    console.log("Match is Draw !! both have same choices ")
    msg.innerText = "Match is Draw !! both have same choices "
    msg.style.backgroundColor = "rgb(0, 140, 255)";
}
const gencompChoice = () => {
    const choices = ["rock", "paper", "scissor"]
    let choiceIDX = Math.floor(Math.random() * 3)
    console.log("Computer Choice is = ", choices[choiceIDX])
    return choices[choiceIDX]
}
const playGame = (userChoice) => {
    const compChoice = gencompChoice();
    if (userChoice === compChoice) {
        drawConditon()
    } else {
        let result = true;
        if( userChoice === "rock"){
           result = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            result = compChoice === "scissor" ? false : true;
        }else {
            result = compChoice === "rock" ? false : true;
        }
        showWinner(result,userChoice,compChoice)
    }

}

const choices = document.querySelectorAll(".box")
choices.forEach((box) => {
    box.addEventListener("click", () => {
        const userChoice = box.getAttribute("id")
        console.log("Your option is = ", userChoice);
        playGame(userChoice)
    });
});

// Display Mode
let changeMode = document.querySelector("#mode")
let currMode = "light"
changeMode.addEventListener("click", () =>{
    if(currMode === "light"){
        currMode = "Dark";
        document.querySelector("body").style.backgroundColor = "black"
        document.querySelector("body").style.color = "white"
        document.querySelector("#mode").innerText = "switch to light mode"
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white"
        document.querySelector("body").style.color = "black"
        document.querySelector("#mode").innerText = "switch to dark mode"
    }
    console.log(currMode);

})