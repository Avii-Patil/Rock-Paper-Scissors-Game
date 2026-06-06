let userScorecount = 0;
let compScorecount = 0;

const scoreMarks = document.querySelector("#ScoreMarks");
const reset = document.querySelector("#reset");

let userScore = document.querySelector("#userResultHeading");
let compScore = document.querySelector("#compResultHeading");
console.log(scoreBoard);

let option = document.querySelectorAll(".option");

const randomChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);

    let compchoice = choices[idx];

    // console.log("Computer Selects = " + compchoice);
    return compchoice;
}

const result = (userchoice, compchoice) => {
    let winner=null;
    if(userchoice === compchoice){
        return winner;
    }
    else if(userchoice === "rock"){
        winner = compchoice === "paper"? false:true;
    }
    else if(userchoice === "paper"){
        winner = compchoice === "scissors"? false:true;
    }
    else if(userchoice === "scissors"){
        winner = compchoice === "rock"? false:true;
    }
    else{
        // console.log("Some Error Occurs Try Again");
    }
    return winner;
}

const chooseWinner = (winner,userchoice,compchoice) => {
        if(winner === true){
            // console.log(`You Won! Your ${userchoice} Beats Computers ${compchoice}`);
            scoreMarks.innerText = `You Won! Your ${userchoice} Beats Computers ${compchoice}`;
            scoreMarks.style.backgroundColor = "green";
            userScorecount++;
            userScore.innerText = userScorecount;
        }
        else if(winner === false){
            // console.log(`You Won! Computer ${compchoice} Beats Your ${userchoice}`);
            scoreMarks.innerText = `You Lost!
             Computer ${compchoice} Beats Your ${userchoice}`;
            scoreMarks.style.backgroundColor = "red";
            compScorecount++;
            compScore.innerText = compScorecount;
        }
        else{
            // console.log("Its An Draw! Play Again");
            scoreMarks.innerText = "Its An Draw! Play Again";
            scoreMarks.style.backgroundColor = "black";
        }
}

option.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        let userchoice = choice.getAttribute("id");
        // console.log("You Selects = " + userchoice);
        let compchoice = randomChoice();

        let winner = result(userchoice, compchoice);

        chooseWinner(winner,userchoice,compchoice);

    })
});



reset.addEventListener("click", ()=>{
    userScorecount=0;
    compScorecount=0;

    compScore.innerText = 0;
    userScore.innerText = 0;
    scoreMarks.innerText = "Select An Option To Play";
    scoreMarks.style.backgroundColor = "black";
})

