import { FaArrowLeft } from "react-icons/fa";

function HomePage() {
  return (
    <div>
      <section
        className="image-section" 
        style={{
          position: 'relative',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <img
          src="/images/banner-image.jpeg"
          alt="Exstaphia Banner Picture"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Dim overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.33)',
            zIndex: 2,
          }}
        ></div>

        {/* Overlay Content */}
        <div
          className="overlay-text"
          style={{
            position: 'absolute',
            top: '45%',
            right: '5%',
            transform: 'translateY(-55%)',
            color: 'white',
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '20px',
            maxWidth: '90%',
            width: '500px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 100,
            textAlign: 'right',
          }}
        >
          <h2 style={{ fontSize: '2rem', fontWeight: 100, margin: 0 }}>
            Elegance in Every Detail
          </h2>

          <p style={{ fontWeight: 100, lineHeight: 1.6, margin: 0 }}>
            Discover the art of timeless elegance with Exstaphia — where every piece of jewellery is crafted to empower, enchant, and endure.
            Rooted in sophistication and designed for the bold, our stainless steel, water-resistant pieces are made to elevate your everyday look with effortless grace.
          </p>

          <button
            className="btn btn-dark"
            style={{
              backgroundColor: 'rgb(112, 28, 63)',
              height: '50px',
              padding: '0 30px',
              color: 'white',
              fontSize: '1rem',
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 100,
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.42)',
              border: 'none',
              letterSpacing: '1px',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            Shop Now
          </button>
        </div>
      </section>
     

     {/* Category section */}
   <section style={{ padding: '60px 30px' , paddingBottom: '100px'}}>
  <h2 style={{
    textAlign: 'center',
    color: 'rgb(112, 28, 63)',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 100,
    fontSize: '2rem',
    marginBottom: '40px',
   
  }}>
    Shop by Category
  </h2>

  <div style={{
    display: 'flex',
    gap: '10px',
    justifyContent:'space-around',
    maxWidth: '100%',
    textAlign:'center',
    margin: '0 auto',
    
  }}>
    {[
      { title: 'Necklaces', img: '/images/Necklaces.jpeg' },
      { title: 'Bracelets', img: '/images/Bracelets.jpeg' },
      { title: 'Bangles', img: '/images/GoldBangles.jpeg' },
      { title: 'Earrings', img: '/images/Earrings.jpeg' },
      { title: 'Jewellery Sets', img: '/images/Sets.jpeg' },
      { title: 'Accessories', img: '/images/ClawClips.jpeg' },
    ].map(({ title, img }) => (
      <div key={title} style={{
        width: '100%',
        maxWidth: '250px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.03)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img src={img} alt={title} style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          filter: 'brightness(0.95)'
        }} />
        <div style={{
          backgroundColor: 'rgb(112, 28, 63)',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 100,
          fontSize: '1rem'
        }}>
          {title}
        </div>
      </div>
    ))}
  </div>
</section>

    {/*Silver Section*/}

    <section style={{
  display: 'flex',
  width: '100%',
  minHeight: '500px',
  flexDirection: 'row',
  flexWrap: 'nowrap',
}}>
  {/* Left Side - Image */}
  <div style={{
    flex: 1,
    maxHeight: '500px'
  }}>
    <img 
      src="/images/Silver.jpeg" 
      alt="About Exstaphia" 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} 
    />
  </div>

  {/* Right Side - Text */}
  <div style={{
    flex: 1,
    backgroundColor: '#fff',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: 'rgb(112, 28, 63)'
  }}>
    <h2 style={{
      fontWeight: 100,
      fontSize: '2rem',
      marginBottom: '20px'
    }}>
      Silver that speaks Softly
    </h2>
    <p style={{
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '30px',
      maxWidth: '500px'
    }}>
      Delicate yet durable, our silver pieces add a touch of grace to every moment. Made for the daydreamers and romantics at heart, Exstaphia silver jewellery offers effortless shine and quiet charm you’ll never want to take off.
    </p>
    <button style={{
      backgroundColor: 'rgb(112, 28, 63)',
      border: 'none',
      color: 'white',
      padding: '12px 28px',
      borderRadius: '10px',
      fontSize: '1rem',
      fontWeight: 300,
      maxWidth: '200px',
      letterSpacing: '1px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer'
    }}>
      Shop Silver
       
    </button>
  </div>
</section>


      {/* Collections section */}
<section style={{ padding: '50px 0' }}>
  <h2
    style={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',
      fontSize: '2rem',
      color: 'rgb(112, 28, 63)',
      textAlign: 'center',
      marginBottom: '40px',
    }}
  >
    Collections
  </h2>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap',
      padding: '0 30px',
    }}
  >
    {[
      {
        title: 'Christian Collection',
        image: '/images/GoldCross.jpeg',
        description: 'Discover elegant pieces crafted with faith and purpose.',
      },
      {
        title: 'Ethereal Collection',
        image: '/images/banner-pic.jpeg',
        description: 'Dreamy, delicate pieces that glow with gentle charm.',
      },
      {
        title: 'Bold Collection',
        image: '/images/rings.jpeg',
        description: 'Bold jewelry made to captivate and stand out.',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="card"
        style={{
          position: 'relative',
          height: '300px',
          width: '400px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
        onMouseEnter={(e) => {
          const description = e.currentTarget.querySelector('.description');
          description.style.opacity = 1;
          description.style.transform = 'translateY(0)';
        }}
        onMouseLeave={(e) => {
          const description = e.currentTarget.querySelector('.description');
          description.style.opacity = 0;
          description.style.transform = 'translateY(20px)';
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: '0.3s ease',
          }}
        />

        {/* Always-visible gradient overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '40%',
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0.87) 60%, transparent)',
            zIndex: 1,
          }}
        ></div>

        {/* Title */}
        <p
          style={{
            position: 'absolute',
            bottom: '20px',
            width: '100%',
            textAlign: 'center',
            color: 'rgb(112, 28, 63)',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            zIndex: 2,
          }}
        >
          {item.title}
        </p>

        {/* Description - visible on hover only */}
        <div
          className="description"
          style={{
            position: 'absolute',
            bottom: '10px',
            width: '100%',
            alignItems:'center',
            textAlign: 'center',
            color: 'rgb(112, 28, 63)',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            fontSize: '0.9rem',
            padding: '0 10px',
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
            zIndex: 2,
          }}
        >
          {item.description}
        </div>
      </div>
    ))}
  </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <div style={{
             border:'1px solid rgb(112, 28, 63)',
             width: '50%',
             alignSelf:'center',
             margin: '20px auto'
                   }}> 
     </div>
     <br></br>
     <br></br>
</section>

   {/*About Section*/}

    <section style={{
  display: 'flex',
  width: '100%',
  minHeight: '500px',
  flexDirection: 'row',
  flexWrap: 'nowrap',
}}>
  {/* Left Side - Image */}
  <div style={{
    flex: 1,
    maxHeight: '500px'
  }}>
    <img 
      src="/images/overview.jpeg" 
      alt="About Exstaphia" 
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }} 
    />
  </div>

  {/* Right Side - Text */}
  <div style={{
    flex: 1,
    backgroundColor: '#fff',
    padding: '60px 40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Roboto, sans-serif',
    color: 'rgb(112, 28, 63)'
  }}>
    <h2 style={{
      fontWeight: 100,
      fontSize: '2rem',
      marginBottom: '20px'
    }}>
      The Story of Exstaphia
    </h2>
    <p style={{
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '30px',
      maxWidth: '500px'
    }}>
      Designed for the elegant soul and crafted to last — Exstaphia is where timeless beauty meets everyday strength. Our pieces are more than accessories; they’re a celebration of confidence, individuality, and charm.</p>

  </div>
</section>
     <br></br>
     <br></br>


  {/* What we provide Section */}
      <section className="flex-container" >
        <h2
    style={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',
      fontSize: '2rem',
      color: 'rgb(112, 28, 63)',
      textAlign: 'center',
      marginBottom: '40px',
    }}
    >
     What We Serve 
    </h2>

      <div style={{
        display:'flex',
        justifyContent:'space-around',
        textAlign:'center',
        color:'rgb(112, 28, 63)',
        padding:'50px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 100,
      }}>
        <div>
           <img src='/Icons/1.png' alt='Delivery Icon' style={{
            height:'100px',
            alignContent:'center',
            backgroundColor:'rgb(112, 28, 63)',
            padding:'20px',
            borderRadius:'100px',
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.80)'
           }}></img>
           <p> Affordable Nationwide Delivery</p>
        </div>
        <div>
             <img src='/Icons/2.png' alt='Quality Icon' style={{
            height:'100px',
            alignContent:'center',
            backgroundColor:'rgb(112, 28, 63)',
            padding:'20px',
            borderRadius:'100px',
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.80)'
           }}></img>
           <p> Quality Long Lasting Jewellery</p>
            
        </div>
        <div>
             <img src='/Icons/3.png' alt='Support Icon' style={{
            height:'90px',
            alignContent:'center',
            backgroundColor:'rgb(112, 28, 63)',
            padding:'20px',
            borderRadius:'100px',
            boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.80)'
           }}></img>
           <p>24 Hour Contact and Support</p>
        </div>
        </div>
      </section>
      <div style={{
             border:'1px solid rgb(112, 28, 63)',
             width: '50%',
             alignSelf:'center',
             margin: '20px auto'
                   }}> 
     </div>
   
     <br></br>
     <br></br>
     <section style={{
        padding:'30px'
     }}>
     <h2
      style={{
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '100',
      fontSize: '2rem',
      color: 'rgb(112, 28, 63)',
      textAlign: 'center',
      marginBottom: '40px',
    }}
    >
     Join The World Of Exstaphia
    </h2>
    <p style={{
     textAlign:'center',
     color: 'rgb(112, 28, 63)',
     fontWeight:'200'
    }}>
    Sign up to receive email updates from Exstaphia about the latest collections and news. You can unsubscribe at any time at no cost.</p>
  
   <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    padding: '30px',
    fontFamily: 'Roboto, sans-serif',
  }}>
    <input
      placeholder="Enter your email"
      style={{
        padding: '12px 16px',
        border: '1px solid rgb(112, 28, 63)',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 100,
        outline: 'none',
        width: '280px',
        fontFamily: 'Roboto, sans-serif',
        color: '#333',
      }}
    />

    <button
      style={{
        backgroundColor: 'rgb(112, 28, 63)',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1rem',
        fontWeight: 100,
        cursor: 'pointer',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = 'rgb(130, 35, 75)'}
      onMouseOut={(e) => e.target.style.backgroundColor = 'rgb(112, 28, 63)'}
    >
      Submit
    </button>
  </div>
  </section>
  </div>
  );
}
export default HomePage;
