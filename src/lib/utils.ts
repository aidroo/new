import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
/* -------------------------------------------------------------------------- */
/*                      is children page active checking                      */
/* -------------------------------------------------------------------------- */

export function isChildrenPageActive(path: string, match: string) {
  if (path && match) {
    if (path === match) {
      return true;
    }
    return false;
  }
  return false;
}

/* -------------------------------------------------------------------------- */
/*                       is parent page active checking                       */
/* -------------------------------------------------------------------------- */
type Page = {
  path: string;
};

export function isParentPageActive(pages: Page[], path: string): boolean {
  if (pages) {
    return pages.some((page) => page.path === path);
  }
  return false;
}
