//Servidor Express.
const express = require("express");
const app = express();

//importaciones de consultas.
const {guardarPost, getPosts, like} = require("./consultas");

app.listen(3000 , console.log("Servidor arriba. 👍"))


//Usar Json.
app.use(express.json())

//Ruta por defecto.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//Guardar posts.
app.post("/post", async (req, res) => {
  try {
    //Variables del script en el HTML que guardan la info del usuario. 
    const { usuario, URL, descripcion } = req.body; 
    const likes = 0; 
    const result = await guardarPost([usuario, URL, descripcion, likes]); 
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Devolver posts.
app.get("/posts", async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Likes.
app.put("/post", async (req, res) => {
  try {
    let { id } = req.query;
    const posts = await like(id);
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});