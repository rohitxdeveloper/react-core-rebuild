export default function Counter({
  count,
  increment,
  decrement,
  reset,
}) {
  console.log("Counter component rendered");

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}