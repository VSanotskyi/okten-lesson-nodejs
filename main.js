const http = require('node:http');

const { fn } = require('./some_dir/helper');

// console.log('Hello world');
// console.log(__dirname); // шлях до папки
// console.log(__filename); // шлях до файлу
// console.log(process.cwd()); // шлях де ми викликаємо

// fn()

const server = http.createServer((req, res) => {
  res.end('Hello world');
});

server.listen(8080, () => {
  console.log('Server start on port 8080');
});

