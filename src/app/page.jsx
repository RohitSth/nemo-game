import HeroComponent from "./components/HeroComponent";
import FeaturedGames from "./components/FeaturedGames";
import Categories from "./components/Categories";
import AllGames from "./components/AllGames";

export default function Home() {
  return (
    <main className=" text-white mx-auto w-full max-w-screen-xl">
      <HeroComponent />
      <FeaturedGames />
      <Categories />
      <AllGames />
    </main>
  );
}
