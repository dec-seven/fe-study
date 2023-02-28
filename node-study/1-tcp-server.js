//理解HTTP:用net模块实现一个TCP服务器
const net = require('net');

function responseData(str, status = 200, desc = 'OK') {
  return `HTTP/1.1 ${status} ${desc}
Connection: keep-alive
Date: ${new Date()}
Content-Length: ${str.length}
Content-Type: text/html

${str}`;
}

/**
 * net.createServer表示创建并返回一个 server 对象，
 * 参数是一个回调函数，这个回调函数会在连接建立的时候被调用。
 */
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    const matched = data.toString('utf-8').match(/^GET ([/\w]+) HTTP/);
    if(matched) {
      const path = matched[1];
      if(path === '/') { //如果路径是'/'，返回hello world、状态是200
        socket.write(responseData('<h1>Hello world</h1>'));
      } else { // 否则返回404状态
        socket.write(responseData('<h1>Not Found</h1>', 404, 'NOT FOUND'));
      }
    }
    console.log(`DATA:\n\n${data}`);
  });

  socket.on('close', () => {
    console.log('connection closed, goodbye!\n\n\n');
  });
}).on('error', (err) => {
  // handle errors here
  throw err;
});

/**
 * net.createServer创建的 server 对象需要调用 listen 方法才能够与客户端建立连接。
 * listen 方法的第一个参数是一个配置项，host表示校验服务器名或 IP 地址。
 * 如果设置为0.0.0.0，则表示不校验名称及 IP 地址。
 * 也就是说只要能访问到运行tcp-server.js的这台服务器，不管是通过哪个 IP 地址或者服务器名访问的，都允许建立连接。
 * port表示要连接的端口号。
 */
server.listen({
  host: '0.0.0.0',
  port: 8080,
}, () => {
  console.log('opened server on', server.address());
});
// 在项目目录下运行当前模块
// $ node tcp-server.js
