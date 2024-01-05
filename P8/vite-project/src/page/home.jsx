import { Link, useLoaderData } from "react-router-dom";
import logements from "../data/data.json";
import Card from "../components/card";
import Banner from "../components/banner";
import HomeBanner from "../assets/home_banner.webp";

export async function loader() {
  const house = logements;
  return { house };
}
export default function Home() {
  const { house } = useLoaderData();
  return (
    <main className="home">
      <Banner image={HomeBanner} title="Chez vous, partout et ailleurs" />
      <section className="card__container">
        {house.map((test) => {
          return <Card data={test} />;
        })}
      </section>
    </main>
  );
}
