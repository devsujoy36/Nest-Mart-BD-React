import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import './Hero.css';

// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 60000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:p-20 hero-slide-1 p-10 rounded-3xl mt-8 flex flex-col items-start gap-8 ">
            <h1 className="lg:text-7xl text-5xl font-semibold text-black">Dont miss amazing <br /> grocery deals
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-500">Sign Up for Daily Update of Our Special Deals</p>
            <div
              className="bg-white flex rounded-full justify-between items-center lg:gap-4 gap-1 mt-8 overflow-hidden">
              <div>
                <img className="pl-3 lg:pl-6" src="../../../public/assets/icon-plane.png" alt="" />
              </div>

              <input className="focus:outline-none text-sm lg:text-lg bg-white text-black  w-4/6" type="email"
                placeholder="Your email address" />
              <div>
                <button id=""
                  className="bg-emerald-500 text-white lg:px-8 px-4 py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition">Subscribe</button>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="lg:p-20 hero-slide-2 p-10 rounded-3xl mt-8 flex flex-col items-start gap-8">
            <h1 className="lg:text-7xl text-5xl font-semibold text-black">Fresh Vegetables <br /> Big Discounts
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-500">Save upto 50% off on your first order</p>
            <div
              className="bg-white flex rounded-full justify-center items-center lg:gap-4 gap-1 mt-8 overflow-hidden">
              <div>
                <img className="pl-3 lg:pl-6" src="../../../public/assets/icon-plane.png" alt="" />
              </div>
              <input className="focus:outline-none text-sm lg:text-lg  bg-white text-black w-4/6" type="email"
                placeholder="Your email address" />
              <button id="for-categories"
                className="bg-emerald-500 text-white lg:px-8 px-4 py-2 lg:py-4 rounded-full font-semibold hover:bg-emerald-400 active:scale-95 transition">Subscribe</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>






    </div>
  )
}

export default Hero