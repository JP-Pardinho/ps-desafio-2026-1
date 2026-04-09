import { Metadata } from "next";
import Carousel from "./_components/Carousel";
import Products from "./_components/Products";
import Categories from "./_components/Categories";

export const metadata: Metadata = {
  title: "Street Brasil | Início",
  description: "Loja de artigos esportivos do Brasil.",
};

export default function Home() {
  return (
    <main>
      <Carousel />
      <Categories />
      <Products />
    </main>
  );
}
