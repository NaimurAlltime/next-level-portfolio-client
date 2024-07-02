import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Banner from "@/components/UI/HomePage/Banner/Banner";

const CommonLayout = ({
  children,
  showBanner,
}: {
  children: React.ReactNode;
  showBanner?: boolean;
}) => {
  return (
    <>
      <div className="bg-gradient-to-tr from-[#0235a3] via-[#030a1c] to-[#05174e]">
        <Navbar />
        {showBanner && <Banner />}
      </div>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
