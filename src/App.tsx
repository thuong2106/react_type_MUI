import { useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "products/:id",
      element: <ProductDetail />,
    },
  ]);
  return element;
}

export default App;
