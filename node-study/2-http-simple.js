// 用http模块创建HTTP服务

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const {pathname} = url.parse(`http://${req.headers.host}${req.url}`);
  if(pathname === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello world</h1>');
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end('<h1>Not Found</h1>');
  }
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(8080, () => {
  console.log('opened server on', server.address());
});
