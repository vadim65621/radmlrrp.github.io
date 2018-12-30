var ctx1 = document.getElementById("online-chart-1").getContext("2d"),
ctx2 = document.getElementById("online-chart-2").getContext("2d"),
ctx3 = document.getElementById("online-chart-3").getContext("2d"),
ctx4 = document.getElementById("online-chart-4").getContext("2d");

var options = {
	tooltips:{
		displayColors:!1,
		callbacks:{
			title:function(){},
			label:function(a,b){
				return a.yLabel
			},
			beforeLabel:function(){}
		}
	},
	legend:{
		display:!1
	},
	scales:{
		xAxes:[{
			ticks:{
				fontColor:"#b4b4b4"
			}
		}],
		yAxes:[{
			ticks:{
				fontColor:"#b4b4b4",
				min:0,
				max:500,
				stepSize:100
			}
		}]
	}
};
var dataset1 = {
	borderWidth:5,
	borderColor:"#ff8400",
	backgroundColor:"transparent",
	pointBackgroundColor:"#ff8400",
	pointBorderWidth:0,
	pointHoverBorderWidth:0,
	pointRadius:5,
	tension:0,
};
var dataset2 = {
	borderWidth:5,
	borderColor:"#ff8400",
	backgroundColor:"transparent",
	pointBackgroundColor:"#ff8400",
	pointBorderWidth:0,
	pointHoverBorderWidth:0,
	pointRadius:5,
	tension:0,
};
var dataset3 = {
	borderWidth:5,
	borderColor:"#ff8400",
	backgroundColor:"transparent",
	pointBackgroundColor:"#ff8400",
	pointBorderWidth:0,
	pointHoverBorderWidth:0,
	pointRadius:5,
	tension:0,
};
var dataset4 = {
	borderWidth:5,
	borderColor:"#ff8400",
	backgroundColor:"transparent",
	pointBackgroundColor:"#ff8400",
	pointBorderWidth:0,
	pointHoverBorderWidth:0,
	pointRadius:5,
	tension:0,
};
// var dataset1 = dataset;
// var dataset2 = dataset;
// var dataset3 = dataset;
// var dataset4 = dataset;


dataset1.data = values1;
var myChart1 = new Chart(ctx1,{type:"line",data:{labels:labels1,datasets:[dataset1]},options:options});


dataset2.data = values2;
var myChart2 = new Chart(ctx2,{type:"line",data:{labels:labels2,datasets:[dataset2]},options:options});


dataset3.data = values3;
var myChart3 = new Chart(ctx3,{type:"line",data:{labels:labels3,datasets:[dataset3]},options:options});


dataset4.data = values4;
var myChart4 = new Chart(ctx4,{type:"line",data:{labels:labels4,datasets:[dataset4]},options:options});