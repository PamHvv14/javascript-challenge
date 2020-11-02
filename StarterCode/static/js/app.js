// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function readTable(data) {
    data.forEach((report) => {
        console.log(report);
        var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value); })})
} 

readTable(tableData);

function changeDate() {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime").property("value");
    console.log(inputDate);

    var filteredData = tableData.filter(row => row.datetime === inputDate);

    readTable(filteredData);
}

var submit = d3.select("#filter-btn");
submit.on("click", changeDate);
//filter-btn on click then call funtion