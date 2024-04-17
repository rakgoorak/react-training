import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AutoComplete from "../../components/AutoComplete";
import TextHighlight, { TextHighlightV2 } from "../../components/TextHighlight";

function Animal() {
  //
  const [animalList, setAnimalList] = useState([]);

  const searchAnimal = (value, data = []) => {
    if (!value) return [];

    const arr = data.filter((f) =>
      f.animal.toLowerCase().includes(value.toLowerCase())
    );
    return arr.map((e, k) => (
      <TextHighlightV2 key={k} text={e.animal} textHighlight={value} />
    ));
  };

  useEffect(() => {
    const init = async () => {
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

      setAnimalList([...res.data]);
    };

    init();
  }, []);
  return (
    <div>
      <AutoComplete data={animalList} onFilter={searchAnimal} />
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Family</th>
          </tr>
        </thead>
        <tbody>
          {animalList.map((item, index) => (
            <tr key={index}>
              <td>{item.animal}</td>
              <td>{item.family}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Animal;
