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
import { useState, useEffect, useCallback } from "react";

const PriceFilter = ({
  heading,
  selectedItems,
  handleItem,
  MaxPrice,
  MinPrice,
  handlePriceChange,
}) => {
  const [sliderValue, setSliderValue] = useState([0, 10000000]);

  useEffect(() => {
    handlePriceChange(sliderValue);
  }, [sliderValue, handlePriceChange]);

  const handleClear = () => {
    setSliderValue([0, 10000]);
  };

  const handleSliderChange = useCallback(() => {
    (val) => {
      setSliderValue(val);
    };
  }, []);

  const handleMinSelectChange = useCallback(() => {
    (e) => {
      const value = parseInt(e.target.value);
      if (value <= sliderValue[1]) {
        setSliderValue([value, sliderValue[1]]);
      }
    };
  }, [sliderValue]);

  const handleMaxSelectChange = useCallback(() => {
    (e) => {
      const value = parseInt(e.target.value);
      if (value >= sliderValue[0]) {
        setSliderValue([sliderValue[0], value]);
      }
    };
  }, [sliderValue]);

  return (
    <Box borderBottom="2px" p="2" borderColor="whitesmoke">
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

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Select value={sliderValue[0]} onChange={handleMinSelectChange}>
            {MinPrice.map((price) => (
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
            {MaxPrice.map((price) => (
              <option key={price.value} value={price.value}>
                ₹{price.label}
              </option>
            ))}
          </Select>
        </Box>
      </Box>

      <Box mt="4">
        <RangeSlider
          aria-label={["min", "max"]}
          value={sliderValue}
          min={0}
          max={10000}
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
