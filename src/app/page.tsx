import NavBar from "../components/NavBar";
import SearchBar from "@/components/Searchbar";
import CardIndex from "@/components/CardIndex";
import CategoriesSlide from "@/components/Categories";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <NavBar />
        <SearchBar />
      </header>
      <main className="flex-grow">
        <CategoriesSlide />
        <div className="m-4">
          <CardIndex />
        </div>
      </main>
      <Footer />
    </div>
  );
}
