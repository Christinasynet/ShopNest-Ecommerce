const Product = require("../model/product");
const cloudinary = require("../config/cloudinary");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const getProductById = async (req, res) => {
  try {
    const productItem = await Product.findById(req.params.id);

    if (!productItem) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(productItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      stock,
    } = req.body;

    let imageUrl = [];

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      imageUrl.push(result.secure_url);
    }

    const newProduct = new Product({
      name,
      description,
      price,
      category,
      stock,
      imageUrl,
    });

    const createdProduct = await newProduct.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      stock,
    } = req.body;

    const productItem = await Product.findById(req.params.id);

    if (!productItem) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    productItem.name = name || productItem.name;
    productItem.description =
      description || productItem.description;
    productItem.price = price || productItem.price;
    productItem.category =
      category || productItem.category;
    productItem.stock = stock || productItem.stock;

    if (req.file) {
      const result = await cloudinary.uploader.upload(
        req.file.path
      );

      productItem.imageUrl = [result.secure_url];
    }

    const updatedProduct = await productItem.save();

    res.json(updatedProduct);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productItem = await Product.findById(
      req.params.id
    );

    if (!productItem) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await productItem.deleteOne();

    res.json({
      message: "Product removed successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};