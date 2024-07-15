import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const GetAllProducts = async(req, res) => {
  try{
    const products = await prisma.product.findMany();
    return res.status(200).json(products)
  }catch(error){
    return res.status(500).json({ error: 'Error getting data' });
  }
}

export const CreateProduct = async(req, res) => {
  try{
    const { code, name, description, price, quantity, inventoryStatus, category, image, rating} = req.body
    const newProduct = await prisma.product.create({
      data: {
        code: code,
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        inventoryStatus: inventoryStatus,
        category: category,
        image: image,
        rating: rating,
      },
    })
    res.status(200).json({ message: 'Product created successfully', data: newProduct });
  }catch(error){
    console.log(error);
    return res.status(500).json({ error: 'Error creating product' });
  }
}

export const DeleteProducts = async(req, res) => {
  try{
    const {ids} = req.body
    if(ids.length === 0) return res.status(500).json({ error: 'Error deleting products' });
    ids.map(async(id) => {
      await prisma.product.delete({
        where: {
          id: parseInt(id)
        },
      });
    })
    res.status(200).json({ message: 'Products deleted successfully', products: ids });
  }catch(error){
    console.log(error);
    return res.status(500).json({ error: 'Error deleting products' });
  }
}

export const GetProduct = async(req, res) => {
  try{
    const {id} = req.params
    const product = await prisma.product.findUnique({
      where:{
        id: parseInt(id)
      }
    });
    res.status(200).json(product);
  }catch(error){
    console.log(error);
    return res.status(500).json({ error: 'Error getting product' });
  }
}

export const UpdateProduct = async(req, res) => {
  try{
    const { id, code, name, description, price, quantity, inventoryStatus, category, image, rating} = req.body
    const updatedProduct = await prisma.product.update({
      data: {
        code: code,
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        inventoryStatus: inventoryStatus,
        category: category,
        image: image,
        rating: rating,
      },
      where:{
        id: id
      }
    })
    res.status(200).json({ message: 'Product updated successfully', data: updatedProduct });
  }catch(error){
    console.log(error);
    return res.status(500).json({ error: 'Error deleting products' });
  }
}
