const net = require("net");
const connect = require("./client")

// establishes a connection with the game server --> moved to client.js
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on('data', (data) => {
//     console.log(data.toString());
//     conn.end();
//   });

//   return conn;
// };

console.log("Connecting ...");
connect();

