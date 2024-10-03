import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/index";
import ProductsPage from "./pages/products/index";
import ProductsIdPage from "./pages/products/_id/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: 'products',
    element: <ProductsPage />,
  },
  {
    path: 'products/:id',
    element: <ProductsIdPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
