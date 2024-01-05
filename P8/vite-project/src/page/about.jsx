import { Link, useLoaderData } from "react-router-dom";
import Collapse from "../components/collapse";
import Banner from "../components/banner";
import AboutBanner from "../assets/about_banner.webp";
export default function About() {
  return (
    <main className="about__container">
      <Banner image={AboutBanner} text="" />
      <div className="collapse__container">
        {data.map((item) => (
          <Collapse item={item} />
        ))}
      </div>
    </main>
  );
}
const data = [
  {
    id: "1",
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: "2",
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "3",
    title: "Service",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: "4",
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critère de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];
