import { useEffect, useState } from "react";

function Home() {
  const [state, setState] = useState(null);
  const [stateString, setStateString] = useState("");
  const [stateNumber, setStateNumber] = useState(0);
  const [stateBoolean, setStateBoolean] = useState(false);
  const [stateObject, setStateObject] = useState({});
  const [stateArray, setStateArray] = useState([]);

  const onSetState = () => {
    setStateString("abc");
    setStateNumber(34);
    setStateBoolean(true);
    setStateObject({}); //set empty
    setStateObject((prev) => {
      return {
        ...prev,
        a: "abc",
      };
    }); //set value
    setStateArray([]); //set empty
    const arrTemp = [1, 2, 3, 4, 5, 6];
    setStateArray([...arrTemp]);
    setStateObject((prev) => {
      return [...prev, 2, 4];
    });
  };

  const getParameter = (/* parameter */) => {
    // ()=> void
    // getParameter = () => {}
    // use getParameter()
    // getParameter = (arrry) => void
    // getParameter = (...arg) => void
    // getParameter = (value,name,index,n) => void
    // use getParameter("abc","xxx",4)
    // getParameter = (object) => void
    // getParameter = (props) => void
    // props.value
    // props.name
    // getParameter = ({value,name,index,n}) => void
    // use getParameter({
    // value:"abc",
    // name:"xxx",
    // index:3,
    // n: null
    // })
    //
  };

  return <div></div>;
}

// functional => return variable
// use onClick(value)
// FunctionComponent => return React.JSX.Element
const ShortFnCompoent = ({ data }) => <div>abc</div>;
// <ShortFnCompoent data={} />
function LongFnCompoent({
  open = false,
  data = { a: "z", x: "y" },
  arr = ["abc", () => {}],
  callback = () => null,
  onCallbackJSX = () => <div />,
}) {
  // data.a
  // const {x, a} = data
  // arr[0] === "abc"
  // arr[1] === () => {}
  // const [state, setState] = arr
  // ** state = "abc"
  // ** setState = () => {}

  const [state, setState] = useState(null);

  const Button = () => onCallbackJSX(state);

  useEffect(() => {
    callback("abc");
  }, []);

  return (
    <div>
      <Button />
    </div>
  );
}

function App() {
  const [state, setState] = useState(null); // state = "abc"

  const onCallback = (value) => {
    setState(value);

    // *** boolean
    // if (value) {
    //   return true;
    // } else {
    //   return false;
    // }
    // if (value) return true;
    // else return false;
    // return value ? true : false;
    // return !!value;

    // ***string, default= "xyz"
    // if (value) {
    //   return value;
    // } else {
    //   return default;
    // }
    // return value ? value : default
    // return value || default
    // return value ?? default

    // ***return
    // if (value) {
    //   return value;
    // } else {
    //   return default;
    // }
    // if (value) {
    //   return value;
    // } else if(value === "abc") {
    //   return "xyz";
    // } else {
    //   return default;
    // }

    // if(value) return value;
    // if(value === "abc") return "xyz";
    // return default;
  };

  const onCallbackJSX = (record) => {
    if (!record) return null;

    return <div>{record.value}</div>;
  };

  return <LongFnCompoent callback={onCallback} callbackJSX={onCallbackJSX} />;
}

export default Home;
