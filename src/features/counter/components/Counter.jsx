import useCounter from "../hooks/useCounter";

export default function Counter() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}