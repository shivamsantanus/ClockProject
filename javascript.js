function clock()
{
    var hours = document.getElementById("hours1")
    var mins = document.getElementById("mins1")
    var secs = document.getElementById("secs1")
    var AMPM = document.getElementsByClassName("AMorPM")[0]
    var time = new Date()

    var a = time.getHours()
    var b = time.getMinutes()
    var c = time.getSeconds()
    var d = "AM"


    if(a > 12 && b > 0)
    {
        a = a - 12 ;
        d = "PM"
    }

    if(a<=9)
    {
      a ="0" + a  
    }


    if(c<=9)
    {
      c ="0" + c  
    }

    if(b<=9)
    {
      b ="0" + b  
    }


    hours.innerHTML=a
    mins.innerHTML=b
    secs.innerHTML=c
    AMPM.innerHTML=d
   
}   

setInterval(clock,1000);




function makediv()
{

var invalue = document.getElementById("wakeupnew")
var value1 = invalue.options[invalue.selectedIndex].text;
document.getElementById("wakee").innerHTML = "Wake Up Time : " + value1;

var invalue1 = document.getElementById("lunchnew")
var value2 = invalue1.options[invalue1.selectedIndex].text;
document.getElementById("lunchh").innerHTML = "Lunch Time : "+ value2;

var invalue2 = document.getElementsByClassName('time12')[0]
var value3 = invalue2.options[invalue2.selectedIndex].text
document.getElementById("napp").innerHTML = "Nap Time : " + value3;

var invalue3 = document.getElementsByClassName('time13')[0]
var value4 = invalue3.options[invalue3.selectedIndex].text
document.getElementById("nightt").innerHTML = "Night Time : " + value4;
}

function settime()
{
  var z = document.getElementById("lunchnew").value;
  var y = new Date().getHours();

  var x = document.getElementById("wakeupnew").value;
  var k = document.getElementsByClassName("time12")[0].value;
  var n = document.getElementsByClassName("time13")[0].value

  if (z == y)
  {
      document.getElementsByClassName("rightgrid3")[0].style.backgroundImage = "url('./img/Group5183.svg')"
      document.getElementsByClassName("rightgrid2")[0].innerText = "LET'S HAVE SOME LUNCH"
      document.getElementsByClassName("morning")[0].innerText = " GOOD AFTERNOON !! TAKE SOME SLEEP"
      // document.getElementsByClassName("llunch")[0].innerText = ""
  }

  if (x == y)
  {
    document.getElementsByClassName("rightgrid3")[0].style.backgroundImage = "url('./img/Group\ 5183-1.svg')"
    document.getElementsByClassName("rightgrid2")[0].innerText="GRAB SOME HEALTHY BREAKFAST"
    document.getElementsByClassName("morning")[0].innerText = "GOOD MORNING!! WAKE UP !!"
  }

  if (k == y)
  {
    document.getElementsByClassName("rightgrid3")[0].style.backgroundImage = "url('./img/goodeve.png')"
    document.getElementsByClassName("rightgrid2")[0].innerText="STOP YAWNING , GET SOME TEA.. IT'S JUST EVENING"
    document.getElementsByClassName("morning")[0].innerText = "GOOD EVENING"
  }

  if(n == y)
  {
    document.getElementsByClassName("rightgrid3")[0].style.backgroundImage = "url('./img/godmode.svg')"
    document.getElementsByClassName("rightgrid2")[0].innerText="CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementsByClassName("morning")[0].innerText = "GOOD NIGHT"
  }

  makediv()

}
