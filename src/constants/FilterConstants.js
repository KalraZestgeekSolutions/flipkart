const ratingList = [
  { label: "4★ & Above", value: "4★ & Above", type: "rating" },
  { label: "3★ & Above", value: "3★ & Above", type: "rating" },
  { label: "2★ & Above", value: "2★ & Above", type: "rating" },
];

const brandList = [
  { label: "HP", value: "HP", type: "brand" },
  { label: "Epson", value: "Epson", type: "brand" },
  { label: "Canon", value: "Canon", type: "brand" },
];

const MinPrice = [
  { value: 50, label: "50", type: "minPrice" },
  { value: 100, label: "100", type: "minPrice" },
  { value: 200, label: "200", type: "minPrice" },
  { value: 400, label: "400", type: "minPrice" },
  { value: 600, label: "600", type: "minPrice" },
  { value: 800, label: "800", type: "minPrice" },
  { value: 1000, label: "1000", type: "minPrice" },
];

const MaxPrice = [
  { value: 3000, label: "3000", type: "maxPrice" },
  { value: 4000, label: "4000", type: "maxPrice" },
  { value: 6000, label: "6000", type: "maxPrice" },
  { value: 8000, label: "8000", type: "maxPrice" },
  { value: 10000, label: "10000", type: "maxPrice" },
  { value: 1600000, label: "10000+", type: "maxPrice" },
];

export { ratingList, brandList, MaxPrice, MinPrice };
