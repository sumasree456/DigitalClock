const num1=Math.ceil(Math.random()*10)
const num2=Math.ceil(Math.random()*10)
const qsn=document.getElementById("qsn");
const input=document.getElementById("input");
const formans=document.getElementById("form")
const score1=document.getElementById("score");

let score=JSON.parse (localStorage.getItem("score")) ;
if(!score){
    score=0;
}
score1.innerText=`score: ${score}`
qsn.innerHTML=`What is ${num1} multiply by ${num2} ? `;
const crctans=num1*num2;
formans.addEventListener("submit",()=>{

    const userans=+input.value
    if(userans==crctans){
        
        score++
        local();
    }
    else{
        score--
        local();
    }
    
})

function local(){
    localStorage.setItem("score",JSON.stringify(score))
}


