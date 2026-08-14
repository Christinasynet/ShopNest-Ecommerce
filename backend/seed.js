const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("./model/User");
const Product = require("./model/product");
const Order = require("./model/Order");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedData = async () => {
    try {
        await User.deleteMany();
        await Product.deleteMany();
        await Order.deleteMany();

        const adminUser = await User.create({
            username: "Christina",
            email: "christinasynet58@gmail.com",
            password: "123456",
            role: "admin",
        });

        const normalUser = await User.create({
            username: "John",
            email: "john@test.com",
            password: "123456",
            role: "user",
        });

        const products = await Product.insertMany([
            {
                name: "iPhone 15",
                description: "Apple Smartphone",
                price: 79999,
                category: "Electronics",
                stock: 20,
                imageUrl: ["https://dummyimage.com/iphone.jpg"],
            },
            {
                name: "Samsung Galaxy S24",
                description: "Samsung Smartphone",
                price: 69999,
                category: "Electronics",
                stock: 15,
                imageUrl: ["https://dummyimage.com/samsung.jpg"],
            },
            {
                name: "Boat Headphones",
                description: "Wireless Headphones",
                price: 2999,
                category: "Accessories",
                stock: 50,
                imageUrl: ["https://dummyimage.com/boat.jpg"],
            },
        ]);

        await Order.insertMany([
            {
                user: adminUser._id,
                items: [
                    {
                        product: products[0]._id,
                        qty: 1,
                        price: 79999,
                    },
                ],
                totalPrice: 79999,
                fullName: "Christina Synet",
                address: "Mumbai",
                city: "Mumbai",
                postalCode: "400001",
                country: "India",
                paymentId: "PAY001",
                status: "delivered",
            },
            {
                user: normalUser._id,
                items: [
                    {
                        product: products[1]._id,
                        qty: 1,
                        price: 69999,
                    },
                ],
                totalPrice: 69999,
                fullName: "John Doe",
                address: "Delhi",
                city: "Delhi",
                postalCode: "110001",
                country: "India",
                paymentId: "PAY002",
                status: "delivered",
            },
        ]);

        console.log("Dummy data inserted successfully");
        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedData();