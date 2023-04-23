const mc = require('minecraft-protocol');

const server = mc.createServer({
  'online-mode': true,
  encryption: true,
  host: 'e8b8bdb1-610f-4831-a046-c950dff1c72d',
  port: 2001,
  version: '1.16.5'
});

server.on('login', function(client) {
  console.log(client.username + ' entrou no servidor!');
});

console.log('Servidor Minecraft rodando na porta 2001.');
