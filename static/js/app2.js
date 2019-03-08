
//assign the data from data.js to descriptive variable
var ufoData= data;

//gather references
var tbody= d3.select("tbody");
var searchTable= d3.select("#filter-btn");
var dateInput= d3.select("#date");
var cityInput= d3.select("#city");
var stateInput= d3.select("#state");
var countryInput= d3.select("#country");
var shapeInput= d3.select("#shape");

//console.log the ufo data
console.log(data);

//adding data
function showTable(data) {
    tbody.html ("");
    data.forEach((ufo)=> {
        var row= tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
            var cell= tbody.append("td");
            cell.text(value);
        });
    });
};
showTable(ufoData);

searchTable.on("click", function(){
    
    //prevent page from refreshing
    d3.event.preventDefault();

    //gather inputs
    var valueDate= dateInput.property("value");
    var valueCity= cityInput.property("value");
    var valueState= stateInput.property("value");
    var valueCountry= countryInput.property("value");
    var valueShape= shapeInput.property("value");
    console.log(valueDate)

    //re-format inputs to match format in ufoData
    var nvalueDate= valueDate.trim();
    var nvalueCity= valueCity.trim().toLowerCase();
    var nvalueState= valueState.trim().toLowerCase();
    var nvalueCountry= valueCountry.trim().toLowerCase();
    var nvalueShape= valueShape.trim().toLowerCase();

    //filter
    var searchData = ufoData.filter(ufo => (ufo.datetime == nvalueDate || nvalueDate == "") && (ufo.city == nvalueCity || nvalueCity == "") &&
    (ufo.state == nvalueState || nvalueState == "") && (ufo.country == nvalueCountry || nvalueCountry == "") &&
    (ufo.shape == nvalueShape || nvalueShape == ""));
         
    console.log(searchData);
    showTable(searchData);
});
   
    //Clear input fields
    dateInput.value= "";
    cityInput.value= "";
    stateInput.value= "";
    countryInput.value= "";
    shapeInput.value= "";

//Render table on page to load
    showTable(ufoData);