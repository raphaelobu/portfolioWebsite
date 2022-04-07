
elem1Func();


function elem1Func() {
  document.getElementById("btn1").classList.add("active");
  document.getElementById("btn2").classList.remove("active");
  document.getElementById("btn3").classList.remove("active");
  document.getElementById("btn4").classList.remove("active");
  document.getElementById("mechanicalEngineering").style.display="block";
  document.getElementById("softwareEngineering").style.display="none";
  document.getElementById("roboticsMechatronics").style.display="none";
  document.getElementById("otherStuff").style.display="none";
  }

function elem2Func() {
  document.getElementById("btn1").classList.remove("active");
  document.getElementById("btn2").classList.add("active");
  document.getElementById("btn3").classList.remove("active");
  document.getElementById("btn4").classList.remove("active");
  document.getElementById("mechanicalEngineering").style.display="none";
  document.getElementById("softwareEngineering").style.display="block";
  document.getElementById("roboticsMechatronics").style.display="none";
  document.getElementById("otherStuff").style.display="none";
  }
  
function elem3Func() {
  document.getElementById("btn1").classList.remove("active");
  document.getElementById("btn2").classList.remove("active");
  document.getElementById("btn3").classList.add("active");
  document.getElementById("btn4").classList.remove("active");
  document.getElementById("mechanicalEngineering").style.display="none";
  document.getElementById("softwareEngineering").style.display="none";
  document.getElementById("roboticsMechatronics").style.display="block";
  document.getElementById("otherStuff").style.display="none";
  }
  
function elem4Func() {
  document.getElementById("btn1").classList.remove("active");
  document.getElementById("btn2").classList.remove("active");
  document.getElementById("btn3").classList.remove("active");
  document.getElementById("btn4").classList.add("active");
  document.getElementById("mechanicalEngineering").style.display="none";
  document.getElementById("softwareEngineering").style.display="none";
  document.getElementById("roboticsMechatronics").style.display="none";
  document.getElementById("otherStuff").style.display="block";
  }
