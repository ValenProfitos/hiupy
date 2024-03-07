import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
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