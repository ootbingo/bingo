const app = require("fastify")();
const path = require("path");

app.register((childContext, _, done) => {

  childContext.register(require("@fastify/static"), {
    root: path.join(__dirname, ".."),
    prefix: "/bingo/",
  });

  childContext.setNotFoundHandler((_, reply) => {
    return reply.code(404).type("text/html").sendFile("404.html");
  });

  done();
});

app.get("/", (_, res) => {
  res.redirect("/bingo/");
});

app.listen({port: process.env.PORT ?? 3000}, () => {
  console.log(`Server listening on ${process.env.PORT ?? 3000}`);
});
