//defining variables
  var date,h,m,s,zoom,clock,i=5,enable=true,suffix="AM",parastatus=false;
  var clockstatus=true;
// getting control
   var clock = document.getElementById("digitalclock");
   var clock2 =document.getElementById("canvas");
   var suffix = document.getElementById("suf");
   var zoom_in = document.getElementById("zoom_in");
   var zoom_out = document.getElementById("zoom_out");
   var zoom = document.getElementById("zoom");
   var para = document.getElementById("para");
   var digital = document.getElementById("digital");
   var analog = document.getElementById("analog");
   var format = document.getElementById("formatenable");
   var paratext = document.getElementById("paratext");
   var body = document.getElementById("bodyback");
   var defaultT = document.getElementById("defaultText");
   var sidebar = document.getElementById("sidebar");
   var navbar = document.getElementById("navB");

/////**********************digital clock formatting**************************//////   
  //defining current time format24
       function setTime() {
        if(enable==true){
        date = new Date();
        h= date.getHours();
        m= date.getMinutes();
        s= date.getSeconds();
        h = updateTime(h);
        m = updateTime(m);
        s = updateTime(s);
        clock.innerText = h + " : " + m + " : " +s;
         setTimeout(function(){ setTime() }, 500);
       }
         }
  //defining current time format12
      function format12setTime(){
        if(enable==false){
        date = new Date();
        h= date.getHours();
        m= date.getMinutes();
        s= date.getSeconds();
        h = updateTime(h);
        m = updateTime(m);
        s = updateTime(s);
            changeformat();
        clock.innerText = h + " : " + m + " : " + s + " " +suffix;
        setTimeout(function(){ format12setTime() }, 500);
        }
      }
  // for 24 hour clock format
     function format24(){
       //starting clock
        enable=true;
        setTime();
     }
  //for 12 hour clock format 
     function format12() {
       enable=false;
       format12setTime();
     }
  // changing format function
    function changeformat(){
      if(h>12){
        h=h-12;
        suffix="PM";
      }
      else
      {
        suffix="AM";
      }
    }
  //adding 0 before single digit time
    function updateTime(t) {
      if (t < 10)
        return "0" + t;
      else 
        return t;
    }
  //resizing of clock
      zoom_in.addEventListener("click",function(){
        clock.style.fontSize=i+"vw";
        if(i<15)
          i++;
        else
          alert("can't zoom in furthur");
      });
      zoom_out.addEventListener("click",function(){
        clock.style.fontSize=i+"vw";
        if(i>2)
          i--;
        else
          alert("can't zoom out furthur");
     });
  // paragraph shower
     para.addEventListener("click",function(){
        if(parastatus==false)
        {
        paratext.style.opacity="1";
           parastatus=true;
         }
        else{
           paratext.style.opacity="0";
           parastatus=false;
        } 
     }); 
  // digital clock starter
    function digitalClock() {

    //starting clock
        setTime();
      clock.classList.remove("disableD");
      format.style.opacity="1";
      zoom.classList.remove("resizer");
      body.classList.add("bodybackground1");
      defaultT.classList.add("defaultOff");
      sidebar.style.opacity="1";
      navbar.classList.add("navColor1");
    }  
    function disableDigitalClock(){
      clock.classList.add("disableD");
      zoom.classList.add("resizer");
      body.classList.remove("bodybackground1");
      format.style.opacity="0";
      navbar.classList.remove("navColor1");
    }
/*******************Drawing analog clock and operating***************************/

  // defining basic canvas
    var canvas = document.getElementById("canvas");
    var draw = canvas.getContext("2d");
    var radius = canvas.height / 2;
    draw.translate(radius, radius);
    radius = radius * 0.90;
  // drawingface
   function drawFace(draw, radius) {
    var grad;
    draw.beginPath();
    draw.arc(0, 0, radius, 0, 2 * Math.PI);
    draw.fillStyle = 'violet';
    draw.fill();
    grad = draw.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'orange');
    grad.addColorStop(1, '#333');
    draw.strokeStyle = grad;
    draw.lineWidth = radius*0.1;
    draw.stroke();
    draw.beginPath();
    draw.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    draw.fillStyle = 'indigo';
    draw.fill();
   }
  //drawing number on face
   function drawNumbers(draw, radius) {
    var ang;
    var num;
    draw.font = radius * 0.15 + "px arial";
    draw.textBaseline = "middle";
    draw.textAlign = "center";
    for(num = 1; num < 13; num++){
      ang = num * Math.PI / 6;
      draw.rotate(ang);
      draw.translate(0, -radius * 0.85);
      draw.rotate(-ang);
      draw.fillText(num.toString(), 0, 0);
      draw.rotate(ang);
      draw.translate(0, radius * 0.85);
      draw.rotate(-ang);
    }
    }
  //drawing hand function
   function drawHand(draw, pos, length, width) {
    draw.beginPath();
    draw.lineWidth = width;
    draw.lineCap = "round";
    draw.moveTo(0,0);
    draw.rotate(pos);
    draw.lineTo(0, -length);
    draw.stroke();
    draw.rotate(-pos);
   }
  // adding time to hand
   function drawTime(draw, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(draw, hour, radius*0.5, radius*0.07);
    //minute
    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(draw, minute, radius*0.8, radius*0.07);
    // second
    second = (second*Math.PI/30);
    drawHand(draw, second, radius*0.9, radius*0.02);
   }
  //drawing clock
   function drawClock() {
    draw.arc(0, 0, radius, 0 , 2 * Math.PI);
    draw.fillStyle = "purple";
    draw.fill();
    drawFace(draw, radius);
    drawNumbers(draw, radius);
    drawTime(draw, radius);
    setTimeout(function(){ drawClock() }, 500);
    }
  // analog clock starter
    function analogClock() {

    //starting clock
        drawClock();
      clock2.classList.remove("disableAnalog");
      clock2.style.opacity="1";
      body.classList.add("bodybackground2");
      defaultT.classList.add("defaultOff");
      sidebar.style.opacity="1";
    }  
    function disableAnalogClock(){
      clock2.classList.add("disableAnalog");
      body.classList.remove("bodybackground2");
    }
//////////******************................************************/////////////
  //checker
 digital.addEventListener("click",function(){
     digitalClock();
     disableAnalogClock();
 });
  analog.addEventListener("click",function(){
    analogClock();
    disableDigitalClock();
     });
 //bydefault
 
