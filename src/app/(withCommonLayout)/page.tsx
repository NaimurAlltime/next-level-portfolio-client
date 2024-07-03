import About from "@/components/UI/HomePage/About/About";
import Blogs from "@/components/UI/HomePage/Blogs/Blogs";
import Contact from "@/components/UI/HomePage/Contact/Contact";
import Projects from "@/components/UI/HomePage/Project/Project";
import Skills from "@/components/UI/HomePage/Skills/Skills";
import SuccessWork from "@/components/UI/HomePage/SuccessWork/SuccessWork";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Banner from "@/components/UI/HomePage/Banner/Banner";
import Education from "@/components/UI/HomePage/Education/Education";
import Experience from "@/components/UI/HomePage/Experience/Experience";

const HomePage = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 });
  // }, []);

  return (
    <>
      <Banner />
      <SuccessWork />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Blogs />
    </>
  );
};

export default HomePage;
