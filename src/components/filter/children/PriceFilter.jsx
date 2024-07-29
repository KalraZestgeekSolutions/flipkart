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
import { useState, useEffect, useCallback, useMemo } from "react";

const PriceFilter = ({ heading, handlePriceChange, handleClearAllFilters }) => {
  const DEFAULT_SLIDER_VALUE = [100, 65000];
  const [sliderValue, setSliderValue] = useState(DEFAULT_SLIDER_VALUE);

  useEffect(() => {
    handlePriceChange(sliderValue);
  }, [sliderValue, handlePriceChange, handleClearAllFilters]);

  const handleClear = () => {
    setSliderValue(DEFAULT_SLIDER_VALUE);
  };

  const handleSliderChange = (val) => {
    setSliderValue(val);
  };

  const handleMinSelectChange = useCallback(
    (e) => {
      const value = parseInt(e.target.value);
      if (value <= sliderValue[1]) {
        setSliderValue([value, sliderValue[1]]);
      }
    },
    [sliderValue]
  );

  const handleMaxSelectChange = useCallback(
    (e) => {
      const value = parseInt(e.target.value);
      if (value >= sliderValue[0]) {
        setSliderValue([sliderValue[0], value]);
      }
    },
    [sliderValue]
  );

  const generatePriceOptions = useCallback((min, max, step) => {
    const options = [];
    for (let i = min; i <= max; i += step) {
      options.push({ value: i, label: i });
    }
    return options;
  }, []);

  const minPriceOptions = useMemo(() => {
    generatePriceOptions(100, sliderValue[1], 100);
  }, [generatePriceOptions, sliderValue]);

  const maxPriceOptions = useMemo(() => {
    generatePriceOptions(sliderValue[0], 65000, 100);
  }, [generatePriceOptions, sliderValue]);

  const hasPriceFilter =
    sliderValue[0] !== DEFAULT_SLIDER_VALUE[0] ||
    sliderValue[1] !== DEFAULT_SLIDER_VALUE[1];

  return (
    <Box borderBottom="2px" borderColor="whitesmoke">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Text as="b">{heading}</Text>
        {hasPriceFilter && (
          <Text
            cursor="pointer"
            fontWeight="600"
            color="#2874f0"
            onClick={handleClear}
          >
            CLEAR
          </Text>
        )}
      </Box>
      <Spacer mt="4" />

      <Box display="flex" justifyContent="space-between" alignItems="center">
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
          max={65000}
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
