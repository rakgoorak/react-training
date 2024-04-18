import axios from "axios";
import { useEffect, useRef, useState } from "react";
import AutoComplete from "../../components/AutoComplete";
import TextHighlight, { TextHighlightV2 } from "../../components/TextHighLight";
import TableList from "../../components/TableList";

function Animal() {
  //
  const [animalList, setAnimalList] = useState([]);
  const [paginationOptions, setPaginationOptions] = useState({
    page: 1,
    pageSize: 10,
    total: 0,
  });
  //

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
      {/* <TextHighlightV2 textHighlight="o" /> */}
      <AutoComplete data={animalList} onFilter={searchAnimal} />
      <TableList
        data={animalList}
        paginationOptions={{ pageSize: 20 }}
        columns={[
          { title: "Name", dataIndex: "animal" },
          { title: "Family", dataIndex: "family" },
        ]}
      />
      {/* <table border={1}>
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
      </table> */}
    </div>
  );
}

export default Animal;