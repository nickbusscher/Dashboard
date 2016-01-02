		AmCharts.makeChart("chartdiv",
				{
					"type": "serial",
					"categoryField": "Month",
					"startDuration": 1,
					"categoryAxis": {
						"gridPosition": "start",
						"startOnAxis": true
					},
					"trendLines": [],
					"graphs": [
						{
							"animationPlayed": true,
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"fillAlphas": 0.7,
							"id": "AmGraph-1",
							"lineAlpha": 0,
							"title": "Paid",
							"valueField": "Paid"
						},
						{
							"animationPlayed": true,
							"balloonText": "[[title]] of [[category]]:[[value]]",
							"cornerRadiusTop": 5,
							"fillAlphas": 0.7,
							"id": "AmGraph-2",
							"lineAlpha": 0,
							"title": "Interacted",
							"valueField": "Interacted"
						},
						{
							"animationPlayed": true,
							"fillAlphas": 0.68,
							"id": "AmGraph-3",
							"title": "Logged in",
							"valueField": "Logged in "
						},
						{
							"animationPlayed": true,
							"fillAlphas": 0.74,
							"id": "AmGraph-4",
							"negativeBase": 3,
							"showBalloonAt": "open",
							"title": "Signed up",
							"valueField": "Signed up"
						}
					],
					"guides": [],
					"valueAxes": [
						{
							"id": "ValueAxis-1",
							"stackType": "100%",
							"title": "% of Users"
						}
					],
					"allLabels": [],
					"balloon": {
						"showBullet": true
					},
					"legend": {
						"enabled": true
					},
					"titles": [
						{
							"id": "Title-1",
							"size": 15,
							"text": "Cohort Analysis"
						}
					],
					"dataProvider": [
						{
							"Month": "January",
							"Paid": 8,
							"Interacted": 5,
							"Logged in ": 61,
							"Signed up": 83
						},
						{
							"Month": "February",
							"Paid": 6,
							"Interacted": 7,
							"Logged in ": 85,
							"Signed up": 88
						},
						{
							"Month": "March",
							"Paid": 2,
							"Interacted": "6",
							"Logged in ": 86,
							"Signed up": 19
						},
						{
							"Month": "April",
							"Paid": 1,
							"Interacted": "7",
							"Logged in ": 37,
							"Signed up": 96
						},
						{
							"Month": "May",
							"Paid": 2,
							"Interacted": "8",
							"Logged in ": 12,
							"Signed up": 47
						},
						{
							"Month": "June",
							"Paid": 3,
							"Interacted": "7",
							"Logged in ": 2,
							"Signed up": 12
						},
						{
							"Month": "July",
							"Paid": 6,
							"Interacted": 8,
							"Logged in ": 44,
							"Signed up": 99
						},
						{
							"Month": "August",
							"Paid": "5",
							"Interacted": "10",
							"Logged in ": 72,
							"Signed up": 66
						},
						{
							"Month": "Sept.",
							"Paid": "4",
							"Interacted": "12",
							"Logged in ": 44,
							"Signed up": 58
						},
						{
							"Month": "Oct.",
							"Paid": "3",
							"Interacted": "13",
							"Logged in ": 42,
							"Signed up": 54
						},
						{
							"Month": "Nov.",
							"Paid": "5",
							"Interacted": "15",
							"Logged in ": 18,
							"Signed up": 65
						},
						{
							"Month": "Dec.",
							"Paid": "6",
							"Interacted": "17",
							"Logged in ": 91,
							"Signed up": 11
						}
					]
				}
			);