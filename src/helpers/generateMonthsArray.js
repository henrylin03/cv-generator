const generateMonthsArray = () =>
  Array.from({ length: 12 }, (_, idx) =>
    new Date(0, idx).toLocaleString("en-US", { month: "long" })
  );

export default generateMonthsArray;
