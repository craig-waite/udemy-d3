/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 250)
	.attr("height", 250);

var circle = svg.append("circle")
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", 48)
	.attr("fill", "yellow")
	.attr("stroke", "black")
	.attr("stroke-width", 2);

var square = svg.append("rect")
	.attr("x", 2)
	.attr("y", 150)
	.attr("width", 100)
	.attr("height", 100)
	.attr("fill", "yellow")
	.attr("stroke", "black")
	.attr("stroke-width", 2);

var line = svg.append("line")
	.attr("x1", 150)
	.attr("x2", 248)
	.attr("y1", 2)
	.attr("y2", 100)
	.attr("stroke", "black")
	.attr("stroke-width", 2);

var elipse = svg.append("ellipse")
	.attr("rx", 48)
	.attr("ry", 24)
	.attr("cx", 200)
	.attr("cy", 200)
	.attr("fill", "yellow")
	.attr("stroke", "black")
	.attr("stroke-width", 2);