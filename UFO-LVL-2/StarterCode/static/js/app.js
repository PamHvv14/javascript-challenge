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
    // Get the value property of the input elements and set all text to lowercase
    var dateTime = d3.select("#datetime").property("value");
    var selectedCountry = d3.select("#country").property("value").toLowerCase();
    var selectedState = d3.select("#state").property("value").toLowerCase();
    var selectedCity = d3.select("#city").property("value").toLowerCase();
    var selectedShape = d3.select("#shape").property("value").toLowerCase();

    // initialize tableData as filteredData
    filteredData = tableData;
    if (dateTime) {filteredData = filteredData.filter(record => record.datetime === dateTime);}
    if (selectedCountry) {filteredData = filteredData.filter(record => record.country === selectedCountry);}
    if (selectedState) {filteredData = filteredData.filter(record => record.state === selectedState);}
    if (selectedCity) {filteredData = filteredData.filter(record => record.city === selectedCity);}
    if (selectedShape) {filteredData = filteredData.filter(record => record.shape === selectedShape);}

    readTable(filteredData);
};

var submit = d3.select("#filter-btn");
submit.on("click", buttonFilter);