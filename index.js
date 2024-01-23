const http = require('http');
const behaviour = (req, res) => {
  console.log(req.method);
  console.log(req.url);
  if(req.method === 'GET' && req.url === '/books') {
    res.write('Hello from my girlfriend Maryam');
  }
  
  if(req.method === 'PUT' && req.url === '/books') {
    res.write('Young kid from Bariga')
  }
  if(req.method === 'DELETE' && req.url === '/books') {
    res.write('Bariga to the world')
  }
  if(req.method === 'GET' && req.url === '/books/author') {
    res.write('Software engineer is cooking')
  }
  if(req.method === 'POST' && req.url === '/books/author') {
    res.write('God Bless my hustle')
  }
  
  if(req.method === 'PUT' && req.url === '/books/author') {
    res.write('Thanks for watching')
  }
  res.write('Goodnight! ' + req.url);
  res.end()
}

const server = http.createServer(behaviour);
server.listen(8000, () => {
  console.log('server is running on port 8000')
});