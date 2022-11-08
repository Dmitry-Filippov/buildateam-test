import { FC } from "react";
import { Layer, Stage } from "react-konva";
import TextItem from "../TextItem/TextItem";
import "./Canvas.css";

type CanvasProps = {
  selectShape: Function;
  textsArr: any;
  selectedId: number | null;
};

const Canvas: FC<CanvasProps> = ({ selectShape, textsArr, selectedId }) => {
  return (
    <div className="canvas">
      <Stage
        width={window.innerWidth - 60}
        height={window.innerHeight - 200}
        onClick={(e: any) => {
          const clickedOnEmpty = e.target === e.target.getStage();
          if (clickedOnEmpty) {
            selectShape(null);
          }
        }}
      >
        <Layer>
          {textsArr.map((item: any, i: number) => {
            return (
              <TextItem
                key={i}
                text={item.text}
                isSelected={selectedId === item.id}
                onSelect={() => {
                  selectShape(item.id);
                }}
                x={item.x}
                y={item.y}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
