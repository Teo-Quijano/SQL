const express = require("express");
const cors = require("cors");
const studentsRouters = require("./routers/students.routers");
const apuntadasRouters = require("./routers/apuntadas.routers");
const impartidasRouters = require("./routers/impartidas.routers");
const notamediaRouters = require("./routers/notamedia.routers");
const marksRouters = require("./routers/marks.routers");

const errorHandlingh = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(studentsRouters);
app.use(apuntadasRouters);
app.use(impartidasRouters);
app.use(notamediaRouters);
app.use(marksRouters);
app.use(errorHandlingh);
app.use(function (request, response, next) {
  response
    .status(404)
    .json({ error: true, codigo: 404, message: "Endpoint not found" });
});


module.exports = app;