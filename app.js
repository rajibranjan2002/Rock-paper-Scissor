let userScore = 0;
let compScore  = 0;

const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComputerChoice = () => {
    const options = ["rock","paper","scissors"]
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
    //rock , paper ,scissors
}

const drawGamne = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw! play again"
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin , userchioce, compChoice) => {
    if(userWin) {
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You Win! your ${userchioce} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    } else{
       compScore++;
       compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userchioce}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userchioce) => {
    console.log("user choice = ", userchioce);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice = ",compChoice);

    if(userchioce === compChoice){
        //draw game
        drawGamne();
    }else{
            let userWin = true;
            if(userchioce === "rock") {
                // scissor , paper
                userWin = compChoice === "paper" ? false : true;
            }else if  (userchioce === "paper"){
                //rock , scissor
                userWin = compChoice === "scissors"  ? false : true;
            } else {
                //rock , paper
                userWin = compChoice === "rock" ? false : true;
            }

            showWinner(userWin, userchioce, compChoice);
        }
    }




choices.forEach((choice)  => {
   // console.log(choice);
    choice.addEventListener("click", () => {
        const userchioce = choice.getAttribute("id")
        playGame(userchioce);
    })
})