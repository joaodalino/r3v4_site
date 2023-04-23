const mc = require('minecraft-protocol');

const server = mc.createServer({
  'online-mode': true,
  encryption: true,
  host: '66.11.123.132',
  port: 2001,
  version: '1.16.5'
});

server.on('login', function(client) {
  console.log(client.username + ' entrou no servidor!');
});

console.log('Servidor Minecraft rodando na porta 2001.');
