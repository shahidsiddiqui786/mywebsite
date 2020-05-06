  /* javascript----------javascriptz----------javascript---------- javascript-----*/
  var qus=document.querySelector(".qus");
  var ans=document.querySelector(".ans");
  var qus1=document.querySelector("#qus1");
  var ans1=document.querySelector("#ans1");
  var qus2=document.querySelector("#qus2");
  var ans2=document.querySelector("#ans2");
  var qus3=document.querySelector("#qus3");
  var ans3=document.querySelector("#ans3");
  var qus4=document.querySelector("#qus4");
  var ans4=document.querySelector("#ans4");
  var qus5=document.querySelector("#qus5");
  var ans5=document.querySelector("#ans5");
  var icon1=document.querySelector("#icon1");
  var icon2=document.querySelector("#icon2");
  var icon3=document.querySelector("#icon3");
  var icon4=document.querySelector("#icon4");
  var icon5=document.querySelector("#icon5");
  var arr = [];
  for(var i=0;i<5;i++){
  	  arr[i]=0;
    }
  
  //qus1
  qus1.addEventListener("click",function()
  {    
   if(!arr[0]){
   ans1.classList.remove("ans");
   ans1.classList.add("prakatans");
   icon1.classList.remove("fa-plus-circle");
   icon1.classList.add("fa-minus-circle");
   arr[0]=1;
   }
   else{
   	ans1.classList.add("ans");
    ans1.classList.remove("prakatans");
    icon1.classList.remove("fa-minus-circle");
    icon1.classList.add("fa-plus-circle");
    arr[0]=0;
   }
  });
  //qus2
  qus2.addEventListener("click",function()
  {    
   if(!arr[1]){
   ans2.classList.remove("ans");
   ans2.classList.add("prakatans");
   icon2.classList.remove("fa-plus-circle");
   icon2.classList.add("fa-minus-circle");
   arr[1]=1;
   }
   else{
   	ans2.classList.add("ans");
    ans2.classList.remove("prakatans");
    icon2.classList.remove("fa-minus-circle");
    icon2.classList.add("fa-plus-circle");
    arr[1]=0;
   }
  });
  //qus3
  qus3.addEventListener("click",function()
  {    
   if(!arr[2]){
   ans3.classList.remove("ans");
   ans3.classList.add("prakatans");
   icon3.classList.remove("fa-plus-circle");
   icon3.classList.add("fa-minus-circle");
   arr[2]=1;
   }
   else{
   	ans3.classList.add("ans");
    ans3.classList.remove("prakatans");
    icon3.classList.remove("fa-minus-circle");
    icon3.classList.add("fa-plus-circle");
    arr[2]=0;
   }
  });
  //qus4
  qus4.addEventListener("click",function()
  {    
   if(!arr[3]){
   ans4.classList.remove("ans");
   ans4.classList.add("prakatans");
   icon4.classList.remove("fa-plus-circle");
   icon4.classList.add("fa-minus-circle");
   arr[3]=1;
   }
   else{
   	ans4.classList.add("ans");
    ans4.classList.remove("prakatans");
    icon4.classList.remove("fa-minus-circle");
    icon4.classList.add("fa-plus-circle");
    arr[3]=0;
   }
  });
  //qus5
  qus5.addEventListener("click",function()
  {    
   if(!arr[4]){
   ans5.classList.remove("ans");
   ans5.classList.add("prakatans");
   icon5.classList.remove("fa-plus-circle");
   icon5.classList.add("fa-minus-circle");
   arr[4]=1;
   }
   else{
   	ans5.classList.add("ans");
    ans5.classList.remove("prakatans");
    icon5.classList.remove("fa-minus-circle");
    icon5.classList.add("fa-plus-circle");
    arr[4]=0;
   }
  });
