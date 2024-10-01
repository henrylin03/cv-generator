import dayjs from "dayjs";

const dateToMonthYear = (date) => dayjs(new Date(date)).format("MMMM YYYY");

const dateToMonthYearSummarised = (date) => dayjs(new Date(date)).format("MMM YYYY");

export { dateToMonthYear, dateToMonthYearSummarised };
