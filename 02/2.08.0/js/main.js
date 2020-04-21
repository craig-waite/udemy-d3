/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json("data/buildings.json").then(function (data) {

   var svg = d3.select("#chart-area").append("svg")
      .attr("width", 500)
      .attr("height", 500);

   var buildings = svg.selectAll("rect")
      .data(data);

   buildings.enter().append("rect")
      .attr("x", function (d, i) { return i * 50 + 25 })
      .attr("y", 0)
      .attr("width", 45)
      .attr("height", function (d) { return d.height; })
      .attr("fill", "grey");

}).catch(function (error) {
   console.log(error);
});
