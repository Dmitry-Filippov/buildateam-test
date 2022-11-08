import { FC } from "react";
import { Layer, Stage } from "react-konva";
import { Text } from "../App/App";
import TextItem from "../TextItem/TextItem";
import "./Canvas.css";

type CanvasProps = {
  selectShape: Function;
  textsArr: Text[];
  selectedId: number | null;
  stageRef: any;
};

const Canvas: FC<CanvasProps> = ({
  selectShape,
  textsArr,
  selectedId,
  stageRef,
}) => {
  return (
    <div className="canvas">
      <Stage
        ref={stageRef}
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
