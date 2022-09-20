const number1=Math.ceil(Math.random()*10)
const number2=Math.ceil(Math.random()*10)
const qsn=document.getElementById("qsn")
const formanswer=document.getElementById("form")
const score1=document.getElementById("score")

let score=localStorage.getItem("score")
if(!score){
    score=0
}
score1.innerHTML=`score: ${score}`

qsn.innerHTML=`What is ${number1} multiply by ${number2} ?`

const crctanswer=number1*number2

formanswer.addEventListener("submit" ,()=>{

    const usernumber=input.value
    if(usernumber==crctanswer){
        score++
        local();
    }else{
        score--
        local();
    }
})

function local(){
    localStorage.setItem("score",JSON.stringify(score))
}

