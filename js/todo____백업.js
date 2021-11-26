'use strict';

let itemList = [];
let inputButton = document.querySelector(".addGuardBtn");
inputButton.addEventListener("click", addItem);


function addItem() {
    let item = document.querySelector(".guardInput").value;
    if (item != null) {
        itemList.push(item);
        document.querySelector(".guardInput").value = "";
        document.querySelector(".guardInput").focus();
    }

    showList();
}


function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".guardMode_section2_app").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }

}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}


let checkList = document.querySelector('.guardMode_section2_app');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});