import { useEffect, useState } from 'react';
import fetchNovelties from '../services/noveltieService';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function HeroSlider() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      async function loadNovelties() {
        try {
          const novelties = await fetchNovelties();
          setProducts(novelties);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching novelties:', error);
          setLoading(false);
        }
      }

      loadNovelties();
  }, []);
        

  if (loading) {
    return <div className="text-center py-10">A carregar produtos...</div>;
  }

  if (products.length === 0) {
    return <div className="text-center py-10">Nenhum produto disponível.</div>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-[500px]"
    >
      {Array.isArray(products) && products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="flex items-center justify-between bg-gray-100 h-full px-10 py-6 rounded-xl ">
            <div className="flex flex-col max-w-md">
              <span className="text-lg font-medium">{product.description}</span>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                {product.name} <br />
                <span className="text-gray-300">{product.price}</span>
              </h1>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg w-max">
                Shop Now
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-[350px] object-contain drop-shadow-lg"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HeroSlider;
