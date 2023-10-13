import Navbar from "./components/Navbar";
import PropertyCard from "./components/PropertyCard";
import Switcher from "./components/Switcher";

export default function Home() {
  return (
    <div className="w-full min-h-[100vh] px-40 py-8 m-0 flex flex-col items-center gap-8  bg-form_gray">
      <Navbar />
      <Switcher />
      <PropertyCard />
    </div>
  );
}
