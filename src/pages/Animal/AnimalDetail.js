import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

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
    <div>
      <ul>
        <li>animalName: {animalData.animalName}</li>
        <li>averageSpeed: {animalData.averageSpeed}</li>
        <li>averageSpeedUnit: {animalData.averageSpeedUnit}</li>
        <li>color: {animalData.color}</li>
        <li>conservationStatus: {animalData.conservationStatus}</li>
        <li>countriesFound: {animalData.countriesFound}</li>
        <li>diet: {animalData.diet}</li>
        <li>family: {animalData.family}</li>
        <li>gestationPeriod: {animalData.gestationPeriod}</li>
        <li>gestationPeriodUnit: {animalData.gestationPeriodUnit}</li>
        <li>habitat: {animalData.habitat}</li>
        <li>height: {animalData.height}</li>
        <li>heightUnit: {animalData.heightUnit}</li>
        <li>lifespan: {animalData.lifespan}</li>
        <li>lifespanUnit: {animalData.lifespanUnit}</li>
        <li>offspringPerBirth: {animalData.offspringPerBirth}</li>
        <li>predators: {animalData.predators}</li>
        <li>socialStructure: {animalData.socialStructure}</li>
        <li>topSpeed: {animalData.topSpeed}</li>
        <li>topSpeedUnit: {animalData.topSpeedUnit}</li>
        <li>weight: {animalData.weight}</li>
        <li>weightUnit: {animalData.weightUnit}</li>
      </ul>
    </div>
  );
}

export default AnimalDetail;
