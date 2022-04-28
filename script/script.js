const img = document.querySelector('.img')
const btn = document.querySelector('.btn')
const offText = document.querySelector('.offText')
const bg = document.querySelector('.bg')
let bulb = true


// const test = {
//   dog: "good",
//   cat: "nice"

// }
// console.log(test.cat)
// dot . notation methond is to access the object properties
// properties are adjectives and methods are verb

// First get your logic down
// I want to have the button when clicked, Change image when clicking button and then change back the the original
// have code the down then dress it up.

// {} to give instructions
// function need your code to execute a set of instructions
// function do something

btn.innerText = "OFF"
btn.style.fontWeight = "bold"
function lightOn()
{
  btn.innerText = "ON"
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  offText.innerText = "ON ON ON ON ON ON ON ON ON";
  offText.style.color = "#f0cc4b";
  bg.style.backgroundColor = "white";
  btn.style.backgroundColor = "#f0cc4b";
  img.src = "/images/light-bulb-on.png" 
  img.alt = "The lightbulb is on";
  console.log('on')
  bulb = false;
}
function lightsOff()
{
  img.src="/images/light-bulb-on.png"
  btn.innerText = "OFF"
  btn.style.color = "black";
  btn.style.fontWeight = "bold";
  offText.innerText = "OFF OFF OFF OFF OFF OFF OFF";
  offText.style.color = "darkolivegreen";
  bg.style.backgroundColor = "rgb(63, 62, 60)";
  btn.style.backgroundColor = "rgb(239, 239, 239)";
  img.src = "/images/light-bulb-off.png" 
  img.alt = "The lightbulb is off";
  console.log('off')
  bulb = true;
}

function light()
{
  if(bulb)
  {
  lightOn()
  }
  else {
  lightsOff()
  }
}
btn.addEventListener("click", light)





// 22-04-28 
// Got the image to change from the off static image to the on static image. However I noticed the Alt tag still said, "The lightbulb is off". Took me a little bit but I found a solution at 1:38AM! 


// trying to make an if/else if statement to reset the whole document using one button but it's 2AM. Need to sleep.