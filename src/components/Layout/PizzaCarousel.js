import Carousel from "react-bootstrap/Carousel";
import "./PizzaCarousel.css";

const PizzaCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item className="carousel-all carousel-item-one">
        <Carousel.Caption>
          <h3>The best quality ingredients</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-two">
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
      <Carousel.Item className="carousel-all carousel-item-three">
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        <div className="hero-shadow"></div>
      </Carousel.Item>
    </Carousel>
  );
};

export default PizzaCarousel;
