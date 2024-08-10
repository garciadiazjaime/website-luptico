import { useState } from "react";

import Day from "./day";
import Summary from "./summary";
import { days } from "./support";

const price = 59;

const cabins = [1, 2, 3];

export default function Offer() {
  const [selectedCabin, setSelectedCabin] = useState<number>(1);
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

  const cabinClickHandler = (cabin: number) => {
    setSelectedCabin(cabin);
  };

  return (
    <div style={{ margin: "60px 0" }}>
      <h2>Offer</h2>
      <br />
      <div>Select Cabin:</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          margin: "20px 0",
        }}
      >
        {cabins.map((cabin) => (
          <div
            key={cabin}
            style={{
              padding: 20,
              border: "1px solid black",
              width: 120,
              cursor: "pointer",
              background: selectedCabin === cabin ? "#AAF" : "",
            }}
            onClick={() => cabinClickHandler(cabin)}
          >
            <div>Cabin #{cabin}</div>
          </div>
        ))}
      </div>
      <br />
      Select Nights:
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
      <div style={{ margin: "20px 0" }}>
        <Summary days={selectedDays} price={price} selectedCabin={selectedCabin} />
      </div>
    </div>
  );
}
