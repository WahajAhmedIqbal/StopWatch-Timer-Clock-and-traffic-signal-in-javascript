var interval1;
function startimer(){
    interval1 = setInterval(timer, 1000);
}
function timer(){
    var date = new Date().toLocaleTimeString();
    document.getElementById('demo').innerHTML = date;
}
function stoptimer(){
    clearInterval(interval1)
}
// ////////////////////////////////////////////// timer ////////////
var indrerval2;
var counter = 0;
var timelift = parseInt(prompt("Enter num"));
function convertsec(s)
    {
        var min = Math.floor(s / 60);
        var sec = s % 60;
        return min +  ":" + sec;
    }
var intervel2 = setInterval(timeIt , 1000);
function timeIt()
    {
        counter++;
        document.getElementById('timer').innerHTML = convertsec((timelift - counter));
        if(counter == timelift)
        {
            clearInterval(intervel2);
            document.getElementById('paras').innerHTML = "<h2>time over</h2>";
        }
    }
////////////////////////////////////// stop watch///////////////
var intervel3;
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
            
           
            
            document.getElementById("display").innerHTML = hours + ':' + minuts + ':' + sec;
            
    }
        
        
        function startwatch()
        {
            intervel3 = setInterval(StopWatch , 10);
        }
        function stopwatch()
        {
        clearInterval(intervel3);
    }
    function resetwatch()
    {
        document.getElementById('display').innerHTML = "00:00:00";

    }