import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const UtilsEditorMeta = {
  displayName: "Utils",
  description: "Helpers for className merging",
};
