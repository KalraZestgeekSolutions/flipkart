// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardDescription } from "./components/productDescription/ProductDescription";
import { Header } from "./components/pages/Header";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./context/CartProvider";
import { theme } from "./themes/Theme";
import { Authentication } from "./components/auth/Auth";

function App() {
  return (
    <Box>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <CartProvider>
            <Header />
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/:productId" element={<CardDescription />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/auth/:route" element={<Authentication />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </ChakraProvider>
    </Box>
  );
}

export { App };
