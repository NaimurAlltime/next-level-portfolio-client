import { Link } from "@/lib/router-events";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[rgba(0,0,0,255)] mt-16">
        <div className="container px-5 mx-auto py-5 md:py-10">
          {/* <!-- Grid --> */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white"
                href="/"
                aria-label="Brand"
              >
                <div className="flex-none justify-center items-center">
                  <Image
                    src="/imgs/car-rent.png"
                    alt="car-rental-logo"
                    width={45}
                    height={45}
                    className="text-white ms-10"
                  />

                  <h1 className="text-xl font-sans md:text-2xl ms-2 font-semibold">
                    Naimur Rahman
                  </h1>
                  <p className="text-sm font-medium justify-center items-center mt-5">
                    An online marriage platform connects individuals seeking
                    lifelong partnerships.
                  </p>
                </div>
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Need Help?</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Member Login
                  </Link>
                </p>
                <p>
                  <Link
                    href="/#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Sign Up
                  </Link>
                </p>

                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Customer Support
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Car Search
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Company</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    href="/about-us"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Reservation
                  </Link>
                </p>
                <p>
                  <Link
                    href="/about-us"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    About us
                  </Link>
                </p>
                <p>
                  <Link
                    href="/contact-us"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Contact us
                  </Link>
                </p>
                <p>
                  <Link
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="/"
                  >
                    Services
                  </Link>{" "}
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Privacy & You</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Terms of Use
                  </Link>
                </p>

                <p>
                  <Link
                    href="/#"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Privacy Policy
                  </Link>
                </p>

                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Be Safe Online
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Report Misuse
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">More</h4>

              <div className="mt-3 grid space-y-3">
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Car Booking Center
                  </Link>
                </p>

                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Rent Car Preview
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Site map
                  </Link>
                </p>
                <p>
                  <Link
                    href="/"
                    className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                  >
                    Loaction Search
                  </Link>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-8 pt-5 border-t-2 border-gray-600 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-400">
                © 2024 Car Renter. All rights reserved.
              </p>
            </div>
            {/* <!-- End Col --> */}

            <div>
              <p className="text-gray-400">
                Passionately created by rentcar.com org
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
