import { useState } from "react";
import Canvas from "../Canvas/Canvas";
import Form from "../Form/Form";
import "./App.css";

type Text = {
  id: string;
  text: string;
  x: number;
  y: number;
};

function App() {
  const [selectedId, selectShape] = useState(null);
  const [textsArr, setTextsArr] = useState<Text[]>([]);

  function handleTextAdd(text: Text) {
    const newArr = textsArr.slice();
    newArr.push(text);
    setTextsArr(newArr);
  }

  return (
    <div className="app">
      <Canvas
        selectShape={selectShape}
        textsArr={textsArr}
        selectedId={selectedId}
      />
      <Form handleTextAdd={handleTextAdd} />
    </div>
  );
}

export default App;
