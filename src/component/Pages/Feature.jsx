import img1 from '../../assets/location/location_1.png';
import img2 from '../../assets/location/locate_2.png';
import img3 from '../../assets/location/locate_3.png';
import img4 from '../../assets/location/locate_4.png';
import img5 from '../../assets/location/locate_5.png';
import img6 from '../../assets/location/locate_6.png';

const Feature = () => {
  return (
    <>
      <section id='feature' className="w-11/12 lg:w-4/5 m-auto h-auto lg:h-screen">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2">Featured Locations</h1>
          <div className="flex justify-center">
            <hr className="w-28 border-t-2 border-[#E93740] bg-[#E93740]" />
          </div>
        </div>
        <article className="grid grid-rows-6 lg:grid-rows-2 grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-full">
          <div className="relative h-60 lg:h-3/5 row-span-1 lg:row-span-2 col-span-1 transform transition-transform hover:scale-105 hover:shadow-xl">
            <img src={img1} alt="Kandy" className="w-full h-full bg-slate-900 opacity-90 object-cover" />
            <p className="absolute bottom-4 left-4 text-white text-lg">Kandy</p>
          </div>
          <div className="relative col-span-1 lg:col-span-2 row-span-1 grid grid-cols-2 gap-4 h-56 lg:h-full">
            <div className="relative transform transition-transform hover:scale-105 hover:shadow-xl h-full">
              <img src={img2} alt="Anuradhapura" className="w-full h-full object-cover bg-slate-900 opacity-90" />
              <p className="absolute bottom-2 left-2 text-white text-lg">Anuradhapura</p>
            </div>
            <div className="relative transform transition-transform hover:scale-105 hover:shadow-xl h-full">
              <img src={img3} alt="Gampaha" className="w-full h-full object-cover bg-slate-900 opacity-90" />
              <p className="absolute bottom-2 left-2 text-white text-lg">Gampaha</p>
            </div>
            <div className="relative transform transition-transform hover:scale-105 hover:shadow-xl h-full">
              <img src={img4} alt="Badulla" className="w-full h-full object-cover bg-slate-900 opacity-90" />
              <p className="absolute bottom-2 left-2 text-white text-lg">Badulla</p>
            </div>
            <div className="relative transform transition-transform hover:scale-105 hover:shadow-xl h-full">
              <img src={img5} alt="Jaffna" className="w-full h-full object-cover bg-slate-900 opacity-90" />
              <p className="absolute bottom-2 left-2 text-white text-lg">Jaffna</p>
            </div>
          </div>
          <div className="relative h-60 lg:h-2/5 row-span-1 col-span-1 transform transition-transform hover:scale-105 hover:shadow-xl">
            <img src={img6} alt="Colombo" className="w-full h-full object-cover bg-slate-900 opacity-90" />
            <p className="absolute bottom-4 left-4 text-white text-lg">Colombo</p>
          </div>
        </article>
      </section>
    </>
  )
}

export default Feature;
