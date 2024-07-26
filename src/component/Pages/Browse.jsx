import thumb from '../../assets/browse-icons/thumb.png';
import house from '../../assets/browse-icons/house.png';
import event from '../../assets/browse-icons/event.png';
import dollar from '../../assets/browse-icons/dollar.png';
import more from '../../assets/browse-icons/more.png';

const Browser = () => {
  return (
    <>
      <section>
        <article className="w-4/5 mx-auto my-28">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">Browse From Top Categories</h1>
            <div className="flex justify-center">
              <hr className="w-28 border-t-2 border-[#E93740] bg-[#E93740]"/>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap cursor-pointer justify-center gap-6">
              <span className="flex font-extralight p-3 gap-2 items-center bg-gray-100 rounded-md">
                <img src={thumb} alt="Holiday Rentals" className="w-8" />
                Holiday Rentals
              </span>
              <span className="flex font-extralight p-3 gap-2 items-center bg-gray-100 rounded-md">
                <img src={house} alt="Residential Spaces" className="w-8" />
                Residential Spaces
              </span>
              <span className="flex font-extralight p-3 gap-2 items-center bg-gray-100 rounded-md">
                <img src={event} alt="Event Spaces" className="w-8" />
                Event Spaces
              </span>
              <span className="flex font-extralight p-3 gap-2 items-center bg-gray-100 rounded-md">
                <img src={dollar} alt="Commercial Properties" className="w-8" />
                Commercial Properties
              </span>
              <span className="flex font-extralight p-3 gap-2 items-center bg-gray-100 rounded-md">
                <img src={more} alt="More" className="w-8" />
                More
              </span>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Browser;