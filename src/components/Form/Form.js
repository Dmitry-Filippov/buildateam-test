import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className="form">
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
