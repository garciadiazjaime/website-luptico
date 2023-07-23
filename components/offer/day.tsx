import { days } from "./support";

export default function Day({
  index,
  selectedDays,
  setSelectedDays,
  price,
}: {
  index: number;
  selectedDays: string[];
  setSelectedDays: (day: string) => void;
  price: number;
}) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const blockDates = [6];

  const day = new Date();
  day.setDate(day.getDate() + index);

  const isBlock = blockDates.includes(day.getDay());

  const dayClickHandler = () => {
    if (!isBlock) {
      setSelectedDays(`${day.getMonth()}-${day.getDate()}`);
    }
  };

  const isDaySelected = selectedDays.includes(
    `${day.getMonth()}-${day.getDate()}`
  );

  return (
    <div
      style={{
        padding: 20,
        border: "1px solid black",
        width: 120,
        cursor: isBlock ? "" : "pointer",
        backgroundColor: isBlock ? "#DDD" : isDaySelected ? "#AAF" : "",
      }}
      onClick={dayClickHandler}
    >
      <div style={{ textTransform: "capitalize" }}>{days[day.getDay()]}</div>
      <div style={{ margin: "6px 0" }}>
        {day.getDate()} / {day.getMonth()}
      </div>
      <div>{!isBlock && formatter.format(price)}</div>
    </div>
  );
}
