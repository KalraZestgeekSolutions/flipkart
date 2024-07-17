// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import ProductDescription from "./components/productDescription/ProductDescription";
import Header from "./components/pages/Header";
import Cart from "./components/cart/Cart";
import { CartFunctions } from "./context/CartFunctions";
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

function App() {
  return (
    <Box overflow="hidden">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <CartFunctions>
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route
                exact
                path="/:productId"
                element={<ProductDescription />}
              />
              <Route exact path="/cart" element={<Cart />} />
            </Routes>
          </CartFunctions>
        </BrowserRouter>
      </ChakraProvider>
    </Box>
  );
}

export default App;
