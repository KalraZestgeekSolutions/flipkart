/* eslint-disable react/prop-types */
import {
  Box,
  Select,
  Text,
  Spacer,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const PriceFilter = ({ heading, handlePriceChange, handleClearAllFilters }) => {
  const [sliderValue, setSliderValue] = useState([100, 80000]);

  useEffect(() => {
    handlePriceChange(sliderValue);
  }, [sliderValue, handlePriceChange, handleClearAllFilters]);

  const handleClear = () => {
    setSliderValue([100, 80000]);
  };

  const handleSliderChange = (val) => {
    setSliderValue(val);
  };

  const handleMinSelectChange = (e) => {
    const value = parseInt(e.target.value);
    if (value <= sliderValue[1]) {
      setSliderValue([value, sliderValue[1]]);
    }
  };

  const handleMaxSelectChange = (e) => {
    const value = parseInt(e.target.value);
    if (value >= sliderValue[0]) {
      setSliderValue([sliderValue[0], value]);
    }
  };

  const generatePriceOptions = (min, max, step) => {
    const options = [];
    for (let i = min; i <= max; i += step) {
      options.push({ value: i, label: i });
    }
    return options;
  };

  const minPriceOptions = generatePriceOptions(100, sliderValue[1], 100);
  const maxPriceOptions = generatePriceOptions(sliderValue[0], 100000, 100);

  return (
    <Box borderBottom="2px" borderColor="whitesmoke">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text as="b">{heading}</Text>
        <Text
          cursor="pointer"
          fontWeight="600"
          color="#2874f0"
          onClick={handleClear}
        >
          CLEAR
        </Text>
      </Box>
      <Spacer mt="4" />

      <Box
        // p="4"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Select value={sliderValue[0]} onChange={handleMinSelectChange}>
            {minPriceOptions.map((price) => (
              <option key={price.value} value={price.value}>
                ₹{price.label}
              </option>
            ))}
          </Select>
        </Box>
        <Box textAlign="center">
          <Text>to</Text>
        </Box>
        <Box>
          <Select value={sliderValue[1]} onChange={handleMaxSelectChange}>
            {maxPriceOptions.map((price) => (
              <option key={price.value} value={price.value}>
                ₹{price.label}
              </option>
            ))}
          </Select>
        </Box>
      </Box>

      <Box mt="4">
        <RangeSlider
          value={sliderValue}
          min={100}
          max={80000}
          step={100}
          onChange={handleSliderChange}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
    </Box>
  );
};

export { PriceFilter };
