import logo from '../../assets/logo.png';
import user from '../../assets/user.png';

const Navigation = () => {
  return (
    <>
      <section>
        <nav className='flex justify-between py-4 px-14 content-center'>
          <div>
            <img src={logo} alt="company logo" className='w-24' />
          </div>
          <ul className='flex gap-6 font-[18px]'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rentals</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className='flex gap-6'>
            <div className="flex items-center gap-2 text-center">
              <img src={user} alt="user image" className="w-4 h-4" />
              <span className='text-[#E93740]'>sign-in</span>
            </div>
            <div>
              <button type='submit' className='bg-[#E93740] text-white py-1 px-4 rounded-[24px]'>+ Post Listing</button>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default Navigation;