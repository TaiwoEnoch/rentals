import { useState } from 'react';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import mobile from '../../assets/mobile.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <section>
        <nav className="fixed top-0 left-0 w-full flex justify-between py-4 px-14 content-center z-50 bg-white shadow-md">
          <div>
            <img src={logo} alt="company logo" className="w-24" />
          </div>
          <ul className="hidden lg:flex gap-6 text-[18px]">
            <li><a href="#" className="block lg:inline-block">Home</a></li>
            <li><a href="#feature" className="block lg:inline-block">Rentals</a></li>
            <li><a href="#" className="block lg:inline-block">Categories</a></li>
            <li><a href="#" className="block lg:inline-block">About Us</a></li>
            <li><a href="#" className="block lg:inline-block">Contact</a></li>
            <li><a href="#" className="block lg:inline-block">Blog</a></li>
          </ul>
          <div className="flex gap-6 items-center">
            <div className="hidden lg:flex items-center gap-2 text-center">
              <img src={user} alt="user image" className="w-4 h-4" />
              <span className="text-[#E93740]">sign-in</span>
            </div>
            <img
              src={mobile}
              alt="toggle button"
              className="lg:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            <div>
              <button
                type="submit"
                className="bg-[#E93740] text-white py-1 px-4 rounded-[24px]"
              >
                + Post Listing
              </button>
            </div>
          </div>
        </nav>
        <ul
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform z-50 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:hidden flex flex-col gap-6 text-[18px] p-4 mt-16`}
        >
          <li><a href="#" className="block lg:inline-block" onClick={closeMenu}>Home</a></li>
          <li><a href="#feature" className="block lg:inline-block" onClick={closeMenu}>Rentals</a></li>
          <li><a href="#" className="block lg:inline-block" onClick={closeMenu}>Categories</a></li>
          <li><a href="#" className="block lg:inline-block" onClick={closeMenu}>About Us</a></li>
          <li><a href="#" className="block lg:inline-block" onClick={closeMenu}>Contact</a></li>
          <li><a href="#" className="block lg:inline-block" onClick={closeMenu}>Blog</a></li>
          <li className="flex items-center gap-2 text-center lg:hidden">
            <img src={user} alt="user image" className="w-4 h-4" />
            <span className="text-[#E93740]">sign-in</span>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Navigation;
