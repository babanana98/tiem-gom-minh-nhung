import { products } from "../../../utils/constants/products";
import { useParams } from 'react-router-dom';

function ProductsIdPage() {
  const { id } = useParams<{ id: string }>();
  const productId = id ? parseInt(id) : null;
  const product = products.find((prod) => prod.id === productId);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
        </div>
      ) : (
        // TODO: handle product not exist or null
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductsIdPage;
