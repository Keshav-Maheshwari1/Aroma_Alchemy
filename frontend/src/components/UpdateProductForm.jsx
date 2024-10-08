import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById, updateProduct } from "../slices/productSlice"; // Import your actions

const UpdateProductForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedProduct);
  const [formData, setFormData] = useState({
    title: "",
    price: 0,
    sizes: [], // Ensure this is initialized as an array
    category: "",
    description: "",
  });
  const [images, setImages] = useState([]);
  useEffect(() => {}, [images]);
  useEffect(() => {
    dispatch(fetchProductById(id)); // Fetch product by ID
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      // Set form data when product is fetched
      setFormData({
        title: product.title,
        price: product.price,
        sizes: Array.isArray(product.sizes) ? product.sizes : [], // Ensure sizes is an array
        category: product.category,
        description: product.description,
      });
    }
  }, [product]);
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "sizes") {
      setFormData({ ...formData, sizes: value.split(", ") }); // Convert string to array
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Dispatch the update product action
    dispatch(
      updateProduct({
        id,
        updatedProduct: { ...formData, sizes: formData.sizes },
      })
    );
  };

  if (!product) return <p>Loading...</p>; // Show loading while fetching

  return (
    <div
      style={{
        backgroundImage: `url('/banner6.jpg')`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: "cover",
      }}
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl w-full mx-auto p-4 backdrop-blur-md shadow-md rounded-lg"
      >
        <h2 className="text-2xl text-orange-500 font-semibold mb-4 text-center">
          Update Product
        </h2>

        {/* Product Image */}
        <div className="mb-4">
          <img
            src={product.image || "default-image.jpg"}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg mb-2"
          />
          <input
            id="images"
            name="images"
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-orange-400 text-sm font-semibold mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-orange-400 mb-2">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Size */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-orange-400 mb-2">
            Sizes
          </label>
          <input
            type="text"
            name="sizes"
            value={formData.sizes.join(", ")} // Convert array to string for input
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm text-orange-400 font-semibold mb-2">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm text-orange-400 font-semibold mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProductForm;
