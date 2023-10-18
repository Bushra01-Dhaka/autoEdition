import { IoCarSport } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { FaHandHoldingHeart, FaHandsHelping } from 'react-icons/fa';
import { MdMiscellaneousServices } from "react-icons/md";
const Features = () => {
  return (
    <div className="container mx-auto pt-20 bg-[#F4F3F0]">
      <h1 className="text-3xl font-bold text-center mb-12">Why Choose Us</h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">

        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <IoCarSport className="text-5xl"></IoCarSport>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Exquisite Car Selection</h2>
            <p>Offer a meticulously curated range of luxurious vehicles, showcasing a variety of prestigious brands, models, and customization options. </p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <FaHandHoldingHeart className="text-5xl"></FaHandHoldingHeart>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Personalized Concierge Service</h2>
            <p>Provide a white-glove, personalized customer experience with a dedicated concierge service.</p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <MdMiscellaneousServices className="text-5xl"></MdMiscellaneousServices>
          </figure>
          <div className="card-body">
            <h2 className="card-title">ELuxury Vehicle Maintenance and Warranty</h2>
            <p>Emphasize your commitment to maintaining the performance and appearance of the vehicles you sell. Offer extended warranties, maintenance packages.</p>
          </div>
        </div>


        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <FaHandsHelping className="text-5xl"></FaHandsHelping>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Financing and Leasing Options</h2>
            <p>Make it easy for customers to acquire their dream car.  Highlight low-interest rates, lease specials, and tailored financing plans for high-end buyers.</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <IoCarSport className="text-5xl"></IoCarSport>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Exclusive Events and Test Drives</h2>
            <p>Organize special events, private showcases, and VIP test drive experiences for your customers. Invite them to exclusive gatherings where they can experience the luxury of the vehicles.</p>
          </div>
        </div>

        <div className="card  bg-base-100 shadow-xl">
          <figure className="mt-4">
            <GrCertificate className="text-5xl"></GrCertificate>
          </figure>
          <div className="card-body">
            <h2 className="card-title">Customization and Bespoke Features</h2>
            <p>Showcase the ability to tailor each vehicle to the {`customer's`} exact specifications. Highlight partnerships with renowned designers, custom options.</p>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Features;
