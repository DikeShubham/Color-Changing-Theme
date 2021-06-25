console.log('hello ')

const light = document.getElementById("color3").addEventListener("click",()=>{
  document.body.setAttribute("data-theme","light")
})

const blueLemonade = document.getElementById("color1").addEventListener("click",(e)=>{
  document.body.setAttribute("data-theme","blueLemonade")
})

const gray = document.getElementById("color2").addEventListener("click",()=>{
  document.body.setAttribute("data-theme","gray")
})
