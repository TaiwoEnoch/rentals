import Navigation from '../Navigation/Navigation';
import homeBg from '../../assets/home_bg.png';
import Browser from '../Pages/Browse';
import Listing from '../Pages/Listing/Listing';
import Insight from '../Pages/Insight';
import Feature from '../Pages/Feature';
import Blog from '../Pages/Blog/Blog';
import Footer from '../Pages/Footer';

const Home = () => {
  return (
    <>
      <Navigation />
      <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})` }}>
        <div className='flex flex-col justify-center w-4/5 mx-auto pt-20 sm:pt-36'>
          <div className='text-center mb-8'>
            <h1 className='font-bold text-3xl sm:text-5xl mb-4'>
              Discover Your <span className='text-[#E93740]'>Perfect Rental</span>
            </h1>
            <span className='text-lg sm:text-2xl font-extralight'>
              Rent Cars, Houses, and Items in Just a Few Clicks
            </span>
          </div>
          <div className='flex flex-wrap justify-center gap-2 sm:gap-4 w-full sm:w-4/6 mx-auto'>
            <div className='w-full sm:w-auto bg-[#fff] rounded-[20px] p-2'>
              <input
                type='text'
                placeholder='🔍 Search for cars, houses, and more...'
                className="py-2 px-4 sm:px-10 rounded-[20px] w-full cursor-pointer"
              />
            </div>
            <div className='w-full sm:w-auto bg-[#fff] rounded-[20px] p-2'>
              <input
                type='text'
                placeholder='📍 Select Location  ▼'
                className='py-2 px-4 sm:px-10 rounded-[20px] w-full cursor-pointer'
              />
            </div>
            <div className='flex items-center w-full sm:w-auto justify-center bg-[#fff] rounded-[20px] p-2'>
              <span className="text-lg bg-[#E93740] px-2 py-1 rounded-[20px] cursor-pointer">🔍</span>
            </div>
          </div>
        </div>
      </section>
      <Browser />
      <Listing />
      <Insight />
      <Feature />
      <Blog />
      <Footer />
    </>
  )
}

export default Home;