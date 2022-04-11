import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <a href="/" className="logo">
            CLONEFLIX
          </a>
          <nav className="navbar">
            <a href="/">Início </a>
            <a href="/">Séries </a>
            <a href="/">Filmes </a>
            <a href="/">Documentários</a>
          </nav>
        </div>
      </header>
      <main>
        <div className="main-content">
          <div className="container">
            <h3 className="film-title">House of Cards</h3>
            <p className="descricao">
              House of Cards é uma adaptação do romance homônimo escrito por
              Michael Dobbs e da minissérie britânica criada por Andrew Davies.
              Assista agora essa nova temporada que está imperdível!
            </p>
            <div className="buttons">
              <button className="btn">
                <i class="fa-solid fa-play"></i> ASSISTIR AGORA
              </button>
              <button className="btn">
                <i class="fa-solid fa-circle-info"></i> MAIS INFORMAÇÕES
              </button>
            </div>
          </div>
        </div>
        <div className="carousel">
          <Slider {...settings}>
            <div className="carousel-item">
              <img
                src={require("./img/bfHTsg7YpUd7YkLSXEeTKjeg7BE.jpg")}
                alt="slide1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/d9yefq8dNke4UbuqStBtUcO9TxD.jpg")}
                alt="slide2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/f4SvCKIUrC2cDR7Xo4k1kaGAqQ2.jpg")}
                alt="slide3"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/GM1yyjtc1wcmG3RLAERRmSFm1e.jpg")}
                alt="slide4"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg")}
                alt="slide5"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg")}
                alt="slide6"
              />
            </div>
            <div className="carousel-item">
              <img
                src={require("./img/zbGN4QBrKoT3HO7etj4FvlM3OZb.jpg")}
                alt="slide7"
              />
            </div>
          </Slider>
        </div>
      </main>
    </div>
  );
}

export default App;
