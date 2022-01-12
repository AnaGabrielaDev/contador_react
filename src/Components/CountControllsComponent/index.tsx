type CountControllsComponentProps = {
  setCount: (count:number) => void;
  count: number;
}

function CountCoontrollsComponent({setCount, count}: CountControllsComponentProps) {
  function increment() {
    setCount(count + 1);
  }

  function desincrement() {
    setCount(count - 1);
  }

  return (
    <div className="buttonGroup">
      <button onClick={desincrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
}

export { CountCoontrollsComponent };
