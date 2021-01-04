
time = document.querySelectorAll('.time');
console.log(time);

now = new Date();

setSecound(now.getSeconds());
setMinutes(now.getMinutes());
setHour(now.getHours());

function setSecound(t)
{
    
    if(t>=10)
    {
        time[4].innerHTML=String(t).charAt(0);
        time[5].innerHTML=String(t).charAt(1);
    }
    else{
        time[4].innerHTML='0';
        time[5].innerHTML=String(t).charAt(0);
    }
}
function setMinutes(t)
{
    if(t>=10)
    {
        time[2].innerHTML=String(t).charAt(0);
        time[3].innerHTML=String(t).charAt(1);
    }
    else{
        time[2].innerHTML='0';
        time[3].innerHTML=String(t).charAt(0);
    }
}
function setHour(t)
{
    if(t>=10)
    {
        time[0].innerHTML=String(t).charAt(0);
        time[1].innerHTML=String(t).charAt(1);
    }
    else{
        time[0].innerHTML='0';
        time[1].innerHTML=String(t).charAt(0);
    }
}


function flipclock(index)
{
    time[index].classList.add("active");

    time[index].addEventListener('transitionend', () => {
        
        time[index].classList.remove("active");
      });
      

}

secoundPassed = () =>
{
    
    secound = Number(time[4].innerHTML*10) + Number(time[5].innerHTML);
    minute = Number(time[2].innerHTML*10) + Number(time[3].innerHTML);
    hour = Number(time[0].innerHTML*10) + Number(time[1].innerHTML);

    if(secound>=60)
    {
        
        secound=0; 
        if(minute>=59)
        {
            minute=0;
            
            if(hour>=11)
            {
                hour=0;
            }
            else
            {
                hour+=1;
            }
        }
        else
        {
            minute+=1;
        }
    }
    else
    {
        secound+=1;
    }

    setSecound(secound);
    setMinutes(minute);
    setHour(hour);
}




function flipWholeClock()
{
for(i=0; i<6;i++)
{
    flipclock(i);
    flipclock(i);
}
}



EverySecound = window.setInterval(secoundPassed,1000);
//EverySecoundFlip = window.setInterval(flipWholeClock,900);
