const hrs=document.getElementById("hours")
const mins=document.getElementById("minutes")
const secs=document.getElementById("seconds")
const ampm=document.getElementById("ampm")


function clock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm1="AM"
    if(h>12){
        h=h-12
        ampm1="PM"
    }

    hrs.innerHTML=h
    mins.innerHTML=m
    secs.innerHTML=s
    ampm.innerHTML=ampm1
    setInterval(() => {
        clock()
    }, 1000);

    
}
clock()