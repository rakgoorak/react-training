import { useEffect, useState } from "react";

function TextHighlight({ text = "", textHighlight = "" }) {
  const [highlight, setHighlight] = useState({
    prefix: "",
    subfix: "",
    highlight: "",
  });

  //   Aardvark
  // aa=> prefix:'',subfix:'rdvark',highlight:'Aa'
  useEffect(() => {
    const handleChange = () => {
      //   console.log("text => ", text);
      //   console.log("textHighlight => ", textHighlight);
      const indexOf = text.toLowerCase().indexOf(textHighlight.toLowerCase());
      const x = text.substring(0, indexOf);
      //   console.log("indexOf => ", indexOf);
      //   console.log("x => ", x);

      let n = { ...highlight };
      // prefix
      if (indexOf <= 0) {
        n.prefix = "";
      } else {
        n.prefix = text.substring(0, indexOf);
      }
      // subfix
      if (indexOf + 1 === text.length) {
        n.subfix = "";
      } else {
        n.subfix = text.substring(indexOf + textHighlight.length, text.length);
      }
      //   highlight
      if (!textHighlight) {
        n.highlight = "";
      } else {
        n.highlight = text.substring(indexOf, indexOf + textHighlight.length);
      }

      setHighlight((prev) => {
        return { ...prev, ...n };
      });
      console.log("n => ", n);
    };
    handleChange();
  }, [textHighlight]);

  if (!textHighlight) return <div>{text}</div>;

  return (
    <div>
      <span>{highlight.prefix}</span>
      <div style={{ display: "inline-block", backgroundColor: "#f00" }}>
        {highlight.highlight}
      </div>
      <span>{highlight.subfix}</span>
    </div>
  );
}
function TextHighlightV2({ text = "", textHighlight = "" }) {
  const [highlight, setHighlight] = useState();

  //   Aardvark
  // aa=> prefix:'',subfix:'rdvark',highlight:'Aa'
  useEffect(() => {
    const handleChange = () => {
      const indexOf = text.toLowerCase().indexOf(textHighlight.toLowerCase());
      //   const x = text.substring(0, indexOf);
      const n = text.toLowerCase().split(textHighlight.toLowerCase());
      console.log("n => ", n);
    };
    handleChange();
  }, [textHighlight]);

  if (!textHighlight) return <div>{text}</div>;

  return (
    <div>
      {/* {highlight.m} */}
      {/* <span>{highlight.prefix}</span>
      <div style={{ display: "inline-block", backgroundColor: "#f00" }}>
        {highlight.highlight}
      </div>
      <span>{highlight.subfix}</span> */}
    </div>
  );
}

export { TextHighlightV2 };

export default TextHighlight;
