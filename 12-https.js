const http = require('http');

const port = process.env.PORT || 3001;
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode=200;
        res.end('<h1>This is harry </h1> <p> hello </p>');
    }
    else if (req.url == '/about'){
        res.statusCode=200;
        res.end('Hello')
    }
    res.end('sorry')
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});