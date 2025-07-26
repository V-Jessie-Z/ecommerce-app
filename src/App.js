import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import AdminDashboard from './pages/AdminDashboard';
import ProductManager from './pages/ProductManager';
import InventoryTracker from './pages/InventoryTracker';
import Header from './components/Header';
import Footer from './components/Footer';
import './VideoBackground.css';


function App() {
  return (
    <Router>
      <Header />
      <main>
       <div className="video-background-wrapper">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
        poster="https://media.bio.site/public/library/video-bg/light_05_1080x1920.png"
      >
        <source src="https://media.bio.site/public/library/video-bg/light_05_1080x1920.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={<ProductManager />} />
          <Route path="/admin/inventory" element={<InventoryTracker />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
