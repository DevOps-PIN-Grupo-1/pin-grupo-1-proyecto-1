const http = require('http');
const client = require('prom-client');

// Recolecta métricas básicas del proceso Node.js
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();

const server = http.createServer(async (req, res) => {
  if (req.url === '/metrics') {
    res.writeHead(200, {
      'Content-Type': client.register.contentType,
    });
    res.end(await client.register.metrics());
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola, Proyecto 1 funcionando');
  }
});

server.listen(3000, () => {
  console.log('Servidor escuchando en puerto 3000');
});