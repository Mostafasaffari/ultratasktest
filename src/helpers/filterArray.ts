import { IColumnUser } from "../entities/user";

export function filterArray(
  array: any[],
  filters: Partial<{ [key in keyof IColumnUser]: any }>
) {
  const filterKeys = Object.keys(filters);
  let result = array.filter((item) => {
    return filterKeys.every((key) => {
      if (filters[key as keyof IColumnUser] instanceof Array) {
        if (!filters[key as keyof IColumnUser].length) return true;
        return filters[key as keyof IColumnUser].find(
          (filter: any) => filter === item[key]
        );
      } else if (typeof filters[key as keyof IColumnUser] === "string") {
        if (!filters[key as keyof IColumnUser]) return true;
        return filters[key as keyof IColumnUser] === item[key]
          ? item
          : undefined;
      } else {
        return true;
      }
    });
  });

  return result;
}

export const hasFilter = (
  filters: Partial<{ [key in keyof IColumnUser]: any }>
): boolean => {
  for (let key in filters) {
    if (filters[key as keyof IColumnUser] instanceof Array) {
      if (filters[key as keyof IColumnUser].length) {
        return true;
      }
    } else if (typeof filters[key as keyof IColumnUser] === "string") {
      if (filters[key as keyof IColumnUser]) {
        return true;
      }
    } else {
      return false;
    }
  }
  return false;
};
