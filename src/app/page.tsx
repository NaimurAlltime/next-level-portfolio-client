import PublicLayout from "@/components/layout/PublicLayout";
import About from "@/components/sections/Home/About/About";
import Blogs from "@/components/sections/Home/Blogs/Blogs";
import Contact from "@/components/sections/Home/Contact/Contact";
import Skills from "@/components/sections/Home/Skills/Skills";
import SuccessWork from "@/components/sections/Home/SuccessWork/SuccessWork";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <SuccessWork />
        <About />
        <Skills />
        <Contact />
        <Blogs />
      </PublicLayout>
    </main>
  );
}
