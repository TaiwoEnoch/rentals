import Navigation from '../Navigation/Navigation';
// import search from '../../assets/search.png';
// import map from '../../assets/map-pin.png';

const Home = () => {
  return (
    <>
      <Navigation />
      <section>
        <div>
          <div>
            <h1>
              Discover Your Perfect Rental
            </h1>
          </div>
          <div>
            <span>
              Rent Cars, Houses, and Items in Just a Few Clicks
            </span>
          </div>
          <div>
            <span>Places</span>
            <span>Rides</span>
            <span>Things</span>
          </div>
          <div>
            <input type="text" placeholder="Search for cars, houses, and more..." />
            <span></span>
            <span>
            </span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;