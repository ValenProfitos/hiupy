// // server/index.js

// //importar modulos

// import express from "express";
// import syncModel from "./syncModel.js";
// import router from "./Router/productoRouter.js";
// import userRouter from "./Router/userRouter.js";
// import recipeRouter from "./Router/recipeRouter.js";
// import shoppingListRouter from "./Router/shoppingListRouter.js";
// import prodRecipeRouter from "./Router/productRecipeRouter.js";
// import productShoppingListRouter from "./Router/productShoppingListRouter.js";
// import { getProductInventory } from "./controller/productInventoryController.js";
// import inventoryRouter from "./Router/inventoryRouter.js";
// import cors from "cors";

// const app = express();

// //Configuración de CORS
// app.use(
//     //Esta poronga no anda asi
//     cors({
//         origin: ["https://hiupy.vercel.app/"],
//         methods: ["POST", "GET"],
//         credentials: true,
//     })
// );

// // Middleware para manejar solicitudes JSON
// app.use(express.json());

// // simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to hiupy" });
// });

// app.listen(3000, async () => {
//     console.log(`Server listening on 3000`);
//     await syncModel();
// });
// //Productos
// app.use("/api", router);

// // Usuarios
// app.use("/api", userRouter);

// // Recetas
// app.use("/api", recipeRouter);

// // Lista de compras
// app.use("/api", shoppingListRouter);

// // Recetas y Productos
// app.use("/api", prodRecipeRouter);

// // Lista de compras y recetas
// app.use("/api", productShoppingListRouter);

// app.use("/api", inventoryRouter);

// // Crear una instancia de Express

// // app.get("/", (req, res) => res.send("Express on Vercel"));

// // app.listen(5000, async () => console.log("Server ready on port 5000."));

// //primer prueba de request datos json
// //app.get( '/verduras', (req,res) =>{
// //    res.json({
// //
// //
// //
// //
// //
// //    })
// //});
