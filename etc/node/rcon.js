#!/usr/bin/env node

var Rcon = require("rcon");

const host = "localhost";
const port = process.env.RCON_PORT;
const password = process.env.RCON_PASSWORD;

var conn = new Rcon(host, port, password);

//args to string
var argumentString = "";
var args = process.argv.splice(process.execArgv.length + 2);
for (var i = 0; i < args.length; i++) {
    if (i === args.length - 1) argumentString += args[i];
    else argumentString += args[i] + " ";
}

//check if argument is empty
if (argumentString.length < 1) {
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log("rcon::Relaying RCON command: " + argumentString);

conn.on("auth", function () {
    console.log("rcon::connected!");
    console.log("rcon::sending: " + argumentString);
    conn.send(argumentString);

    console.log("rcon::connection will close in 10 seconds!");
    sleep(10000);
    process.exit();
})
    .on("response", function (str) {
        console.log("rcon::Response: " + str);
    })
    .on("error", function (err) {
        console.log("rcon::Error: " + err);
    })
    .on("end", function () {
        console.log("rcon::Connection closed");
        process.exit();
    });

conn.connect();
