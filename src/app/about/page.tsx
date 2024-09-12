import Testimonials from "@/app/sections/about/Testimonials";
import TeamGallery from "@/app/sections/about/TeamGallery";

export default function Page() {
  return (
    <main className="flex flex-col gap-24 lg:gap-32">
      <TeamGallery />
      <Testimonials />
    </main>
  );
}
