console.log ("JS 2 is loaded");

//Step 1 - selecting your element 
const myParallelogram = document.getElementById("parallelogram");

//Step 2 - adding a click event
myParallelogram.addEventListener("click", () => {
   // myParallelogram.style.borderBottom= "100px solid blue";
   myParallelogram.classList.toggle("change-me")
})