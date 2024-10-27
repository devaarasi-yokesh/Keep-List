const check = document.getElementById("item1-check");
const val = document.getElementById("item-val")
val.addEventListener("keyup",()=>{
    console.log(val);
    let a = document.createElement("ul");
    a.style.backgroundColor = 'blue';
    let b = document.createElement("li");
    b.innerText = val.innerText;
    a.appendChild(b);

})