var express = require('express');
var app = express();
var port = 9090;

app.use(express.static(`./build/`));

app.get('/', (req, res) => {
	res.sendFile('./index.html');
});
app.get('/data', (req, res) => {
	const dataSet = {
		topic : {
			title: "Geometry"
		},
		subtopics : [
			{ index: 1, title: "Triangles", completed: true },
			{ index: 2, title: "Angle Sum", completed: true },
			{ index: 3, title: "Similar Triangles", completed: true },
			{ index: 4, title: "Congruence", completed: false },
			{ index: 5, title: "Enlargements", completed: false },
			{ index: 6, title: "Parallel Lines", completed: false },
			{ index: 7, title: "Pythagoras Theorem", completed: false },
			{ index: 8, title: "Revision", completed: false },
			{ index: 9, title: "Topic Test", completed: false }
		]
	}
	res.header('Access-Control-Allow-Origin', '*');
	res.setHeader('Content-Type', 'application/json');
	res.json(dataSet);
});
app.listen(port, () => {
	console.log('listening');
});