var interval;
function startimer(){
    interval = setInterval(timer, 1000);
}
function timer(){
    var date = new Date().toLocaleTimeString();
    document.getElementById('demo').innerHTML = date;
}
function stoptimer(){
    clearInterval(interval)
}
// ////////////////////////////////////////////// timer ////////////
var counter = 0;
var timelift = parseInt(prompt("Enter num"));
function convertsec(s)
    {
        var min = Math.floor(s / 60);
        var sec = s % 60;
        return min +  ":" + sec;
    }
var intervel = setInterval(timeIt , 1000);
function timeIt()
    {
        counter++;
        document.getElementById('timer').innerHTML = convertsec((timelift - counter));
        if(counter == timelift)
        {
            clearInterval(intervel);
            document.getElementById('paras').innerHTML = "time over";
        }
    }
////////////////////////////////////// stop watch///////////////
var intervel;
var hours = 0;
var minuts = 0;
var sec = 0;

var displaysec = 0;
var displaymin = 0;
var displayhour = 0;


function StopWatch()
    {
        sec++;
        if(sec / 60 === 1)
            {
                sec = 0;
                minuts++;
                
                if(minuts / 60 === 1)
                    {
                        minuts = 0;
                        hours++
                    }
            }
            
            if(sec < 9)
            {
                displaysec = "0" + sec.toString();
                console.log(displaysec);
            }
            else if(sec >=10);
            {
                displaysec = sec;
                console.log(displaysec);

            }
            if(minuts < 10)
            {
                displaymin = "0" + minuts.toString();
            }
            else;
            {
                displaymin = minuts;
            }
            if(hours < 10)
            {
                displayhour = "0" + hours.toString();
            }
            else;
            {
                displayhour = hours;
            }
            
            document.getElementById("display").innerHTML = displayhour + ':' + displaymin + ':' + displaysec;
            
    }
        
        
        function startwatch()
        {
            intervel = setInterval(StopWatch , 100);
        }
        function stopwatch()
        {
        clearInterval(intervel);
    }
    function resetwatch()
    {
        document.getElementById('display').innerHTML = "00:00:00";

    }