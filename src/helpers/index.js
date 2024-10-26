import dayjs from "dayjs";

const dateToMonthYear = (date) => dayjs(new Date(date)).format("MMMM YYYY");

const dateToMonthYearSummarised = (date) => dayjs(new Date(date)).format("MMM YYYY");

const validateRequiredInput = (inputElement) => {
  if (!inputElement.hasAttribute("required")) return;

  const containerElement = inputElement.parentElement;
  if (inputElement.value.trim()) containerElement.classList.remove("error");
  else containerElement.classList.add("error");
};

export { dateToMonthYear, dateToMonthYearSummarised, validateRequiredInput };
