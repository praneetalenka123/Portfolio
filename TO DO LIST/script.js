let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Task");
    } else {
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${inputs.value} <i class="fa fa-trash" aria-hidden="true"></i>`;
        // Removed the semicolon here
        text.appendChild(newEle);
        inputs.value = "";
        
        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove(); // Removing the element when the trash icon is clicked
        });
    }
}
