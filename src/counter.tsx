import { $$ } from "voby";
import type { FunctionMaybe } from "voby";
import styles from "./counter.module.css";

type Props = {
  value: FunctionMaybe<number>;
  onChange: (value: number) => void;
};

const Counter = ({ value, onChange }: Props): JSX.Element => {
  const increment = () => onChange($$(value) + 1);
  const decrement = () => onChange($$(value) - 1);

  return (
    <div class={styles.counter}>
      <button onClick={decrement}>-</button>
      <p>{value}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
