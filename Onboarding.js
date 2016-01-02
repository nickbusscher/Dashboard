			AmCharts.makeChart("onboarding",
				{
					"type": "funnel",
					"balloonText": "[[title]]:<b>[[value]]</b>",
					"neckHeight": "30%",
					"neckWidth": "40%",
					"marginLeft": 15,
					"marginRight": 160,
					"maxLabelWidth": 205,
					"titleField": "title",
					"valueField": "value",
					"allLabels": [],
					"balloon": {},
					"titles": [],
					"dataProvider": [
						{
							"title": "New website visitors",
							"value": 300
						},
						{
							"title": "Sign up for trial",
							"value": 123
						},
						{
							"title": "Sign up for paid plan",
							"value": 98
						},
						{
							"title": "",
							"value": ""
						},
						{
							"title": "",
							"value": ""
						},
						{
							"title": "",
							"value": ""
						},
						{
							"title": "",
							"value": ""
						}
					]
				}
			);