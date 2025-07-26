import './Video.css';

function HomePage() {
  return (
    <div>
      <section className="video-section">
        <img src="/images/banner-pic.jpeg" alt="Exstaphia Banner Picture"  style={{ 
        height:'800px',
        width:'100%', 
        objectFit:'cover'}} />
        <div className="overlay-text">
            <img src="/images/banner-logo.png" alt="Exstaphia Logo" to="/home" style={{ 
           height:'100px',
           marginLeft:'20px', }} />
          <p>Elegance in Every Detail</p>
        </div>
      </section>

      <section>{/* Products or Collections can go here */}</section>
      <section>{/* Featured or About section */}</section>
    </div>
  );
}

export default HomePage;
