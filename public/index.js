// add to db not table html, get db as well

function addChore() {
    var date = document.getElementById("choreDate").value;
    var item = document.getElementById("chore").value;
    var roomie = document.getElementById("choreRoomie").value;

    var table = document.getElementById("choreTable");
    var row = table.insertRow(0);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = date;
    cell2.innerHTML = item;
    cell3.innerHTML = roomie;
    cell4.innerHTML = '<input type="button" id="delete" value="done">';

    document.getElementById("choreCount").innerHTML = document.getElementById("choreTable").rows.length;

    let api_base = "http://localhost:3000/api/";

    $.post(api_base+"add_chore?chore_id="+item+"&name="+roomie+"&time="+date+"&recurr="+"N/A");

    $.post("https://ya3shi.api.stdlib.com/foody-project@dev/add_chore?message="+item+" has been tasked to "+roomie+" due on "+date+"!");
}

function getChores() {
    var name = $("#chore-search").val();

    let api_base="http://localhost:3000/api/";
    $.get(api_base+"get_chores?name="+name, (data) => {
      let len = data.length;
      console.log("length of the array "+len);
      console.log("data"+data);
      var i = 0;

      //count
      $("#choreCount").text(len);

      //deletion
      $("#choreTable tr").remove();

      for (i; i < len; i++) {
        var table = document.getElementById("choreTable");
        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = data[i].time;
        cell2.innerHTML = data[i].chore_id;
        cell3.innerHTML = data[i].name;
        cell4.innerHTML = '<input type="button" id="delete" value="done">';
      }
    });
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
    document.getElementById("fridgeCount").innerHTML = document.getElementById("fridgeTable").rows.length;
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
    document.getElementById("groceryCount").innerHTML = document.getElementById("groceryTable").rows.length;
}
