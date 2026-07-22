import "../CatModel.css";
import { SLIDES, ANIMATION_INTERVAL } from "../services/slides";

function Slideshow() {
  return (
    <div className="slideshow image">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className="slide"
          style={{
            backgroundImage: `url(${slide.src})`,
            animationDelay: `${index * ANIMATION_INTERVAL}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Slideshow;
