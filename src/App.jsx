import Header from "./components/Header";
import useCounter from "./hooks/useCounter";
export default function App() {
  const { count, increment, decrement , reset} = useCounter(0);
  return (
    <>
    <Header />
    <div>
      <h1>Counter update 🚀</h1>
      <h3>Count: {count} </h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
    </>
  );
}