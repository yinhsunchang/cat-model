import '../CatModel.css'
import front from '../assets/front.jpg';
import back from '../assets/back.jpg';

function Slideshow() {
  const images: string[] = [front,back];

  return (
    <div className="slideshow image">
      {images.map((src, index) => (
        <div
          key={src}
          className="slide"
          style={{
            backgroundImage: `url(${src})`,
            animationDelay: `${index * 5}s`,
          }}
        />
      ))}
    </div>
  )
}

export default Slideshow
