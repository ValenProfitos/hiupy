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
try {
    await sequelize.authenticate();
    console.log('Conexion establecida.');
  } catch (error) {
    console.error('No pudo conectarse:', error);
  }

  export default sequelize


  
