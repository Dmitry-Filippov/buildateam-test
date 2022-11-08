import { v4 as uuidv4 } from "uuid";
import { FC, useState } from "react";
import "./Form.scss";

type FormProps = {
  handleTextAdd: Function;
};

const Form: FC<FormProps> = ({ handleTextAdd }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleTextAdd({
          id: uuidv4(),
          text: inputValue,
          x: Math.random() * (window.innerWidth - 100),
          y: Math.random() * (window.innerHeight - 240),
        });
        setInputValue("");
      }}
    >
      <input
        type="text"
        placeholder="Введите текст"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">Добавить текст</button>
    </form>
  );
};

export default Form;
