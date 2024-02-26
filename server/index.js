const app = require("fastify")();
const path = require("path");
app.register(require("@fastify/static"), {
  root: path.join(__dirname, ".."),
  prefix: "/bingo/",
});

app.get("/", (_, res) => {
  res.redirect("/bingo/");
});

app.listen({ port: process.env.PORT ?? 3000 }, () => {
  console.log(`Server listening on ${process.env.PORT ?? 3000}`);
});
