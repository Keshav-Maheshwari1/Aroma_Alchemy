import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, deleteProduct } from "../slices/productSlice";

const DeleteProductForm = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-3xl font-extrabold text-orange-500 mb-6">
        Delete Product
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-col md:flex-row border p-4 rounded-lg items-center md:items-start justify-between bg-white shadow-md"
          >
            {/* Left part - Uploaded Images */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <img
                src={product.image || "default-image.jpg"} // Use product image if available
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            {/* Right part - Product Info */}
            <div className="w-full md:w-2/3 pl-0 md:pl-4 flex-grow">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-sm">Price: ${product.price}</p>
              <p className="text-sm">Size: {product.sizes.join(", ")}</p>
              <p className="text-sm">Category: {product.category}</p>
              <p className="text-sm">Description: {product.description}</p>
            </div>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteClick(product._id)}
              className="mt-4 md:mt-0 md:ml-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteProductForm;
