let data = [];
fetch("data.json")
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    data = json;
    showData(data);
  });
function showData(list) {
  let table = document.getElementById("tableBody");
  table.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    table.innerHTML += "<tr>" +
      "<td>" + item.fault_id + "</td>" +
      "<td>" + item.street + "</td>" +
      "<td>" + (item.ward || "N/A") + "</td>" +
      "<td>" + item.status + "</td>" +
      "</tr>";
  }
  document.getElementById("count").innerText =
    "Total: " + list.length;
}
function searchData() {
  let text = document.getElementById("search").value.toLowerCase();
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].street.toLowerCase().includes(text)) {
      result.push(data[i]);
    }
  }
  showData(result);
}
function filterData() {
  let value = document.getElementById("filter").value;
  if (value === "all") {
    showData(data);
  } else {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === value) {
        result.push(data[i]);
      }
    }

    showData(result);
  }
}