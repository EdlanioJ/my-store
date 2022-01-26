import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const Banner: React.FC = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20 h-32 w-full bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img src="http://links.papareact.com/gi1" alt="gi" loading="lazy" />
        </div>
        <div>
          <img src="http://links.papareact.com/6ff" alt="gil" loading="lazy" />
        </div>
        <div>
          <img src="http://links.papareact.com/7ma" alt="gil" loading="lazy" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
