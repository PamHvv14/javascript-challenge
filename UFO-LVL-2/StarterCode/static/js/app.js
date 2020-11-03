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

function buttonFilter() {

    d3.select("tbody").html("");
    d3.event.preventDefault();
    // Select the input date, state, shape and get the raw HTML nodes
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue ||
                                                    sighting.city === inputValue ||
                                                    sighting.state === inputValue ||
                                                    sighting.country === inputValue ||
                                                    sighting.shape === inputValue);
    console.log(filteredData);
    readTable(filteredData);
};

var submit = d3.select("#filter-btn");
submit.on("click", buttonFilter);