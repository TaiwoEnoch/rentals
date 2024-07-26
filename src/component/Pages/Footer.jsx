import logo from '../../assets/logo.png'
import face from '../../assets/icons/face.png'
import insta from '../../assets/icons/insta.png'
import twitter from '../../assets/icons/twitter.png'
import linked from '../../assets/icons/linked.png'
import youtube from '../../assets/icons/youtube.png'


const Footer = () => {
  return (
    <>
    <section>
      <div className="mt-32 bg-[#f4f4f4] mb-4">
        <div className="flex flex-wrap justify-between text-start gap-6 py-6 px-4 lg:gap-16 lg:px-10">
          <article className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <div>
              <img src={logo} alt="website logo" className="mx-auto lg:mx-0" />
            </div>
            <div className="mt-4 mb-4 text-center lg:text-left">
              <span className="font-extralight">Sri Lanka&apos;s first &amp; largest platform designed to create an online marketplace exclusively for RENT</span>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#"><img src={insta} alt="instagram icon" /></a>
              <a href="#"><img src={youtube} alt="youtube icon" /></a>
              <a href="#"><img src={face} alt="facebook icon" /></a>
              <a href="#"><img src={linked} alt="linkedin icon" /></a>
              <a href="#"><img src={twitter} alt="twitter icon" /></a>
            </div>
          </article>
          <article className="w-full lg:w-1/5 mb-6 lg:mb-0 flex flex-col gap-4">
            <div className="text-[#e93740] font-bold text-center lg:text-left">
              <p>Navigation</p>
            </div>
            <div className="font-extralight flex flex-col gap-2 text-center lg:text-left">
              <span>About Us</span>
              <span>Blog</span>
              <span>Terms of Use</span>
              <span>Privacy Policy</span>
            </div>
          </article>
          <article className="w-full lg:w-1/5 mb-6 lg:mb-0 flex flex-col gap-4">
            <div className="text-[#e93740] font-bold text-center lg:text-left">
              <p>Featured Locations</p>
            </div>
            <div className="font-extralight flex flex-col gap-2 text-center lg:text-left">
              <span>Kandy</span>
              <span>Anuradhapura</span>
              <span>Badulla</span>
              <span>Colombo</span>
              <span>Kaluthara</span>
            </div>
          </article>
          <article className="w-full lg:w-1/5 mb-6 lg:mb-0 flex flex-col gap-4">
            <div className="text-[#e93740] font-bold text-center lg:text-left">
              <p>Help</p>
            </div>
            <div className="font-extralight flex flex-col gap-2 text-center lg:text-left">
              <span>FAQ</span>
              <span>Contact Us</span>
            </div>
          </article>
          <article className="w-full lg:w-1/5 flex flex-col gap-4">
            <div className="text-[#e93740] font-bold text-center lg:text-left">
              <p>Subscribe to Our Newsletter</p>
            </div>
            <span className="font-extralight text-center lg:text-left">Stay updated with the latest listings and rental tips.</span>
            <div className="flex justify-center lg:justify-start">
              <input type="text" placeholder="Email Address" className="py-2 px-4 rounded-full bg-transparent border" />
            </div>
            <button className="bg-[#e93740] text-white font-bold py-2 w-full  rounded-full mx-auto lg:mx-0">Subscribe</button>
          </article>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <span className="pb-6 align-middle w-3/4 text-center text-gray-500 font-light">
          © Copyright 2024. Designed by Kavinda and Developed by Enoch
        </span>
      </div>
    </section>
    </>
  )
}

export default Footer;