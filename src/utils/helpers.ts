import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names using `clsx` and `twMerge`.
 *
 * @param {...ClassValue[]} inputs - An arbitrary number of class values to be merged.
 * @returns {string} - A single string of combined and merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Capitalizes the first letter of each word in a string.
 *
 * @param {string} str - The input string to be transformed.
 * @returns {string} - The transformed string with the first letter of each word capitalized.
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Formats a Date object into a string with the format "weekday year-month-day hour:minute".
 *
 * The formatting includes:
 * - Full name of the weekday (e.g., "Wednesday").
 * - Four-digit year (e.g., "2024").
 * - Two-digit month (e.g., "07" for July).
 * - Two-digit day (e.g., "04").
 * - Two-digit hour in 24-hour format (e.g., "14").
 * - Two-digit minute (e.g., "30").
 *
 * @param {Date} date - The Date object to be formatted.
 * @returns {string} - A formatted string representing the date.
 */
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return date.toLocaleString("en-US", options);
}
