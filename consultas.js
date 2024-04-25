//importación de Pool.
//Importar instancia pool.
const pool = require("./configbd")

//Guardar posts.
const guardarPost = async (titulo, img, descripcion, likes) => {
  try {
    //Consulta.
    const consulta = {
      text: "INSERT INTO posts (titulo, img, descripcion, likes) values ($1, $2, $3, $4)",
      values: titulo, img, descripcion, likes,
    };
    const result = await pool.query(consulta);
    return result;
  } catch (error) {
    console.error("Error al guardar posts", error)
  }
};

//Devolver posts.
const getPosts = async () => {
  try {
      //Consulta.
      const result = await pool.query(
      `SELECT * FROM posts`
    );
    return result.rows;
  } catch (error) {
    console.error("Error al devolver los posts", error)
  }
};

//Likes.
const like = async (id) => {
  try {
      //Consulta.
      const result = await pool.query(
      `UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *`,
      [id]
    );
    return result.rows;
  } catch (error) {
    console.error("Error al dar like", error)
  }
};


//Exportaciones de consultas.
module.exports = { guardarPost, getPosts, like };
