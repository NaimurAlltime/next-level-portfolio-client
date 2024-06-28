import PublicLayout from "@/components/layout/PublicLayout";
import About from "@/components/sections/Home/About/About";
import Skills from "@/components/sections/Home/Skills/Skills";
import SuccessWork from "@/components/sections/Home/SuccessWork/SuccessWork";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <SuccessWork />
        <About />
        <Skills />
      </PublicLayout>
    </main>
  );
}
