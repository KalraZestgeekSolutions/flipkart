import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/pages/Header";
import PublicRoute from "./components/routesAuthentication/PublicRoutes";
// import PrivateRoutes from "./components/routesAuthentication/PrivateRoutes";
// import ProtectedRoutes from "./components/routesAuthentication/ProtectedRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import { CardDescription } from "./components/productDescription/ProductDescription";
import { Cart } from "./components/cart/Cart";
import { CartProvider } from "./context/CartProvider";
import { theme } from "./themes/Theme";
import { Authentication } from "./components/auth/Auth";
import { Email } from "./components/forgetPassword/Email";

import { NewPassword } from "./components/forgetPassword/NewPassword";

const { HomePage } = lazy(() => import("./components/HomePage"));

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:productId" element={<CardDescription />} />
              <Route path="/auth/:route" element={<PublicRoute />}>
                <Route path="" element={<Authentication />} />
              </Route>
              <Route exact path="/email" element={<Email />} />
              <Route exact path="/newPassword" element={<NewPassword />} />
            </Routes>
          </Suspense>
        </CartProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export { App };

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "./components/Main";
// import { ChakraProvider, Box } from "@chakra-ui/react";
// import { CardDescription } from "./components/productDescription/ProductDescription";
// import { Header } from "./components/pages/Header";
// import { Cart } from "./components/cart/Cart";
// import { CartProvider } from "./context/CartProvider";
// import { theme } from "./themes/Theme";
// import { Authentication } from "./components/auth/Auth";
// import { Email } from "./components/forgetPassword/Email";
// import { NewPassword } from "./components/forgetPassword/NewPassword";

// function App() {
//   return (
//     <Box>
//       <ChakraProvider theme={theme}>
//         <BrowserRouter>
//           <CartProvider>
//             <Header />
//             <Routes>
//               <Route exact path="/" element={<Main />} />
//               <Route exact path="/:productId" element={<CardDescription />} />
//               <Route exact path="/cart" element={<Cart />} />
//               <Route exact path="/auth/:route" element={<Authentication />} />
//               <Route exact path="/email" element={<Email />} />
//               <Route exact path="/newPassword" element={<NewPassword />} />
//             </Routes>
//           </CartProvider>
//         </BrowserRouter>
//       </ChakraProvider>
//     </Box>
//   );
// }

// export default App;
