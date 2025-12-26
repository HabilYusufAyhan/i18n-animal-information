import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAnimalData } from "../services/animal.service";

function App() {
  const [animal, setAnimal] = useState(getAnimalData("lion"));
  const [searchAnimal, setSearchAnimal] = useState("");

  return (
    <div>
      <div>
        <div>
          <input
            onChange={setSearchAnimal(e.target.value)}
            type="text"
            name="animalName"
            id=""
          />
        </div>
        <button
          onClick={() =>
            setAnimal(
              getAnimalData(searchAnimal.trim() ? searchAnimal : "lion")
            )
          }
        >
          Search Animal
        </button>
      </div>
      <div>
        <div>
          <img
            src={animal[0]?.image_link || ""}
            alt={animal[0]?.name || "Animal"}
          />
        </div>
        <div>
          <h1>{animal[0]?.name}</h1>
          <p>{animal[0]?.diet}</p>
          <p>{animal[0]?.habitat}</p>
          <p>{animal[0]?.geo_range}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
