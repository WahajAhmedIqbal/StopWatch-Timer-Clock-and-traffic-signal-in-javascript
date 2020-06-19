function maincolor(a)
{
    if(a == 'red')
        {
        document.getElementById('greengreen').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = '';
        document.getElementById('redred').style.backgroundColor = 'red'
        }
    else if(a == 'yellow')
    {
         document.getElementById('redred').style.backgroundColor = '';
        document.getElementById('greengreen').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = 'yellow';
    }
    else if(a == 'green')
    {
        document.getElementById('redred').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = '';
        document.getElementById('greengreen').style.backgroundColor = 'green';
    }
}
var interval2;
var count = 0;
function start()
{
    var cnt = count++
    console.log("beep");
    console.log(count);
    if(cnt ==  1)
    {
        document.getElementById('greengreen').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = '';
        document.getElementById('redred').style.backgroundColor = 'red'
    }
    else if( cnt == 2)
    {
        document.getElementById('redred').style.backgroundColor = '';
        document.getElementById('greengreen').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = 'yellow';
    }
    else if(cnt == 4)
    {
        document.getElementById('redred').style.backgroundColor = '';
        document.getElementById('yellowyellow').style.backgroundColor = '';
        document.getElementById('greengreen').style.backgroundColor = 'green';
    }
    else if(cnt == 5)
    {
        count =  0;    
    }
}

function automatic()
    {
        interval2 = setInterval(start , 1000);
    }
function clr()
{
            clearInterval(interval2);
}