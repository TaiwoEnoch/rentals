const Insight = () => {
  return (
    <>
      <section>
        <article className="flex justify-center mb-8 py-6 items-center bg-[#F4F4F4]">
          <div className="flex flex-col sm:flex-row justify-center py-8 px-3 w-full sm:w-4/5 lg:w-4/5 mx-auto text-center text-white">
            <div className="font-medium mb-4">
              <h1 className="text-4xl sm:text-5xl text-black">Insight and Performance Metrics</h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
              <div className="flex flex-col items-center bg-black py-4 px-20 rounded-lg w-full sm:w-auto transform transition-transform hover:scale-105 hover:shadow-xl">
                <span className="text-xl sm:text-2xl font-bold">5000+</span>
                <p className="font-extralight">Total Listing in the System</p>
              </div>
              <div className="flex flex-col items-center bg-black py-10 px-20 rounded-lg w-full sm:w-auto transform transition-transform hover:scale-105 hover:shadow-xl">
                <span className="text-2xl sm:text-3xl font-bold">1000+</span>
                <p className="font-extralight">Active Listings</p>
              </div>
              <div className="flex flex-col items-center bg-black py-8 px-20 rounded-lg w-full sm:w-auto transform transition-transform hover:scale-105 hover:shadow-xl">
                <span className="text-2xl sm:text-3xl font-bold">30+</span>
                <p className="font-extralight">Articles in the Blog</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default Insight;