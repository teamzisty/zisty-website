import Hero from "@/components/hero";
import Members from "@/components/members";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <div className="flex flex-col items-center w-full px-42">
        <Members />
        <Cta />
      </div>
    </main>
  );
}
