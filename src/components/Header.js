import { FaInstagram, FaFacebook, FaTiktok, FaHome, FaCartArrowDown, FaCartPlus, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaCartFlatbed } from 'react-icons/fa6';


function Header() {
   return (
     <header style={{ 
        padding: '1rem', 
        borderBottom: '1px solid #ccc',
        backgroundColor:'#701c3f',
        color:'white',
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'1rem' }}>

    <img src="/images/banner-logo.png" alt="Exstaphia Logo" to="/home" style={{ 
        height:'100px',
        marginLeft:'20px', }} />
    <nav style={{
        display:'flex',
        color:'#e2b84f',
        alignItems:'center',
        justifyContent:'space-around'
                     }}>
        <Link to="/home" className='nav-link'>        
                <a to="/home" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: 'white', margin: '0 0.5rem' }}>
                  <FaHome size={24} />
                </a>
        </Link>
        <Link to="/cart" className='nav-link'>
                    <a to="/Cart" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: 'white', margin: '0 0.5rem' }}>
                  <FaCartPlus size={24} />
                </a>
        </Link> 
        <Link to="/admin" className='nav-link'>
                     <a to="/admin" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   style={{ color: 'white', margin: '0 0.5rem' }}>
                  <FaUser size={24} />
                </a>
        </Link>
    </nav>
     </header>
   );
}

export default Header;