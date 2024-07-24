import angle from '../../../assets/featured/angle.png';
import Listings from './ListingInfo';


const Listing = () => {
  return (
    <>
      <section>
        <article>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Feature Listings</h1>
            <div className="flex justify-center">
              <hr className="w-28 border-t-2 border-[#E93740] bg-[#E93740]"/>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap pt-6 pb-6">
            <ul className="flex gap-4 items-center justify-center flex-wrap w-full md:w-5/6 pb-4">
              <li className='py-1 px-2 bg-[#E93740] text-white rounded-xl font-extralight'>All Items(5125)</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Residential Spaces(64)</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Sports Venues</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Meeting Spaces</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Venue & Buses</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Cars & SUVs</li>
              <li className='bg-[#e5e4e4] text-xs py-1 px-2 rounded-xl font-extralight'>Lorries & Industrial Vehicles</li>
              <img src={angle} alt="" className='w-7' />
            </ul>
          </div>
        </article>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Listings.map((listing) => (
              <article 
                key={listing.id} 
                className="bg-white shadow-md rounded-lg overflow-hidden relative transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105"
              >
                <div className="relative">
                  <img src={listing.img} alt={listing.title} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 rounded-xl right-2 bg-[#77B747] text-white px-2 py-1 text-xs font-bold">For Rent</span>
                </div>
                <div className="p-4">
                  <p className="text-[#E93740] text-sm font-semibold">{listing.amount}</p>
                  <h3 className="mt-2 text-gray-900 text-xl font-medium">{listing.title}</h3>
                  <p className="mt-2 text-gray-500">{listing.size}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <img src={listing.avatar} alt={listing.seller} className="w-10 h-10 rounded-full mr-4" />
                      <div className="text-sm">
                        <span className="text-gray-900 leading-none">{listing.seller}</span>
                        <span className="text-gray-600 block">{listing.Identity}</span>
                      </div>
                    </div>
                    <img src={listing.like} alt="love" className="w-6 h-6" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className='flex justify-center items-center h-full mt-6 mb-8'>
          <button className='font-bold text-center bg-[#E93740] text-white py-2 px-4 rounded-[20px]'>
            Load More...
          </button>
        </div>
      </section>
    </>
  )
}

export default Listing;