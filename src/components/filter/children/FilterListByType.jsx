export const FilterListByType = (listFilters, type) => {
  const filteredItems = listFilters
    .filter((item) => item.type === type)
    .map((item) => item.value);
  return filteredItems.length > 0 ? filteredItems : undefined;
};
