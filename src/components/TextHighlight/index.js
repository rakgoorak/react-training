import { Fragment, useEffect, useState } from "react";

function TextHighlight({ text = "", textHighlight = "" }) {
  const [highlight, setHighlight] = useState({
    prefix: "",
    subfix: "",
    highlight: "",
  });

  useEffect(() => {
    const handleChange = () => {
      const indexOf = text.toLowerCase().indexOf(textHighlight.toLowerCase());

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
  const [highlight, setHighlight] = useState([]);

  const searchTextHighlight = (value) => {
    const indexOf = value.toLowerCase().indexOf(textHighlight.toLowerCase());

    let n = { prefix: "", subfix: "", highlight: "" };
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

    return n;
  };

  useEffect(() => {
    let u = [];
    console.log("value => ", text);
    const handleChange = (value = "") => {
      const firstIndexOf = value
        .toLowerCase()
        .indexOf(textHighlight.toLowerCase());
      const lastIndexOf = value
        .toLowerCase()
        .lastIndexOf(textHighlight.toLowerCase());

      // Amazon Rainforest Frog
      // Amazo

      // setHighlight((prev) => {
      //   return [...prev, searchTextHighlight(x)];
      // });

      if (firstIndexOf === lastIndexOf) {
        u = [...u, searchTextHighlight(value)];
      } else {
        const x = value.substring(0, firstIndexOf + textHighlight.length);

        u = [...u, searchTextHighlight(x)];

        handleChange(value.substring(x.length, value.length));
      }
      // setHighlight((prev) => {
      //   return [...prev, searchTextHighlight(value)];
      // });

      // if (firstIndexOf !== lastIndexOf) {
      //   handleChange(value.substring(0, firstIndexOf + textHighlight.length));
      // }
    };

    setHighlight([...u]);
    handleChange(text);
    // handleChange("Amazon Rainforest Frog");

    return () => setHighlight([]);
  }, [textHighlight]);

  if (!textHighlight) return <div>{text}</div>;

  return (
    <div>
      {highlight.map((item, index) => (
        <Fragment key={index}>
          <span>{item.prefix}</span>
          <div style={{ display: "inline-block", backgroundColor: "#f00" }}>
            {item.highlight}
          </div>
          <span>{item.subfix}</span>
        </Fragment>
      ))}
    </div>
  );
}

export { TextHighlightV2 };

export default TextHighlight;
