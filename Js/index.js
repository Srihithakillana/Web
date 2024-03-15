let userScore=0;
let compScore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user_score");

const compScorePara=document.querySelector("#comp_score");
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText =userScore;
    
        msg.innerText=`You Win your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
   
        msg.innerText=`You Lose ${compChoice} beats you ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const genCompChoice=()=>{
const options=['paper','scissors','rock'];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{

    msg.innerText="Game was a DRAW.Play again!!";
    msg.style.backgroundColor="#081b30";
}
const playGame=(userChoice)=>{

const compChoice=genCompChoice();




if(userChoice==compChoice){
    drawGame();
}
else{
    let userWin=true;
    if(userChoice=="rock"){
        userWin=compChoice=="paper"?false:true;
    }
    else if(userChoice=="paper"){
        userWin=compChoice=="scissors"?false:true; 
    }
    else if(userChoice=="scissors"){
        userWin=compChoice=="rock"?false:true;
    }
    showWinner(userWin,compChoice,userChoice);
}
}
choices.forEach((choice)=>{ 
   
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
   
        playGame(userChoice);
    })
});