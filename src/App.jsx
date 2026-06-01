import Header from "./components/Header";
import Counter from "./features/counter/components/Counter";
import StaticMessage from "./features/counter/components/StaticMessage";
import useCounter from "./features/counter/hooks/useCounter";

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  console.log("App rendered");

  return (
    <>
      <Header />

      <StaticMessage />

      <Counter
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    </>
  );
}