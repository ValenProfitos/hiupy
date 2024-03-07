import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "otbzbgfx",
  "otbzbgfx",
  "npjrcNk22j7sqY_bcnCAMgpOhoi5tLrM",
  {
    host: "silly.db.elephantsql.com",
    port: 5432,
    dialect: "postgresql",
  }
);
//check de conexion
async function testConection(){
  try{
    await sequelize.authenticate();
    console.log('Conexion establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
}

// Ejecutar para probar la conexion
testConection();

export default sequelize;