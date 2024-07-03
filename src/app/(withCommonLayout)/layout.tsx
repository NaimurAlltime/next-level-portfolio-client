import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const CommonLayout = ({
  children,
}: {
  children: React.ReactNode;
  showBanner?: boolean;
}) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
