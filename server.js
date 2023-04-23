
var mc = require('minecraft-protocol');

var server = mc.createServer({
  'online-mode': true,
  encryption: true,    
  host: 'e8b8bdb1-610f-4831-a046-c950dff1c72d',   
  port: 2001,     
  version: '1.16.5'
});

const mcData = require('minecraft-data')(server.version)

server.on('login', function(client) {
  
  let loginPacket = mcData.loginPacket

  client.write('login', {
    entityId: client.id,
    isHardcore: false,
    gameMode: 0,
    previousGameMode: 255,
    worldNames: loginPacket.worldNames,
    dimensionCodec: loginPacket.dimensionCodec,
    dimension: loginPacket.dimension,
    worldName: 'minecraft:overworld',
    hashedSeed: [0, 0],
    maxPlayers: server.maxPlayers,
    viewDistance: 10,
    reducedDebugInfo: false,
    enableRespawnScreen: true,
    isDebug: false,
    isFlat: false
  });

  client.write('position', {
    x: 0,
    y: 1.62,
    z: 0,
    yaw: 0,
    pitch: 0,
    flags: 0x00
  });
  
  var msg = {
    translate: 'chat.type.announcement',
    "with": [
      'Server',
      'Hello, world!'
    ]
  };
  client.write("chat", { message: JSON.stringify(msg), position: 0, sender: '0' });
});