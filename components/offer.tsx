export default function Offer() {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const price = 59;
  const tomorrow = new Date();
  const blockDates = [6];
  tomorrow.setDate(tomorrow.getDate() + 1);

  const weekAfter = new Date(tomorrow);
  weekAfter.setDate(weekAfter.getDate() + 7);

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const getDay = (index: number) => {
    const day = new Date();
    day.setDate(day.getDate() + index);

    const isBlock = blockDates.includes(day.getDay());

    return (
      <div
        style={{
          padding: 20,
          border: "1px solid black",
          width: 120,
          cursor: isBlock ? "" : "pointer",
          backgroundColor: isBlock ? '#DDD' : ''
        }}
      >
        <div style={{ textTransform: "capitalize" }}>{days[day.getDay()]}</div>
        <div style={{ margin: "6px 0" }}>
          {day.getDate()} / {day.getMonth()}
        </div>
        <div>{formatter.format(price)}</div>
      </div>
    );
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
          <div key={day}>{getDay(index + 1)}</div>
        ))}
      </div>
    </div>
  );
}
