import React from 'react';
import laptopImage from '../images/laptop1.png'; 
import lapLogo from '../images/laplogo.png'; 
import SerachLogo from '../images/searchlogo.png'; 

const Homepage = () => {
  const imageContainerStyle = {
    position: 'relative',
    height: '120vh',
    marginBottom: '100px'
  };

  const imageStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%'
  };

  const coloredBoxStyle = {
    position: 'absolute',
    bottom: 0,
    left: '10%',
    width: '40%',
    height: '30%',
    backgroundColor: '#38A3A5'
  };

  const logoStyle = {
    position: 'absolute',
    top: '120%',
    left: 'calc(50% - 250px)',
    transform: 'translateX(-50%)',
    height: 'auto',
    width: '200px'
  };

  const textStyle = {
    position: 'absolute',
    top: '120%',
    left: 'calc(50% + 50px)',
    color: '#4D2C8B',
    fontSize: '16px',
    textAlign: 'left'
  };

  const learnMoreButtonStyle = {
    position: 'absolute',
    top: '140%',
    left: 'calc(50% + 50px)',
    backgroundColor: 'rgb(242, 141, 53)',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  
  const mediaQueries = `
    @media screen and (max-width: 768px) {
      .image-container {
        height: auto;
      }
      .colored-box {
        height: auto;
      }
      .web-banner {
        padding: 10px;
      }
      .nav {
        flex-direction: column;
      }
      .nav-item {
        margin-bottom: 10px;
      }
      .nav-link {
        display: block;
      }
      .nav-link:hover {
        color: #38A3A5;
      }
      .nav-link:active {
        color: #38A3A5;
      }
      .nav-link:visited {
        color: #38A3A5;
      }
      .nav-link:focus {
        color: #38A3A5;
      }
    }
  `;

  return (
    <div className="home-page">
      <style>{mediaQueries}</style>
      <div className="web-banner" style={{ backgroundColor: '#4D2C8B', color: '#fff', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: '0', color: '#fff' }}>AT DIGITAL</h1>
        </div>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="#services" style={{ color: '#fff' }}>SERVICES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" style={{ color: '#fff' }}>ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" style={{ color: '#fff' }}>CONTACT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#careers" style={{ color: '#fff' }}>CAREERS</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="image-container" style={imageContainerStyle}>
        <div className="colored-box" style={coloredBoxStyle}>
          <p style={{ color: '#fff', textAlign: 'center', fontSize: '20px', lineHeight: '1.5', margin: '0', padding: '20px', fontFamily: 'sans-serif' }}>
            We Crush Your<br/> Competitors, Goals, And <br/>Sales Records - Without <br/>The B.S.
            <br/>
            <button style={{ backgroundColor: 'rgb(242, 141, 53)', color: '#fff', padding: '10px 20px', borderRadius: '5px', marginTop: '20px', cursor: 'pointer', border: 'none' }}>GET FREE CONSULTATION</button>
          </p>
        </div>
        <img src={laptopImage} alt="Laptop" style={imageStyle} />
        <img src={lapLogo} alt="Laptop Logo" style={logoStyle} />
        <p style={textStyle}>
          <span style={{ color: '#6B3CC9', fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Web & Mobile App Development</span><br /><br />
          <span style={{ color: 'black' }}>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</span>
        </p>
        <img src={SerachLogo} alt="Search Logo" style={{ position: 'absolute', top: '150%', left: 'calc(60% + 5px)' }} />
        <button style={{ ...learnMoreButtonStyle, backgroundColor: 'rgb(242, 141, 53)', color: '#fff' }}>LEARN MORE</button>

        <p style={{ ...textStyle, top: '170%', textAlign: 'left', left: 'calc(50% - 500px)', width: '500px' }}>
          <span style={{ color: '#6B3CC9', fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Digital Strategy Consulting</span><br /><br />
          <span style={{ color: 'black', fontSize: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
            <span style={{ color: 'black' }}>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</span>
          </span>
        </p>
        <button style={{ ...learnMoreButtonStyle, top: '195%', left: '250px' }}>LEARN MORE</button>

        <p style={{ ...textStyle, top: '220%', textAlign: 'center', left: '50%', transform: 'translateX(-50%)' }}>
          <span style={{ color: '#6B3CC9', fontSize: '28px', fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>Frequently Asked Questions</span>
        </p>

        <div style={{ backgroundColor: '#E2F2FE', textAlign: 'center', paddingTop: '20px', position: 'absolute', top: '230%', left: '50%', transform: 'translateX(-50%)', width: '65%', height: '150px' }}>
          <p style={{ color: '#7C53D0', fontSize: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: '400', textAlign: 'left', paddingLeft: '20px' }}>
            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
          </p>
          <p style={{ color: '#6F6C8F', fontSize: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: '400', textAlign: 'left', paddingLeft: '20px' }}>
            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.
          </p>
        </div>
        <div style={{ backgroundColor: '#E2F2FE', textAlign: 'center', paddingTop: '20px', position: 'absolute', top: '250%', left: '50%', transform: 'translateX(-50%)', width: '65%', height: '60px' }}>
          <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textAlign: 'left', paddingLeft: '20px' }}>
            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
          </p>
        </div>
        <div style={{ backgroundColor: '#E2F2FE', textAlign: 'center', paddingTop: '20px', position: 'absolute', top: '260%', left: '50%', transform: 'translateX(-50%)', width: '65%', height: '60px' }}>
          <p style={{ color: 'black', fontSize: '16px', fontFamily: 'Poppins, sans-serif', fontWeight: '600', textAlign: 'left', paddingLeft: '20px' }}>
            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
          </p>
        </div>

        <div style={{ backgroundColor: '#6B3CC9', color: '#FFFFFF', textAlign: 'left', padding: '20px', paddingLeft: '50px', paddingRight: '50px', position: 'absolute', top: '280%', left: '50%', transform: 'translateX(-50%)', width: '100%', height: '250px' }}>
          <div style={{ float: 'left', marginRight: '100px' }}>
            <p style={{ margin: '0', fontWeight: 'bold', marginBottom: '10px' }}>AT DIGITAL</p>
            <p style={{ margin: '0' }}>
              Your goal is our target. Not anything in between. We use<br />
              online marketing Platforms and tools to achieve single<br />
              objective - Square business results.
            </p>
          </div>
          <div style={{ float: 'left' }}>
            <p style={{ margin: '0', fontWeight: 'bold', marginBottom: '10px' }}>Our Technologies</p>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li>ReactJS</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>NodeJS</li>
            </ul>
          </div>
          <div style={{ float: 'right' }}>
            <p style={{ margin: '0', fontWeight: 'bold', marginBottom: '10px' }}>Our Services</p>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li>Social Media Marketing</li>
              <li>Web & Mobile App <br></br>Development</li>
              <li>Data & Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
