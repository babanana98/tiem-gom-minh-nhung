import './App.css';
import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load pages components
const HomePage = lazy(() => import("./pages/home"));
const ProductsIdPage = lazy(() => import("./pages/products/_id"));
const ContactPage = lazy(() => import("./pages/contact"));
const FaqPage = lazy(() => import("./pages/faq"));
const AboutPage = lazy(() => import("./pages/about"));

// create router paths
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: 'products/:id',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ProductsIdPage />
      </Suspense>
    ),
  },
  {
    path: 'contact',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <ContactPage />
      </Suspense>
    ),
  },
  {
    path: 'faq',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <FaqPage />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AboutPage />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
