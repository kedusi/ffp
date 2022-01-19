const http = require('http');
const fs = require('fs');
const puppeteer = require('puppeteer');
const { response } = require('express');
const screenshot = require('./screenshot');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, resp) => {
    if (req.method === "POST") {
        screenshot();
    }
    fs.readFile('index.html', function (error, pgResp) {
        if (error) {
            resp.writeHead(404);
            resp.write('Contents you are looking are not found');
        } else {
            resp.writeHead(200, {'Content-Type': 'text/html'});
            resp.write(pgResp);
        }
        resp.end();
    });
});
server.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}`);
});