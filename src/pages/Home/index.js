import React, { useEffect, useState } from "react";
import "./home.css";
import { TextHighlightV2 } from "../../components/TextHighLight";
import TextHighLightV3 from "../../components/TextHighLight/TextHighLightV3";
import { productList } from "../../mockData/productData";

function Home() {
  const [stringState, setStringState] = useState("");
  const [numberState, setNumberState] = useState(0);
  const [booleanState, setBooleanState] = useState(false);
  const [objectState, setObjectState] = useState({});
  const [arrayState, setArrayState] = useState(productList);

  // #function
  // 1. function a(){}
  // 2. const a = ()=>{}

  return (
    <div className="container">
      <header className="header">
        <h1>This is the Home Pages</h1>
      </header>
      <div className="main-content" style={{ textAlign: "left" }}>
        <div>
          <div style={{ marginBottom: "12px" }}>
            <input
              name="keyword"
              value={stringState}
              onChange={(e) => {
                setStringState(e.target.value);
              }}
            />
            <button>search</button>
          </div>
          <div>
            <span>sort by: </span>
            <input type="radio" value="produce name" />
            <label>produce name</label>
            <input type="radio" value="produce price" />
            <label>produce price</label>
            <button>sort a-z</button>
            <button>sort z-a</button>
          </div>
        </div>
        <hr />
        {arrayState.map((product, index) => (
          <div key={index}>
            <div style={{ fontWeight: 600 }}>
              <TextHighLightV3
                text={product.name}
                highlightText={stringState}
              />
            </div>
            <div>
              <span>category: </span>
              <span>{product.category}</span>
            </div>
            <div>
              <span>price: </span>
              <span>{product.price}</span>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
