import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Banner from "@/components/UI/HomePage/Banner/Banner";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
        <Navbar />
        <Banner />
        {/* <section id="home" className="px-0 lg:px-5 2xl:px-40 py-0 lg:py-0">
            <Header />
          </section> */}
      </div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
