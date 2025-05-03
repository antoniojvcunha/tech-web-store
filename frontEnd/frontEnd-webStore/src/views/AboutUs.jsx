import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div>
        <div className="bg-gray-100 flex flex-col items-center justify-center py-10 gap-2">
          <div className="flex gap-4">
            <Link to="/">
              <p className="hover:text-blue-700 ">Home </p>
            </Link>

            <p>{">"}</p>
            <p>About Us</p>
          </div>

          <h1 className="text-4xl font-bold">About Us</h1>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-10 lg:flex-row items-center justify-center max-w-7xl mx-auto px-4 py-10 lg:gap-25">
        {/* Texto */}
        <div className="flex flex-col gap-5 lg:w-1/2 text-justify">
          <h3 className="text-lg text-red-600 sm:text-xl lg:text-2xl">
            Welcome to TechLand
          </h3>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <div>
            <p className="indent-4">
              At TechLand, our mission is to make cutting-edge electronics
              accessible to everyone through a seamless and reliable online
              shopping experience. We are a passionate team driven by
              innovation, quality, and customer satisfaction.
            </p>
            <p>
              From the latest gadgets to essential tech gear, we carefully
              curate our catalog to meet the evolving needs of modern life.
            </p>
            <p>
              We believe technology should empower and inspire — that’s why we
              are committed to providing only the best products at competitive
              prices, with fast delivery and excellent support. Whether you're a
              gamer, a creator, or just tech-savvy, TechLand is your trusted
              partner for everything electronic.
            </p>
          </div>
          <Link to="/contactus">
            <button
              type="button"
              className="py-2.5 px-6 text-base bg-red-600 text-white rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-300 hover:bg-red-800 w-fit"
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Imagem */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/images/aboutus.jpg"
            alt="TechLand Team"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
      <Footer />

    </>
  );
}

export default AboutUs;
