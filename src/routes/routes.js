import { lazy } from "react";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../components/HomePage")),
    exact: true,
  },
  {
    path: "/:productId",
    component: lazy(() =>
      import("../components/productDescription/ProductDescription")
    ),
    exact: true,
  },
  {
    path: "/cart",
    component: lazy(() => import("../components/cart/Cart")),
    exact: true,
  },
  {
    path: "/auth/:route",
    component: lazy(() => import("../components/auth/Auth")),
    exact: true,
  },
];

export default routes;
