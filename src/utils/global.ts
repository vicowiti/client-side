import { v4 as uuidv4 } from "uuid";
import { School } from "../types/global";

export const COLORS = {
  primaryGreen: "#43ab49",
  primaryBlue: "#2fa6de",
  miniGreen: "#a4f000",
  primaryGrey: "#b0b5b2",
};

export const generateUUID = () => uuidv4();

export const daysToPay = (deadline: string, creation: string) => {
  const date1 = new Date(creation);
  const date2 = new Date(deadline);

  const timeDifference = Number(date2) - Number(date1);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const dayDifference = timeDifference / millisecondsPerDay;

  return dayDifference;
};

export const getNumbers = (schoolsArr: School[], type: string) => {
  const newArr = schoolsArr.filter((item) => item.type.toLowerCase() === type);

  console.log("newARR", newArr);
  return newArr.length;
};

export const getGreeting = () => {
  const date = new Date();
  const hour = date.getHours();

  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
};
