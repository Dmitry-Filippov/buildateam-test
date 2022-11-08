import { useRef, useState } from "react";
import Canvas from "../Canvas/Canvas";
import Form from "../Form/Form";
import "./App.css";

export type Text = {
  id: string;
  text: string;
  x: number;
  y: number;
};

function App() {
  const [selectedId, selectShape] = useState(null);
  const [textsArr, setTextsArr] = useState<Text[]>([]);
  const stageRef = useRef<any>(null);

  function downloadURI(uri: string, name: string) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function handleTextAdd(text: Text) {
    const newArr = textsArr.slice();
    newArr.push(text);
    setTextsArr(newArr);
  }

  function handleTextDel() {
    const newArr = textsArr.slice();
    newArr.forEach((item, i) => {
      if (item.id === selectedId) {
        newArr.splice(i, 1);
      }
    });
    setTextsArr(newArr);
    selectShape(null);
  }

  return (
    <div className="app">
      <Canvas
        stageRef={stageRef}
        selectShape={selectShape}
        textsArr={textsArr}
        selectedId={selectedId}
      />
      <Form handleTextAdd={handleTextAdd} />
      <div>
        <button
          className="app__save"
          onClick={() => {
            const uri = stageRef.current.toDataURL();
            downloadURI(uri, "stage.png");
          }}
          disabled={!textsArr[0]}
        >
          Cохранить как png
        </button>
        <button
          className="app__del"
          disabled={!selectedId}
          onClick={handleTextDel}
        >
          Удалить выбранный текст
        </button>
      </div>
    </div>
  );
}

export default App;
