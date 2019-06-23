function addChore() {
    var date = document.getElementById("date").value;
    var chore = document.getElementById("chore").value;
    var roomie = document.getElementById("roomie").value;
    var table = document.getElementById("choreTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = date;
    cell2.innerHTML = chore;
    cell3.innerHTML = roomie;
}