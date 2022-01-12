type CountVisualizeComponentProps = {
  count:number;
}

function CountVisualizeComponent({count}: CountVisualizeComponentProps) {
  return (
    <h2>{count}</h2>
  );
}

export {CountVisualizeComponent};