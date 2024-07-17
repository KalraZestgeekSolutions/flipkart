const FilterListByType = (listFilters, type) => {
  const filteredItems = listFilters
    .filter((item) => item.type === type)
    .map((item) => item.value);

  // console.log("filteredItems", filteredItems);
  return filteredItems.length > 0 ? filteredItems : undefined;
};

export default FilterListByType;
