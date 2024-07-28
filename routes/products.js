import express from "express";
import { CreateProduct, DeleteProducts, GetAllProducts, GetProduct, UpdateProduct } from "../controllers/products.js";

const productsRoutes = express.Router();

/**
 * @openapi
 * /products:
 *   get:
 *     tags: [Products]
 *     description: Récupère tous les produits.
 *     responses:
 *       200:
 *         description: Retourne tous les produits.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   code:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 *                   inventoryStatus:
 *                     type: string
 *                   category:
 *                     type: string
 *                   image:
 *                     type: string
 *                   rating:
 *                     type: integer
 *       500: 
 *         description: Erreur
 */
productsRoutes.get("/products", GetAllProducts);

/**
 * @openapi
 * /products:
 *   post:
 *     tags: [Products]
 *     description: Création d'un produit.
 *     requestBody:
 *       required: true
 *       content:
 *         json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - name
 *               - description
 *               - price
 *               - quantity
 *               - inventoryStatus
 *               - category
 *               - image
 *               - rating
 *             properties:
 *               code:
 *                 type: string
 *                 description: code
 *               name:
 *                 type: string
 *                 description: nom
 *               description:
 *                 type: string
 *                 description: description
 *               price:
 *                 type: integer
 *                 description: prix
 *               quantity:
 *                 type: integer
 *                 description: quantité
 *               inventoryStatus:
 *                 type: string
 *                 description: statut de l'inventaire
 *               category:
 *                 type: string
 *                 description: catégorie
 *               image:
 *                 type: string
 *                 description: image
 *               rating:
 *                 type: integer
 *                 description: note
 *     responses:
 *       200:
 *         description: Retourne le produit modifié.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                      type: integer
 *                     code:
 *                      type: string
 *                     name:
 *                      type: string
 *                     description:
 *                      type: string
 *                     price:
 *                      type: integer
 *                     quantity:
 *                      type: integer
 *                     inventoryStatus:
 *                      type: string
 *                     category:
 *                      type: string
 *                     image:
 *                      type: string
 *                     rating:
 *                      type: integer
 *       500: 
 *         description: Erreur
 */
productsRoutes.post("/products", CreateProduct);

/**
 * @openapi
 * /products:
 *   delete:
 *     tags: [Products]
 *     description: Supprimer un ou plusieurs produits.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ids:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Identifiants des produits à supprimer
 *             required:
 *               - ids
 *     responses:
 *       200:
 *         description: Retourne les ID des produits supprimés.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: integer
 *       500: 
 *         description: Erreur
 */
productsRoutes.delete("/products", DeleteProducts);

/**
 * @openapi
 * /products/{id}:
 *   get:
 *     tags: [Products]
 *     description: Récupère un produit avec son id.
 *     parameters:
 *       - name: id
 *         in: path 
 *         description: Identifiant unique du produit
 *         required: true 
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Retourne un produit.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 code:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: integer
 *                 quantity:
 *                   type: integer
 *                 inventoryStatus:
 *                   type: string
 *                 category:
 *                   type: string
 *                 image:
 *                   type: string
 *                 rating:
 *                   type: integer
 *       500: 
 *         description: Erreur
 */
productsRoutes.get("/products/:id", GetProduct);

/**
 * @openapi
 * /products:
 *   patch:
 *     tags: [Products]
 *     description: Mise à jour d'un produit.
 *     requestBody:
 *       required: true
 *       content:
 *         json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - code
 *               - name
 *               - description
 *               - price
 *               - quantity
 *               - inventoryStatus
 *               - category
 *               - image
 *               - rating
 *             properties:
 *               id:
 *                 type: integer
 *                 description: identifiant du produit
 *               code:
 *                 type: string
 *                 description: code
 *               name:
 *                 type: string
 *                 description: nom
 *               description:
 *                 type: string
 *                 description: description
 *               price:
 *                 type: integer
 *                 description: prix
 *               quantity:
 *                 type: integer
 *                 description: quantité
 *               inventoryStatus:
 *                 type: string
 *                 description: statut de l'inventaire
 *               category:
 *                 type: string
 *                 description: catégorie
 *               image:
 *                 type: string
 *                 description: image
 *               rating:
 *                 type: integer
 *                 description: note
 *     responses:
 *       200:
 *         description: Retourne le produit modifié.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                      type: integer
 *                     code:
 *                      type: string
 *                     name:
 *                      type: string
 *                     description:
 *                      type: string
 *                     price:
 *                      type: integer
 *                     quantity:
 *                      type: integer
 *                     inventoryStatus:
 *                      type: string
 *                     category:
 *                      type: string
 *                     image:
 *                      type: string
 *                     rating:
 *                      type: integer
 *       500: 
 *         description: Erreur
 */
productsRoutes.patch("/products/:id", UpdateProduct);

export default productsRoutes