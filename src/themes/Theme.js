import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "0px",
  sm: "540px",
  md: "765px",
  lg: "1200px",
  xl: "1400px",
  "2xl": "1700px",
};

const theme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tab: {
          _selected: {
            color: "#2874f0;",
          },
        },
      },
    },
  },
  breakpoints,
});

export { theme };
