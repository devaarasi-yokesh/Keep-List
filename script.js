const check = document.querySelector(".container");
const showContainer = document.querySelector(".show")

const add = document.getElementById("addButton");

showContainer.style.margin = "20px";
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
   inputVal.style.margin = "8px";
inputVal.addEventListener("keypress",(event)=>{
    if(event.key == "Enter"){
        const inbtw = document.createElement("div");
        showContainer.append(inbtw);
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
        a.style.display = "inline-block";
        b.style.display = 'inline-block';
        b.style.margin = "8px"
        inputVal.value = "";
        a.addEventListener("click", ()=>{
            b.style.textDecoration = "line-through";
        })
    }
});
})


const weely_div = document.getElementById('weekly');
const ul = document.getElementById("wk_list");
const default_div = document.getElementById("default");
const default_btn = document.getElementById('default-add-button');
default_btn.style.display = "block";
default_btn.addEventListener("click",()=>{
    const label = document.createElement("p");
    label.textContent = "Item-name";
    const input = document.createElement("input");
    input.type = "text";
    default_div.append(label);
    default_div.append(input);
    default_div.classList.add("def")
    label.style.display = "inline-block";
    input.style.display = "inline-block";
    input.style.margin = "5px";

    const inbtw = document.createElement("div");
    default_div.append(inbtw);
    const label2 =  document.createElement("p");
    label2.textContent = "Duration";
    const input2 = document.createElement("select");
    let ons= ["Weekly","Monthly","Yearly"];
    for(let i = 0;i<ons.length;i++){
        let opt = document.createElement("option");
        console.log(ons[i])
        opt.textContent = ons[i];
        input2.append(opt);
    }
    default_div.append(label2);
    default_div.append(input2);
    default_div.classList.add("def")
    label2.style.display = "inline-block";
    input2.style.display = "inline-block";
    input2.style.margin = "15px";
    const add_btn = document.createElement("button");
    add_btn.textContent = "Add";
    default_div.append(add_btn);
    add_btn.style.display = "block";
    add_btn.style.marginLeft = "25px";
    input.required = true;
    add_btn.addEventListener("click",()=>{
        
         if(label.textContent != null || label2.textContent != null){
            const msg = document.createElement("p");
            msg.textContent = "Item Successfully added!";
            msg.style.margin = "2%";
            default_div.append(msg);
            msg.classList.add("shade")
        }
        console.log(input.value)
        
        const el = document.createElement("li");
        el.textContent = input.value;
        ul.append(el);
        input.value = "";
    })
})



