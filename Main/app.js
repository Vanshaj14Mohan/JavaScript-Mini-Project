let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li"); //A new item created for li
    item.innerText = inp.value;
    // console.log("Button clicked");
    // console.log(inp.value);

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

//Now to delete the item
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns ){
    delBtn.addEventListener("click", function(){
        // console.log("Element deleted"); just for checking
        let par = this.parentElement;
        console.log(par);
        par.remove(); //would work on existing elements, and not on newly created elements.
    });
};