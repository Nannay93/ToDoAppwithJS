//Get Date and Time
const x= new Date();
document.getElementById("date").innerHTML = x;


//create new Array list called toDoList
var toDolist = [];


//add new item to the list in the local storage
function addNewItem() {
  if (document.querySelector(".userInput").value.trim() != "") {
    toDolist.push(document.querySelector(".userInput").value.trim());
    if (localStorage.getItem("toDolist") == null) {
      localStorage.setItem("toDolist", JSON.stringify(toDolist));
    } else {
      localStorage.setItem("toDolist", JSON.stringify(toDolist));
    }
    displayItem();
  }
}

//display list item, check mark and trash bin
function displayItem() {
  document.querySelector(".dolist").innerHTML = "";
  for (var i = 0; i < toDolist.length; i++)
    document.querySelector(".dolist").innerHTML +=
      "<center><div class='element'>" +
      toDolist[i] +
      "<img class='checkmark' src='https://upload.wikimedia.org/wikipedia/commons/b/bd/Checkmark_green.svg' onclick='itemDone(" +
      i +
      ")'><img class='deletemark' src = 'https://upload.wikimedia.org/wikipedia/commons/7/75/Gnome-colors-window-close.svg' onclick='deleteItem(" +
      i +
      ")'></div></center><br>";
}

//delete item from the list(and local storage)
function deleteItem(index) {
  toDolist.splice(index, 1);
  if (localStorage.getItem("toDolist") == null) {
    localStorage.setItem("toDolist", JSON.stringify(toDolist));
  } else {
    localStorage.setItem("toDolist", JSON.stringify(toDolist));
  }
  displayItem();
}

//mark item as done
function itemDone(index) {
  if (toDolist[index].includes("<strike>")) {
    toDolist[index] = toDolist[index].replace("<strike>", "");
  } else {
    //after clicking on checkmark, it will have pop up good job msg
    alert("Good job!")
    toDolist[index] = "<strike>" + toDolist[index] + "</strike>";
  }
  if (localStorage.getItem("toDolist") == null) {
    localStorage.setItem("toDolist", JSON.stringify(toDolist));
  } else {
    localStorage.setItem("toDolist", JSON.stringify(toDolist));
  }
  displayItem();
}

//When the window refresh, fetch the list from local storage
window.onload = function() {
  if (JSON.parse(localStorage.getItem("toDolist")) != null)
    toDolist = JSON.parse(localStorage.getItem("toDolist"));
  console.log(toDolist);
  displayItem();
};
