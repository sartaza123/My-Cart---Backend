require("dotenv").config();
const mongoose = require("mongoose");
const axios = require("axios");
const Product = require("./src/models/product.model");

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Seeding"))
  .catch((err) => console.log(err));

// Insert Data
const seedProducts = async () => {
  try {
    // Fetch data from dummyjson
    const { data } = await axios.get("https://dummyjson.com/products");

    // 2️⃣ Format data according to your model
    const products = data.products.map((item) => ({
      productName: item.title,
      price: item.price,
      description: item.description,
      stock: item.stock,
      productImageUrl: item.thumbnail,
      category: item.category,
    }));

    //  Clear old data (optional)
    await Product.deleteMany();

    //  Insert new data
    await Product.insertMany(products);

    console.log("Products Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
