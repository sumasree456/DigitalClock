const hours1=document.getElementById("hours")
const minutes1=document.getElementById("minutes")
const seconds1=document.getElementById("seconds")
const ampm1=document.getElementById("ampm")
function clock(){
    let hrs=new Date().getHours()
    let mins=new Date().getMinutes()
    let secs =new Date().getSeconds()
    let ampm="AM"

    

    if (hrs>12){
        hrs=hrs-12
        ampm="PM"
    }

    hrs = hrs<10 ? "0"+ hrs : hrs;
    hours1.innerHTML=hrs
    minutes1.innerHTML=mins
    seconds1.innerHTML=secs
    
    
    ampm1.innerHTML=ampm
    setTimeout(()=>{
        clock()
    },1000)

}
clock()
