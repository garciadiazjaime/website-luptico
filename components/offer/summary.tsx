export default function Summary({
  days,
  price,
  selectedCabin
}: {
  days: string[];
  price: number;
  selectedCabin: number
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  console.log(days);
  return (
    <div>
      <div>Summary</div>
      <div>Nights selected: {days.length}</div>
      <div>Subtotal: {formatter.format(days.length * price)}</div>
      <div>
        <button
          style={{
            padding: "12px 48px",
            border: "1px solid black",
            background: !days.length ? "#CCC" : "",
          }}
          disabled={!days.length && !selectedCabin}
        >
          Reserve
        </button>
      </div>
    </div>
  );
}
