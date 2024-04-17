import { useRef, useState } from "react";

function AutoComplete({
  data = [],
  onFilter = () => null,
  onSelect = () => null,
}) {
  const timer = useRef();
  //
  const [source, setSource] = useState([]);
  //

  const searchAnimal = (value) => {
    const arr = onFilter(value, data);
    setSource([...arr]);
  };

  const handleSearch = (event) => {
    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      searchAnimal(event.target.value);
    }, 500);
  };
  return (
    <div>
      <div>
        <label>search: </label>
        <input onChange={handleSearch} />
      </div>
      <div>
        <ul>
          {source.map((item, index) => (
            <li key={index} onClick={() => onSelect(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AutoComplete;
