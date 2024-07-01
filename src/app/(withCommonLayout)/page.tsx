import About from "@/components/UI/HomePage/About/About";
import Blogs from "@/components/UI/HomePage/Blogs/Blogs";
import Contact from "@/components/UI/HomePage/Contact/Contact";
import Projects from "@/components/UI/HomePage/Project/Project";
import Skills from "@/components/UI/HomePage/Skills/Skills";
import SuccessWork from "@/components/UI/HomePage/SuccessWork/SuccessWork";

const HomePage = () => {
  return (
    <>
      <SuccessWork />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Blogs />
    </>
  );
};

export default HomePage;
