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
    <div className="grid grid-cols-1 gap-4 mx-24">
        <h2 className="text-center text-3xl font-extrabold text-orange-500">Upload Product</h2>
      {products.map((product) => (
        <div
          key={product._id}
          className="flex border p-4 cursor-pointer"
          onClick={() => handleCardClick(product._id)}
        >
          {/* Left part - Uploaded Images */}
          <div className="w-1/3">
            <img
              src={product.image || "default-image.jpg"} // Use product image if available
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Right part - Product Info */}
          <div className="w-2/3 pl-4">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm">Price: ${product.price}</p>
            <p className="text-sm">Size: {product.sizes.join(", ")}</p>
            <p className="text-sm">Category: {product.category}</p>
            <p className="text-sm">Description: {product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpdateProduct;
