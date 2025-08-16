import Hero from "@/components/hero";
import Members from "@/components/members";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full pt-30 px-3 md:px-4 lg:px-10 2xl:px-42">
      <Hero />
      <Members />
      <Cta />
    </main>
  );
}
