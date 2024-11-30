import { Hero } from "@/components/hero";
import { Treatments } from "@/components/home/treatments";
import { ChooseUs } from "@/components/home/choose-us";
import { Testimonials } from "@/components/home/testimonial";

export default function Home() {
  return (
    <main>
      <Hero />
      <Treatments />
      <ChooseUs />
      <Testimonials />
    </main>
  );
}
