let input = document.querySelector(".input");
let equal = document.querySelector(".equal");
let de = document.querySelector(".de");
let ac = document.querySelector(".ac");
function display(value) {
  input.value += value;
}

de.addEventListener("click",()=>{
  input.value = "";
});

ac.addEventListener("click",()=>{
  input.value = "";
});
equal.addEventListener("click",()=>{
  let num1 = input.value;
  let num2 = eval(num1);
  input.value = num2;
});
