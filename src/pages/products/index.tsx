import { Outlet } from 'react-router-dom';

function ProductsPage() {
  return (
    <div>
      <h1>Product List</h1>
      <Outlet />
    </div>
  );
};

export default ProductsPage;
