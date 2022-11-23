const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data.toString());
    conn.end();
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
  })

  conn.on('connect', () => {
    conn.write('Name: Jim');
  });

  // This code can move the snake up continuously, upon connection to the server
  // conn.on('connect', () => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, "500");
  // });

  return conn;
};

module.exports = { connect };