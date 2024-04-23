import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import './AnimalDetail.css';

function AnimalDetail() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  //
  const [animalData, setAnimalData] = useState({});
  //

  useEffect(() => {
    // console.log("params:", params);
    // console.log("searchParams id:", searchParams.get("id"));
    // console.log("searchParams animalname:", searchParams.get("animalname"));
    const init = async () => {
      const animalname = searchParams.get("animalname");
      if (animalname) {
        const res = await axios
          .get(
            "https://raw.githubusercontent.com/khawkriab/animal-database/main/animal-list.json",
            {
              headers: { "Content-Type": "application/json" },
            }
          )
          .then(({ data }) => data)
          .catch((err) => console.error("err => ", err));
        console.log("res => ", res);

        const n = res.data.find((f) => f.animal === animalname);
        let obj = {
          ...n,
          animalName: n.animal,
        };
        setAnimalData({ ...obj });
        console.log("obj:", obj);
      }
    };

    init();
  }, [searchParams.get("animalname")]);
  return (
    <div className="animal-detail-container">
      <h1>Animal Detail</h1>
      <ul>
      <li><span>Animal Name:</span> {animalData.animal}</li>
        <li><span>Height:</span> {animalData.height} {animalData.heightUnit}</li>
        <li><span>Weight:</span> {animalData.weight} {animalData.weightUnit}</li>
        <li><span>Color:</span> {animalData.color}</li>
        <li><span>Lifespan:</span> {animalData.lifespan} {animalData.lifespanUnit}</li>
        <li><span>Diet:</span> {animalData.diet}</li>
        <li><span>Habitat:</span> {animalData.habitat}</li>
        <li><span>Predators:</span> {animalData.predators}</li>
        <li><span>Average Speed:</span> {animalData.averageSpeed} {animalData.averageSpeedUnit}</li>
        <li><span>Countries Found:</span> {animalData.countriesFound}</li>
        <li><span>Conservation Status:</span> {animalData.conservationStatus}</li>
        <li><span>Family:</span> {animalData.family}</li>
        <li><span>Gestation Period:</span> {animalData.gestationPeriod} {animalData.gestationPeriodUnit}</li>
        <li><span>Top Speed:</span> {animalData.topSpeed} {animalData.topSpeedUnit}</li>
        <li><span>Social Structure:</span> {animalData.socialStructure}</li>
        <li><span>Offspring Per Birth:</span> {animalData.offspringPerBirth}</li>
      </ul>
    </div>
  );
}

export default AnimalDetail;