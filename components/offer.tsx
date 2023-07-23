import { useState } from "react";
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export default function Offer() {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const weekAfter = new Date(tomorrow);
  weekAfter.setDate(weekAfter.getDate() + 7);

  const dayClickHandler = (day: string) => {
    const newDays = !selectedDays.includes(day)
      ? [...selectedDays, day]
      : selectedDays.filter((item) => item !== day);

    setSelectedDays(newDays);
  };

  return (
    <div style={{ margin: "60px 0" }}>
      Offer
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {days.map((day, index) => (
          <Day
            key={day}
            index={index + 1}
            selectedDays={selectedDays}
            setSelectedDays={dayClickHandler}
          />
        ))}
      </div>
    </div>
  );
}

const Day = ({
  index,
  selectedDays,
  setSelectedDays,
}: {
  index: number;
  selectedDays: string[];
  setSelectedDays: (day: string) => void;
}) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const price = 59;
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
      <div>{formatter.format(price)}</div>
    </div>
  );
};
