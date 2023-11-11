const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router); // The '/api' prefix is optional, you can use any prefix you prefer.

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
