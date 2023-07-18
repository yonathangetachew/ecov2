import '../components/Carousel.js';
import '../components/Carousel.css';
import './Home.css';
import slide1 from '../img/rolex-slideshow1.jpeg';
import slide3 from '../img/rolex-slideshow3.jpg';


const Home = () => {
  return (
    <div>
      <div className="hero-box">
        <h1 className="hero-heading">Luxury Watches</h1>
        <p className="hero-desc">
        Timeless Elegance, Captured on Your Wrist
        </p>
      </div>


      <div className="main-container">
        <main>
          <h1 className="arrivals">Our Latest Attractions</h1>
          <div className="carousel">
            <div className="carousel__item carousel__item--visible">
              <img src= {slide1} alt="Gold" />
            </div>
            <div className="carousel__item">
              <img src={slide3} alt="Silver" />
            </div>
          
            <div className="carousel__actions">
              <button id="carousel__button--prev" aria-label="Previous slide">
                &lt;
              </button>
              <button id="carousel__button--next" aria-label="Next slide">
                &gt;
              </button>
            </div>
          </div>
        </main>

        <div className="new-arrival-info">
          <div className="new-arrival-container">
            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                Browse our Catalog!
              </h2>
              <p className="new-arrival-description">
              Luxury watches embody the perfect fusion of exquisite craftsmanship and
        timeless elegance. These horological marvels are meticulously crafted
        with precision and attention to detail, showcasing the pinnacle of
        mechanical mastery. Gleaming cases, crafted from fine metals like
        18-karat gold or platinum, house intricate dials that serve as a canvas
        for extraordinary complications.
              </p>
            </div>

            <div className="new-arrival-box">
              <h2 className="new-arrival-title">
                Sensational Pieces
              </h2>
              <p className="new-arrival-description">
              Each luxury watch tells a story of
        unparalleled heritage and tradition, with renowned watchmakers
        dedicating countless hours to perfecting every aspect. Whether it's the
        iconic designs of Rolex, the innovative complications of Patek Philippe,
        or the avant-garde creations of Audemars Piguet, luxury watches are a
        symbol of refined taste and status, destined to be cherished as timeless
        heirlooms.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



