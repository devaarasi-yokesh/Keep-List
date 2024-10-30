const check = document.querySelector(".container");
const showContainer = document.querySelector(".show")

const add = document.getElementById("addButton");

add.addEventListener("click", () => {
    const checkBox = document.createElement("input");
    const inputVal = document.createElement("input");
    checkBox.setAttribute("type","checkbox");
    inputVal.setAttribute("type","text");
    inputVal.setAttribute("id","val");
    var k = inputVal.id;
    console.log(inputVal.id)
   check.appendChild(checkBox);
   check.appendChild(inputVal);
inputVal.addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        let a = document.createElement("input");
        a.setAttribute("type","checkbox");
        let b = document.createElement("li");
        b.style.listStyle = "none";
        b.appendChild(a);
        console.log(inputVal.value,a)
        b.innerText = inputVal.value;
        // const list = a.appendChild(b);
        showContainer.append(a)
        showContainer.appendChild(b);
        inputVal.value = "";
        a.addEventListener("click", ()=>{
            b.style.textDecoration = "line-through";
        })
    }
});
})

