var btn=document.getElementById("btn");
var timeBtn=document.getElementById("btn22");

var date= new Date();
var hour= date.getHours();
var min= date.getMinutes();
var sec= date.getSeconds();


function dispTime(){

    if(hour>12){
    document.getElementById("disp").innerHTML=" "+ (hour-12)+" : "+min + " PM";
    }
    if(min<10)
    {
        // document.getElementById("disp").innerHTML= hour+ ": 0" + min;

        
    }

    else
    { 
        // document.getElementById("disp").innerHTML=" "+ hour+": "+min;
    }   
}
var actualMonth= date.getMonth()+1;
function dispDate()
{
    document.getElementById("disp22").innerHTML= date.getDate() + "-" + actualMonth+"-"+date.getFullYear();
}

btn.addEventListener("click",dispTime);
btn22.addEventListener("click",dispDate);
