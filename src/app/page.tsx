import PublicLayout from "@/components/layout/PublicLayout";
import About from "@/components/sections/Home/About/About";
import SuccessWork from "@/components/sections/Home/SuccessWork/SuccessWork";

export default function Home() {
  return (
    <main>
      <PublicLayout>
        <SuccessWork />
        <About />
      </PublicLayout>
    </main>
  );
}
