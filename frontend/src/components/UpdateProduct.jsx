import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../slices/productSlice";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleCardClick = (id) => {
    navigate(`./${id}`); // Navigate to the product detail page with the product's ID
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-center text-3xl font-extrabold text-orange-500 mb-6">
        Upload Product
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col border p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleCardClick(product._id)}
          >
            {/* Uploaded Images */}
            <div className="flex-shrink-0">
              <img
                src={product.image || "default-image.jpg"} // Use product image if available
                alt={product.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            {/* Product Info */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm">Price: ${product.price}</p>
              <p className="text-sm">Size: {product.sizes.join(", ")}</p>
              <p className="text-sm">Category: {product.category}</p>
              <p className="text-sm">Description: {product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateProduct;
