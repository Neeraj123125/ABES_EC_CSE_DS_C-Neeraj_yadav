import { useState } from 'react'
import './App.css'

function Header() {
  return (
    <header className="amazon-header">
      <div className="logo-container">
        <img 
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon Logo" 
          className="amazon-logo"
          loading="lazy" // For better performance
        />
      </div>
      <div className="search-container">
        <select className="search-dropdown">
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Fashion</option>
        </select>
        <input type="text" className="search-input" placeholder="Search Amazon" />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <nav className="nav-links">
        <div className="nav-item">
          <span className="nav-line-1">Hello, Sign in</span>
          <span className="nav-line-2">Account & Lists</span>
        </div>
        <div className="nav-item">
          <span className="nav-line-1">Returns</span>
          <span className="nav-line-2">& Orders</span>
        </div>
        <div className="nav-item cart">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">0</span>
        </div>
      </nav>
    </header>
  )
}

function ProductCard({ title, price, image, rating }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200?text=Image+Not+Found'
          }}
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <div className="product-rating">
          {'⭐'.repeat(rating)}
        </div>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  )
}

function ProductSlider({ title, products }) {
  return (
    <div className="product-slider-section">
      <h2 className="slider-title">{title}</h2>
      <div className="product-slider">
        <div className="slider-container">
          {products.map(product => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="amazon-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">About Amazon</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#">Sell products</a></li>
            <li><a href="#">Become an Affiliate</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Help Center</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  const trendingProducts = [
    {
      id: 1,
      title: "Echo Dot (4th Gen)",
      price: 49.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY218_.jpg"
    },
    {
      id: 2,
      title: "Kindle Paperwhite",
      price: 139.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/61QXvWmC4bL._AC_UY218_.jpg"
    },
    {
      id: 7,
      title: "Apple AirPods Pro",
      price: 249.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY218_.jpg"
    },
    {
      id: 8,
      title: "Nintendo Switch OLED",
      price: 349.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71E+KjuboFL._AC_UY218_.jpg"
    }
  ];

  const electronicsProducts = [
    {
      id: 3,
      title: "Samsung Galaxy S23",
      price: 799.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71Ae5l8zpQL._AC_UY218_.jpg"
    },
    {
      id: 4,
      title: "Apple MacBook Air",
      price: 999.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY218_.jpg"
    },
    {
      id: 9,
      title: "LG 4K Smart TV 55\"",
      price: 499.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71LJJrKbezL._AC_UY218_.jpg"
    },
    {
      id: 10,
      title: "Canon EOS R6",
      price: 2499.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71YWX-jvRsL._AC_UY218_.jpg"
    }
  ];

  const dealsProducts = [
    {
      id: 5,
      title: "Sony WH-1000XM4",
      price: 299.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_UY218_.jpg"
    },
    {
      id: 6,
      title: "iPad Air",
      price: 559.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_UY218_.jpg"
    },
    {
      id: 11,
      title: "Fitbit Versa 4",
      price: 199.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61ZXwnqqN+L._AC_UY218_.jpg"
    },
    {
      id: 12,
      title: "Bose QuietComfort 45",
      price: 279.99,
      rating: 5,
      image: "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_UY218_.jpg"
    },
    {
      id: 13,
      title: "GoPro HERO11",
      price: 399.99,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/61PNuXHK+3L._AC_UY218_.jpg"
    }
  ];

  return (
    <div className="amazon-app">
      <Header />
      <main className="main-content">
        <ProductSlider title="Trending Items" products={trendingProducts} />
        <ProductSlider title="Electronics" products={electronicsProducts} />
        <ProductSlider title="Today's Deals" products={dealsProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
