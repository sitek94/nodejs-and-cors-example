import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('Hello');
  res.end();
});

server.listen(3000, error => {
  if (error) {
    console.error('Something went wrong', error);
  } else {
    console.log('Server listening on PORT: 3000');
  }
});
