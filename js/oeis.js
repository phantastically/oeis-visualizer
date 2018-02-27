var data_40 = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271];
var data_142 = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800];
var data_45 = [	0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155];
var data = [];

$(document).ready(function() {
	console.log("Render D3 chart...");	

    var allInts = [];
	for (var i = 0; i < 100; i++) {
		allInts.push(i);
	}
	
	d3.select("#sieve")
	  .selectAll("p")
	  .data(allInts)
	  .enter()
	  .append("p")
  	  .attr("class", function(d) { return $.inArray(d, data_40) === -1 ? "light" : "dark" })
  	  .attr("style", function(d) { return "grid-column: col-start " + (d + 1) % 10 })
	  .text(function(d) { return d; });
	
	$("#a40").click(function() {
		d3.select("#sieve").transition().duration(1000).attr("style", "background: red");
		console.log("Click 40");
		data = data_40;
	});

	$("#a45").click(function() {
		data = data_45;
	});

	$("#a142").click(function() {
		data = data_142;
	});
	
  	console.log("...done.");
});

