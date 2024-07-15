import express from "express";

const router = express.Router();

//PRODUCTS
import productsRoutes from "./products.js"
router.use('/', productsRoutes);


export default router;