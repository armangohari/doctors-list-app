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
