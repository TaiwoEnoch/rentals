import Navigation from '../Navigation/Navigation';
import homeBg from '../../assets/home_bg.png';
import Browser from '../Pages/Browse';
// import search from '../../assets/search.png';
// import map from '../../assets/map-pin.png';

const Home = () => {
  return (
    <>
      <Navigation />
      <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})` }}>
        <div className='flex flex-col justify-center w-4/5 mx-auto pt-36'>
          <div className='text-center mb-8'>
            <h1 className='font-bold text-5xl mb-4'>Discover Your <span className='text-[#E93740]'> Perfect Rental</span></h1>
            <span className='text-2xl font-extralight'>Rent Cars, Houses, and Items in Just a Few Clicks</span>
          </div>
          <div className='flex justify-center gap-10 mb-8 font-light cursor-pointer'>
            <span className='text-lg bg-[#E93740] py-0 px-3 text-white rounded-[20px]'>Places</span>
            <span className='text-lg py-0 px-3 rounded-[15px] bg-white'>Rides</span>
            <span className='text-lg py-0 px-3 rounded-[15px] bg-white'>Things</span>
          </div>
          <div className='flex rounded-[30px] justify-center py-4 px-6 gap-4 bg-[#fff] w-4/6 mx-auto'>
            <div>
              <input
                type='text'
                placeholder='🔍 Search for cars, houses, and more...'
                className="py-2 px-10 rounded-[20px] w-full cursor-pointer"
              />
            </div>
            <div>
              <input
                type='text'
                placeholder='📍 Select Location  ▼'
                className='py-2 px-10 rounded-[20px] w-full cursor-pointer'
              />
            </div>
            <div className='flex items-center'>
              <span className="text-lg bg-[#E93740] px-2 rounded-[20px] cursor-pointer">🔍</span>
            </div>
          </div>
        </div>
      </section>
      <Browser />
    </>
  )
}

export default Home;