import { Fragment, useEffect, useRef, useState } from "react";

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

    let temp = { prefix: "", subfix: "", highlight: "" };
    // prefix
    if (indexOf <= 0) {
      temp.prefix = "";
    } else {
      temp.prefix = value.substring(0, indexOf);
    }
    // subfix
    if (indexOf + 1 === value.length) {
      temp.subfix = "";
    } else {
      temp.subfix = value.substring(
        indexOf + textHighlight.length,
        value.length
      );
    }
    //   highlight
    if (!textHighlight) {
      temp.highlight = "";
    } else {
      temp.highlight = value.substring(indexOf, indexOf + textHighlight.length);
    }

    return temp;
  };

  useEffect(() => {
    const handleChange = (value = "") => {
      const firstIndexOf = value
        .toLowerCase()
        .indexOf(textHighlight.toLowerCase());
      const lastIndexOf = value
        .toLowerCase()
        .lastIndexOf(textHighlight.toLowerCase());

      if (firstIndexOf === lastIndexOf) {
        setHighlight((prev) => {
          return [...prev, searchTextHighlight(value)];
        });
      } else {
        const firstOfText = value.substring(
          0,
          firstIndexOf + textHighlight.length
        );
        const nextOfText = value.substring(firstOfText.length, value.length);
        setHighlight((prev) => {
          return [...prev, searchTextHighlight(firstOfText)];
        });
        handleChange(nextOfText);
      }
    };

    handleChange(text);

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
