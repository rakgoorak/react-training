import { useEffect, useState } from "react";

function TextHighLightV3({
  text = "",
  highlightText = "",
  highlightColor = "#f00",
}) {
  console.log("highlightText:", highlightText);
  const [textHighLight, setTextHighlight] = useState({
    prefix: "",
    highlight: "",
    subfix: "",
  });

  useEffect(() => {
    console.log("useEffect");
    const init = () => {
      console.log("init");
      if (text) {
        if (
          !highlightText ||
          !text.toLowerCase().includes(highlightText.toLowerCase())
        ) {
          setTextHighlight((prev) => ({
            ...prev,
            prefix: text,
            highlight: "",
            subfix: "",
          }));

          return;
        }

        const textSize = text.length;
        const highlightTextSize = highlightText.length;
        const indexOfHighlightText = text.indexOf(highlightText);
        console.log("indexOfHighlightText:", indexOfHighlightText);

        let prefixText = "";
        let highlight = text.substring(
          indexOfHighlightText,
          indexOfHighlightText + highlightTextSize
        );
        let subfixText = "";

        if (indexOfHighlightText !== 0) {
          prefixText = text.substring(0, indexOfHighlightText);
          console.log("prefixText:", prefixText);
        }

        if (indexOfHighlightText + highlightTextSize !== textSize) {
          subfixText = text.substring(
            indexOfHighlightText + highlightTextSize,
            textSize
          );
          console.log("subfixText:", subfixText);
        }

        setTextHighlight((prev) => ({
          ...prev,
          prefix: prefixText,
          highlight: highlight,
          subfix: subfixText,
        }));
      }
    };

    init();
  }, [text, highlightText]);

  if (!highlightText) return text;

  return (
    <div style={{ display: "inline-block" }}>
      <span>{textHighLight.prefix}</span>
      <span style={{ color: highlightColor }}>{textHighLight.highlight}</span>
      <span>{textHighLight.subfix}</span>
    </div>
  );
}

export default TextHighLightV3;
