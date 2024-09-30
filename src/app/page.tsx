import Header from "@/app/(components)/header";
import Hero from "@/app/(components)/hero";
import About from "@/app/(components)/about";
import Speakers from "@/app/(components)/speakers";
import Schedule from "@/app/(components)/schedule";
import Register from "@/app/(components)/register";
import Footer from "@/app/(components)/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Speakers />
      <Schedule />
      <Register />
      <Footer />
    </>
  );
}
