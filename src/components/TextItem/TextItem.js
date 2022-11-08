import React from "react";
import { Text, Transformer } from "react-konva";

// type TextItemProps = {
//   text: string;
//   isSelected: boolean;
//   fontSize: number;
//   setFontSize: any;
// };

const TextItem = ({ isSelected, onSelect, text, x, y }) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Text
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        fontSize={38}
        draggable
        text={text}
        x={x}
        y={y}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

export default TextItem;
