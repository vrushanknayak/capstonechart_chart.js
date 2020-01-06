new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["2016", "2017", "2018", "2019"],
		datasets: [
			{
				label: "Store Closures",
				backgroundColor: ["#E0582D", "#E89437", "#48A08D", "#B02732"],
				borderColor: ["#06173C", "#06173C", "#06173C", "#06173C"],
				data: [2056, 6955, 5854, 7567],
				borderWidth: [0, 0, 0, 2.5]
        }
      ]
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
			text: 'Store Closures'
		},
		scales: {
			yAxes: [{
				ticks: {
					min: 1000,
					max: 8000,
				},
				scaleLabel: {
					display: false,
					labelString: 'Store Closures',


				},
							}],
			xAxes: [{
				barThickness: 100, // number (pixels) or 'flex'
				maxBarThickness: 100, // number (pixels)
				scaleLabel: {
					display: true,
					labelString: 'Year'
				},
				            }]

		}
	}
});