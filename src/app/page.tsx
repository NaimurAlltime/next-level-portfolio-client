import PublicLayout from "@/components/layout/PublicLayout";
import About from "@/components/sections/Home/About/About";
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
      </PublicLayout>
    </main>
  );
}
