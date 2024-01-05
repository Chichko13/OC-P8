import { Link, useLoaderData } from "react-router-dom";
import logements from "../data/data.json";
import Collapse from "../components/collapse";
import Carrousel from "../components/caroussel";
import Stars from "../components/stars";
import Tags from "../components/tags";

export async function loader({ params }) {
  console.log(params);
  const house = logements.find((el) => {
    return el.title.toLowerCase().split(" ").join("_") === params.houseId;
  });
  return { house };
}
export default function House() {
  const { house } = useLoaderData();
  console.log(house);
  return (
    <main className="house">
      <div className="house__carrousel">
        <Carrousel slides={house.pictures} title={house.title} />
      </div>
      <div className="house__top">
        <div className="house__top--text">
          <h1>{house.title}</h1>
          <p>{house.location}</p>
          <Tags tags={house.tags} />
        </div>
        <div className="house__host">
          <div className="house__host--container">
            <p className="house__host--p">{house.host.name}</p>
            <img
              className="house__host--img"
              src={house.host.picture}
              alt={house.host.name}
            />
          </div>
          <Stars rating={house.rating} />
        </div>
      </div>

      <div className="house__collapse">
        <Collapse item={{ title: "Description", content: house.description }} />
        <Collapse
          item={{
            title: "Equipements",
            content: house.equipments,
          }}
        />
      </div>
    </main>
  );
}
