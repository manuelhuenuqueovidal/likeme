//Conexión a la base de datos.
const { Pool } = require("pg");

const pool = new Pool({
  user: "manu",
  host: "localhost",
  password: "canta0912",
  database: "likeme",
  port: 5432,
});

//Funcion para verificar la conexion a la base de datos
const conectarDB = async () => {
  try {
      //Consulta.
      const res = await pool.query(`SELECT NOW()`);
      console.log("Conexion exitosa, fecha y hora actuales 👌:", res.rows[0]);
  } catch (error) {
      console.error("Error al conectar a la Base de datos", error);
  }
}
//Llamar a la funcion de conectarDB
conectarDB();

//exportar el modulo pool
module.exports = pool;