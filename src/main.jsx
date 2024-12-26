import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../App.css";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/Store/store.js";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home/Home.jsx"));
const Layout = lazy(() => import("./Layout.jsx"));
const CocktailContainer = lazy(() => import("./components/Cocktail/CocktailContainer.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Login = lazy(() => import("./components/Login/Login.jsx"));
const Signup = lazy(() => import("./components/Signup/Signup.jsx"));
const PastryContainer = lazy(() =>
  import("./components/Pastry/PastryContainer.jsx")
);
const Cart = lazy(() => import("./components/Cart/Cart.jsx"));
const CakeContainer = lazy(() => import("./components/Cake/CakeContainer.jsx"));
const CupCakeContainer = lazy(() =>
  import("./components/CupCake/CupCakeContainer.jsx")
);
const WeddingCakeContainer = lazy(() =>
  import("./components/WeddingCake/WeddingCakeContainer.jsx")
);
const Feedback = lazy(() => import("./components/Feedback/Feedback.jsx"));
const Product = lazy(() => import("./components/Product/Product.jsx"));

const UserProfile = lazy(() => import("./components/Header/UserProfile.jsx"));
// const router = createBrowserRouter([
//   {
//     path: "./",
//     element: <Layout />,
//     children: [
//       {
//         path: "./",
//         element: <Home />,
//       },
//       {
//         path: "./Product",
//         element: <Product />,
//       },
//       {
//         path: "./Cake",
//         element: <CakeContainer />,
//       },
//       {
//         path: "./Pastry",
//         element: <PastryContainer />,
//       },
//       {
//         path: "./CupCake",
//         element: <CupCakeContainer />,
//       },
//       {
//         path: "./WeddingCake",
//         element: <WeddingCakeContainer />,
//       },
//       {
//         path: "./About",
//         element: <About />,
//       },
//       {
//         path: "./Login",
//         element: <Login />,
//       },
//       {
//         path: "./Signup",
//         element: <Signup />,
//       },
//       {
//         path: "./Cart",
//         element: <Cart />,
//       },
//       {
//         path: "./Feedback",
//         element: <Feedback />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="Product" element={<Product />} />
      <Route path="Cake" element={<CakeContainer />} />
      <Route path="Pastry" element={<PastryContainer />} />
      <Route path="CupCake" element={<CupCakeContainer />} />
      <Route path="WeddingCake" element={<WeddingCakeContainer />} />
      <Route path="Cocktail" element={<CocktailContainer />} />
      <Route path="About" element={<About />} />
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Cart" element={<Cart />} />
      <Route path="Feedback" element={<Feedback />} />
      <Route path="UserProfile" element={<UserProfile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<></>}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
