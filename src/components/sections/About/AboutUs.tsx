import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="">
      {/* about us */}
      <div className="md:flex gap-1 max-w-screen-xl mx-auto items-center p-2 md:p-0">
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 tracking-widest">
            About Us
          </h2>
          <p className="mt-5 leading-8 text-justify w-full md:w-4/5">
            SHR Car Rental provides top-notch car rental services tailored to
            meet your needs. With a diverse fleet of vehicles and a commitment
            to customer satisfaction, we offer convenient solutions for all your
            transportation requirements. Whether it&apos;s for business or leisure,
            trust SHR Car Rental to deliver a seamless experience every time.
            Rent with us and enjoy the journey hassle-free.
          </p>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            width={120}
            height={100}
            className="h-[380px] w-full"
            src="https://i.ibb.co/7r9pSSB/1707320605366-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="md:flex gap-8 max-w-screen-xl mx-auto items-center p-2 md:p-0 mt-8">
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Image
            width={120}
            height={100}
            className="h-[400px] w-full"
            src="https://img.freepik.com/premium-photo/front-view-white-european-midsized-sport-utility-vehicle-standing-parked-suburban-family-truck-modern-car_782515-8721.jpg?w=900"
            alt=""
          />
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in-down"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h2 className="text-3xl font-semibold text-gray-500 tracking-widest mt-4">
            CORE VALUES
          </h2>
          <p className="mt-4 leading-8 text-justify w-full md:mx-3 mx-1">
            We pride ourselves on our exceptional customer service and strive to
            make your rental experience as seamless and stress-free as possible.
            Our knowledgeable staff is always available to assist you with any
            questions or concerns you may have, and we are committed to ensuring
            that you have a smooth and enjoyable rental experience. At SHR Car
            Rental, we are dedicated to providing our customers with the highest
            quality rental cars at the most competitive prices. We believe that
            everyone deserves reliable transportation, and we work hard to make
            our services accessible to everyone. Thank you for considering
            SHRCARS for your rental car needs. We look forward to serving you
            and providing you with a safe, reliable, and enjoyable rental
            experience.
          </p>
        </div>
      </div>
      {/* about us*/}
    </div>
  );
};

export default AboutUs;
