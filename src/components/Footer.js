import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      borderTop: '1px solid #ccc',
      backgroundColor: '#701c3f',
      color: 'white',
      textAlign: 'center'
    }}>
      <h4>Follow Us</h4>
      <div style={{ marginTop: '0.5rem' }}>
        <a href="https://www.instagram.com/exstaphia" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{ color: 'white', margin: '0 0.5rem' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61577177691052"
           target="_blank" 
           rel="noopener noreferrer"
           style={{ color: 'white', margin: '0 0.5rem' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://www.tiktok.com/@exstaphia" 
           target="_blank" 
           rel="noopener noreferrer"
           style={{ color: 'white', margin: '0 0.5rem' }}>
          <FaTiktok size={24} />
        </a>
      </div>
    <p>&copy; {new Date().getFullYear()} Exstaphia Jewellery</p>
    </footer>
  );
}

export default Footer;
