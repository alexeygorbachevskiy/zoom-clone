import { app as expressApp } from "./app";
import * as https from "https";
import * as fs from "fs";

const port = expressApp.get("port");

const options = {
  key: fs.readFileSync(".cert/key.pem"),
  cert: fs.readFileSync(".cert/cert.pem"),
};

export const server = https.createServer(options, expressApp);

server.listen(port, onListening);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? `pipe ${addr}` : `port ${addr?.port}`;
  console.log(`Listening on ${bind}`);
}
