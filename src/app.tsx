import { $ } from "voby";
import Counter from "./counter";
import "./style.css";

export const App = (): JSX.Element => {
  const value = $(0);

  const onChange = (newValue: number) => {
    console.log("Value updated", newValue);
    value(newValue);
  };

  return (
    <>
      <img class="logo" src="/vite.svg" />
      <h1>Voby + Vite = ✌️</h1>
      <Counter value={value} onChange={onChange} />
    </>
  );
};
