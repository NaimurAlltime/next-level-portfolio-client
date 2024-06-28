import React from "react";
import Footer from "../sections/Layout/Footer";
import Header from "../sections/Layout/Header";
import Banner from "../sections/Home/Banner/Banner";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
        <Header />
        <Banner />
        {/* <section id="home" className="px-0 lg:px-5 2xl:px-40 py-0 lg:py-0">
            <Header />
          </section> */}
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default PublicLayout;
