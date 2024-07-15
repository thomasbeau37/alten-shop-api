import express from "express";
import { CreateProduct, DeleteProducts, GetAllProducts, GetProduct, UpdateProduct } from "../controllers/products.js";

const productsRoutes = express.Router();

productsRoutes.get("/products", GetAllProducts);
productsRoutes.post("/products", CreateProduct);
productsRoutes.delete("/products", DeleteProducts);
productsRoutes.get("/products/:id", GetProduct);
productsRoutes.patch("/products/:id", UpdateProduct);

export default productsRoutes