function updateItemStatus(){
    var cbid = this.id.replace("cb_","");
    var itemText = document.getElementById("txt_" + cbid);
    
    // itemText.innerText = "Clicked";
    if(this.checked){
        itemText.style.opacity = 0.5;
    }
    else{
        itemText.style.opacity = 1;
    }
}

function removeItem(){
var dib = this.id;
// console.log(dib);
    var itemRemove = document.getElementById("list_" + dib);
    itemRemove.style.display = "none";
}


var totalItem = 0;
function addNewItem() {
    // var itemText = prompt("Whats New?");
    
    
    var inputItem = document.getElementById("item");
    var itemText = inputItem.value;
    document.getElementById("item").value = "";
    inputItem.focus();

    if(itemText == null || itemText == "" || itemText == " "){
        alert("Please Enter input here");
        return false;
    }
    
    totalItem++;

    var listItem = document.createElement("li");
    listItem.id = "list_" + totalItem;

    var span = document.createElement("span");
    span.innerText = itemText;
    span.id = "txt_" + totalItem;

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + totalItem;
    checkBox.onclick = updateItemStatus;

    var del = document.createElement("input");
    del.type = "button";
    del.value = "Delete";
    del.id = totalItem;
    del.onclick = removeItem;
   
    var todolist = document.getElementById("itemlist");
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    listItem.appendChild(del);
    todolist.appendChild(listItem);

}