# 🛍️ ClothStore

Welcome to **ClothStore**! This project is an e-commerce platform designed to provide a seamless online shopping experience for clothing enthusiasts. 🧥👗👚

## 📋 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

- **User Authentication**: Secure login and registration for customers. 🔒
- **Product Catalog**: Browse a wide range of clothing items with detailed descriptions. 🛒
- **Shopping Cart**: Add items to your cart and manage your selections. 🛍️
- **Order Management**: Track your orders and view order history. 📦
- **Responsive Design**: Optimized for both desktop and mobile devices. 📱💻
- **Search Functionality**: Quickly find products using the search bar. 🔍
- **Category Filtering**: Filter products by categories such as men's, women's, and kids' clothing. 👕👖👗
- **Product Reviews**: Read and write reviews for products. ⭐📝
- **Wishlist**: Save your favorite items for future purchases. 💖
- **Payment Integration**: Secure payment processing for orders. 💳

## 🛠️ Technologies Used

- **Frontend**:
  - React.js ⚛️
  - CSS 🎨
  - HTML5 🌐
- **Backend**:
  - Node.js 🟢
  - Express.js 🚀
- **Database**:
  - MongoDB 🍃
- **Authentication**:
  - JSON Web Tokens (JWT) 🛡️
- **Payment Gateway**:
  - Stripe 💰

## 🚀 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nethmith/ClothStore.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd ClothStore
   ```
3. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```
4. **Install frontend dependencies**:
   ```bash
   cd ../frontend/cloth-store-app
   npm install
   ```
5. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory with the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     STRIPE_SECRET_KEY=your_stripe_secret_key
     ```
   - Replace `your_mongodb_connection_string`, `your_jwt_secret`, and `your_stripe_secret_key` with your actual credentials.

## 🎮 Usage

1. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```
2. **Start the frontend application**:
   ```bash
   cd ../frontend/cloth-store-app
   npm start
   ```
3. **Access the application**:  
   Open your browser and navigate to `http://localhost:3000` 🌐

## 🤝 Contributing

We welcome contributions! To get started:

1. **Fork the repository**: Click the "Fork" button at the top right of this page. 🍴
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/ClothStore.git
   ```
3. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes**: Implement your feature or bug fix. 🛠️
5. **Commit your changes**:
   ```bash
   git commit -m "Add feature: your feature name"
   ```
6. **Push to your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**: Navigate to the original repository and click "New Pull Request". 🎉

## 📜 License

This project is licensed under the MIT License. 📄

---

Thank you for visiting **ClothStore**! We hope you enjoy using our platform. If you have any questions or feedback, please feel free to open an issue or contact us. 😊
