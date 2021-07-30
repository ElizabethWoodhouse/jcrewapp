const http = require('http');
const fs = require('fs');
const host = 'localhost';
const port = 8000;
const categoryJson = fs.readFileSync('category.json', 'utf8');
const requestListener = (req, res) => {
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET',
		'Access-Control-Max-Age': 2592000, // 30 days
	};
	res.writeHead(200, headers);
	res.write(categoryJson);
	res.end();
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
	console.log(`category Server is running on http://${host}:${port}`);
});
