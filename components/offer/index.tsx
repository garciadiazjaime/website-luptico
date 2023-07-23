import { useState } from "react";

import Day from "./day";
import Summary from './summary'
import { days } from './support'

const price = 59;

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
            price={price}
          />
        ))}
      </div>

      <Summary days={selectedDays} price={price} />
    </div>
  );
}
