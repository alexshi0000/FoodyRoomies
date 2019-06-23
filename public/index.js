function addChore() {
    var date = document.getElementById("choreDate").value;
    var item = document.getElementById("chore").value;
    var roomie = document.getElementById("choreRoomie").value;
    var table = document.getElementById("choreTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = date;
    cell2.innerHTML = item;
    cell3.innerHTML = roomie;
}

function addFridge() {
    var date = document.getElementById("fridgeDate").value;
    var item = document.getElementById("fridge").value;
    var roomie = document.getElementById("fridgeRoomie").value;
    var table = document.getElementById("fridgeTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = date;
    cell2.innerHTML = item;
    cell3.innerHTML = roomie;
}

function addGrocery() {
    var date = document.getElementById("groceryDate").value;
    var item = document.getElementById("grocery").value;
    var roomie = document.getElementById("groceryRoomie").value;
    var table = document.getElementById("groceryTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = date;
    cell2.innerHTML = item;
    cell3.innerHTML = roomie;
}