import Image from "next/image";
import NavBar from "../components/NavBar";
import SearchBar from "@/components/Searchbar";
import CardIndex from "@/components/CardIndex";
import CategoriesSlide from "@/components/Categories";

export default function Home() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <CategoriesSlide />
      <div className="m-4">
        <CardIndex />
      </div>
    </div>
  );
}
