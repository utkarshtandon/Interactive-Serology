// set the dimensions and margins of the graph
var margin = {top: 10, right: 60, bottom: 40, left: 50},
    width = 950 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("static/formatted_prevalence.csv", function(data) {

    // List of groups (here I have one group per column)
    var allGroup = ["valueA", "valueB", "valueC"]

    var allGroup = ['(0.8, 0.8)', '(0.85, 0.8)', '(0.9, 0.8)', '(0.95, 0.8)', '(1.0, 0.8)', '(0.8, 0.85)', '(0.85, 0.85)', '(0.9, 0.85)', '(0.95, 0.85)', '(1.0, 0.85)', '(0.8, 0.9)', '(0.85, 0.9)', '(0.9, 0.9)', '(0.95, 0.9)', '(1.0, 0.9)', '(0.8, 0.95)', '(0.85, 0.95)', '(0.9, 0.95)', '(0.95, 0.95)', '(1.0, 0.95)', '(0.8, 1.0)', '(0.85, 1.0)', '(0.9, 1.0)', '(0.95, 1.0)', '(1.0, 1.0)'];

    // add the options to the button
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; }) // text showed in the menu
      .attr("value", function (d) { return d; }) // corresponding value returned by the button



    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([0.005,0.25])
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [-50,1000])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));


    
    // gridlines in x axis function
    function make_x_gridlines() {   
        return d3.axisBottom(x)
            .ticks(11)
    }

    // gridlines in y axis function
    function make_y_gridlines() {   
        return d3.axisLeft(y)
            .ticks(12)
    }

    // add the X gridlines
    svg.append("g")     
        .attr("class", "grid")
        .attr("transform", "translate(0," + height + ")")
        .call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
        )

    // add the Y gridlines
    svg.append("g")     
        .attr("class", "grid")
        .call(make_y_gridlines()
            .tickSize(-width)
            .tickFormat("")
        )

    // Initialize line with group a
    var line = svg
      .append('g')
      .append("path")
        .datum(data)
        .attr("d", d3.line()
          .x(function(d) { return x(+d.prevalence) })
          .y(function(d) { return y(+d['(0.8, 0.8)']) })
        )
        .attr("stroke", function(d){ return "black" })
        .style("stroke-width", 3)
        .style("fill", "none")

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-family", "Helvetica")
      .style("font-weight", "100")
      .text("min_n");

    svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 22) + ")")
      .style("text-anchor", "middle")
      .style("font-family", "Helvetica")
      .style("font-weight", "100")
      .text("prevalence");

    

    svg.append("line")
    .attr("x1", x(0.139))  
    .attr("y1", 0)
    .attr("x2", x(0.139)) 
    .attr("y2", height)
    .style("stroke-width", 2)
    .style("stroke", "red")
    .style("fill", "none")
    .style("stroke-dasharray", ("3, 3"));

    svg.append("text")
    .attr("x", x(0.140))
    .attr("y", 5)
    .attr("dy", ".35em")
    .style("font-family", "Helvetica")
    .style("font-size", "11px")
    //.style("fill", "red")
    .text("NY State");

    svg.append("line")
    .attr("x1", x(0.212))  
    .attr("y1", 0)
    .attr("x2", x(0.212)) 
    .attr("y2", height)
    .style("stroke-width", 2)
    .style("stroke", "red")
    .style("fill", "none")
    .style("stroke-dasharray", ("3, 3"));

    svg.append("text")
    .attr("x", x(0.213))
    .attr("y", 5)
    .attr("dy", ".35em")
    .style("font-family", "Helvetica")
    .style("font-size", "11px")
    //.style("fill", "red")
    .text("NYC Shoppers");

    svg.append("line")
    .attr("x1", x(0.208))  
    .attr("y1", 0)
    .attr("x2", x(0.208)) 
    .attr("y2", height)
    .style("stroke-width", 2)
    .style("stroke", "red")
    .style("fill", "none")
    .style("stroke-dasharray", ("3, 3"));


    svg.append("text")
    .attr("x", x(0.194))
    .attr("y", 5)
    .attr("dy", ".35em")
    .style("font-family", "Helvetica")
    .style("font-size", "11px")
    //.style("fill", "red")
    .text("LA Study");

     svg.append("line")
    .attr("x1", x(0.24))  
    .attr("y1", 0)
    .attr("x2", x(0.24)) 
    .attr("y2", height)
    .style("stroke-width", 2)
    .style("stroke", "red")
    .style("fill", "none")
    .style("stroke-dasharray", ("3, 3"));

    svg.append("text")
    .attr("x", x(0.241))
    .attr("y", 5)
    .attr("dy", ".35em")
    .style("font-family", "Helvetica")
    .style("font-size", "11px")
    //.style("fill", "red")
    .text("Santa Clara");

    // Define the div for the tooltip
    var div = d3.select("body").append("div") 
        .attr("class", "tooltip")       
        .style("opacity", 0);


    svg.selectAll(".dot")
      .data(data)
    .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) { return x(+d.prevalence) })
      .attr("cy", function(d) { return y(+d['(0.8, 0.8)']) })
      .attr("r", 3)
      .on("mouseover", function(d) {    
            div.transition()    
                .duration(200)    
                .style("opacity", .9);    
            div .html(d.prevalence + "<br/>"  + Math.round(d['(0.8, 0.8)']))  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            })          
        .on("mouseout", function(d) {   
            div.transition()    
                .duration(500)    
                .style("opacity", 0); 
        });



    // A function that update the chart
    function update(selectedGroup) {

      // Create new data with the selection?
      var dataFilter = data.map(function(d){return {prevalence: d.prevalence, value:d[selectedGroup]} })

      // Give these new data to update line
      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(+d.prevalence) })
            .y(function(d) { return y(+d.value) })
          )
          .attr("stroke", function(d){ return "black" })

      
      svg.selectAll(".dot")
        .data(dataFilter)
        .transition()
        .duration(1000)
      //.enter().append("circle") // Uses the enter().append() method
        //.attr("class", "dot") // Assign a class for styling
        .attr("cx", function(d) { return x(+d.prevalence) })
        .attr("cy", function(d) { return y(+d.value) })
        

      svg.selectAll(".dot")
        .data(dataFilter)
        .on("mouseover", function(d) {    
            div.transition()    
                .duration(200)    
                .style("opacity", .9);    
            div .html(d.prevalence + "<br/>"  + Math.round(d.value))  
                .style("left", (d3.event.pageX) + "px")   
                .style("top", (d3.event.pageY - 28) + "px");  
            });

    }

    // When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function(d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
        update(selectedOption)
    })

})