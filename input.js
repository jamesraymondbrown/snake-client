const net = require("net");

// Stores the active TCP connection object.
let connection;

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  } if (key === "w") {
    connection.write("Move: up");
  } if (key === "a") {
    connection.write("Move: left");
  } if (key === "s") {
    connection.write("Move: down");
  } if (key === "d") {
    connection.write("Move: right");
  } if (key === "c") {
    connection.write("Say: Welcome to Snaketown");
  } if (key === "v") {
    connection.write("Say: Snakebite Supreme")
  }
}

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };