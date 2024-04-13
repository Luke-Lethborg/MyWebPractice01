var toggle_light = true;
var toggle_light_02 = true;

//JQuery
$(document).ready(function(){
  $("h3").click(function(){
    $(this).hide();
  });
});


function myScript_myFunction_01() 
{
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") 
  {
    x.style.display = "block";
  } 
  else 
  {
    x.style.display = "none";
  }
}

function myScript_function_light(sw) 
{
  var pic;
  if (toggle_light === false) 
  {
    pic = "images/pic_bulboff.gif"
    toggle_light = true;
  } 
  else 
  {
    pic = "images/pic_bulbon.gif"
    toggle_light = false;
  }
  document.getElementById('myLightImage').src = pic;
}

function myScript_function_light_02(sw) 
{
  var pic;
  if (toggle_light_02 === false) 
  {
    pic = "images/pic_bulboff.gif"
    toggle_light_02 = true;
  } 
  else 
  {
    pic = "images/pic_bulbon.gif"
    toggle_light_02 = false;
  }
  document.getElementById('myLightImage_02').src = pic;
}

function myScript_multiplication(x,y)
{
  console.log("Called: myScript_multiplication");
  console.log("x * y = " + x * y );
  document.getElementById("myScript_multiplication01").innerHTML = x * y;
  return x * y;
}

function myScript_onload()
{
  //Toggle by body tag
  document.getElementById("myScript_onload_text").innerHTML = "The index.html body has loaded #15";
}

function myScript_dates()
{
//https://www.w3schools.com/js/js_dates.asp
const date_01 = new Date();
const date_02 = new Date("2022-03-25");
const date_03 = new Date("October 13, 2014 11:13:00");
const date_04 = new Date(2018, 11, 24, 10, 33, 30, 0);
const date_05 = new Date(2018, 15, 24, 10, 33, 30);
const date_06 = new Date(2019, 3, 24, 10, 33, 30);
const date_07 = new Date(2018, 5, 35, 10, 33, 30);
const date_08 = new Date(2018, 6, 5, 10, 33, 30);
const date_09 = new Date(2018, 11, 24, 10, 33, 30);
const date_10 = new Date(2018, 11, 24, 10, 33);
const date_11 = new Date(2018, 11, 24, 10);
const date_12 = new Date(2018, 11, 24);
const date_13  = new Date(2018, 11);
const date_14  = new Date(2018);
const date_15  = new Date(99, 11, 24);
const date_16  = new Date(9, 11, 24);
const date_17  = new Date(100000000000);
const date_18  = new Date(-100000000000);
const date_19 = new Date(24 * 60 * 60 * 1000);
const date_20 = new Date(86400000);
const date_21 = new Date(0);

document.getElementById("myScript_dates_date_01").innerHTML = date_01;
document.getElementById("myScript_dates_date_02").innerHTML = date_02;
document.getElementById("myScript_dates_date_03").innerHTML = date_03;
document.getElementById("myScript_dates_date_04").innerHTML = date_04;
document.getElementById("myScript_dates_date_05").innerHTML = date_05;
document.getElementById("myScript_dates_date_06").innerHTML = date_06;
document.getElementById("myScript_dates_date_07").innerHTML = date_07;
document.getElementById("myScript_dates_date_08").innerHTML = date_08;
document.getElementById("myScript_dates_date_09").innerHTML = date_09;
document.getElementById("myScript_dates_date_10").innerHTML = date_10;
document.getElementById("myScript_dates_date_11").innerHTML = date_11;
document.getElementById("myScript_dates_date_12").innerHTML = date_12;
document.getElementById("myScript_dates_date_13").innerHTML = date_13;
document.getElementById("myScript_dates_date_14").innerHTML = date_14;
document.getElementById("myScript_dates_date_15").innerHTML = date_15;
document.getElementById("myScript_dates_date_16").innerHTML = date_16;
document.getElementById("myScript_dates_date_17").innerHTML = date_17;
document.getElementById("myScript_dates_date_18").innerHTML = date_18;
document.getElementById("myScript_dates_date_19").innerHTML = date_19;
document.getElementById("myScript_dates_date_20").innerHTML = date_20;
document.getElementById("myScript_dates_date_21").innerHTML = date_21;
}
