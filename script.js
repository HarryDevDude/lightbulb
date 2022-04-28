const img = document.querySelector('.img')
const btn = document.querySelector('.btn')
const offText = document.querySelector('.offText')
const bg = document.querySelector('.bg')

// I want to have the button when clicked, Change image when clicking button and then change back the the original

btn.innerText = "OFF"
btn.style.fontWeight = "bold"
btn.addEventListener("click", () => {
  if (btn.innerText = "ON")
  {
  btn.style.color = "white";
  btn.style.fontWeight = "bold";
  offText.innerText = "ON ON ON ON ON ON ON ON ON";
  offText.style.color = "#f0cc4b";
  bg.style.backgroundColor = "white";
  btn.style.backgroundColor = "#f0cc4b";
  img.src = "light-bulb-on.png" 
  img.alt = "The lightbulb is on";
  } 
  else if (bg.style.backgroundColor = "white")
  btn.addEventListener("click", () => {
  document.reset();
  }
  )
}
)
// 22-04-28 
// Got the image to change from the off static image to the on static image. However I noticed the Alt tag still said, "The lightbulb is off". Took me a little bit but I found a solution at 1:38AM! 


// trying to make an if/else if statement to reset the whole document using one button but it's 2AM. Need to sleep.