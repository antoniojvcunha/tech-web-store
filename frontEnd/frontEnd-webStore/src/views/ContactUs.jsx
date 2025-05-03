import { Link } from "wouter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactUsForm from "../components/ContactUsForm";

function ContactUs() {
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
            <p>Contact Us</p>
          </div>

          <h1 className="text-4xl font-bold">Contact Us</h1>
        </div>
      </div>
      <div className="max-w-full mx-auto px-4 py-10">
        <div className="flex flex-col gap-5 lg:w-1/2 text-justify">
          <h3 className="text-lg text-red-600 sm:text-xl lg:text-2xl">
            Contact
          </h3>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-5xl">
            Get in Touch With US
          </h1>
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
