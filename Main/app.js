let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li"); //A new item created for li
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});

//Now to delete the item
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns ){
//     delBtn.addEventListener("click", function(){
//         // console.log("Element deleted"); just for checking
//         let par = this.parentElement;
//         console.log(par);
//         par.remove(); //would work only on existing elements, and not on newly created elements. so we will use event delegation
//     });
// };

//So adding event listeners on ul, using event bubbling here
ul.addEventListener("click", function(event){
    //console.log(event.target);//to target specific element
    // console.dir(event.target.nodeName);//to target specific element
    // console.log("Button Clicked");
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove()
        console.log("Delete");
    }
});