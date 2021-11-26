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
    let list = "<div>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<div class='appMenuItems'><span class='appMenuText'>" + itemList[i] + "</span><span class='close' id=" + i + ">" + "<i class='fas fa-minus-circle'></i></span></div>";
    }
    list += "</div>";
    document.querySelector(".guardListCont").innerHTML = list;


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


let checkList = document.querySelector('.guardListCont');
checkList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});