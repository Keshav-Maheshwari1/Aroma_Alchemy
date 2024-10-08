import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postProduct } from '../slices/productSlice';

const UploadProduct = () => {
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    quantity: '',
    category: '',
    sizes: [],
  });
  const dispatch = useDispatch();
  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };
  useEffect(()=>{
    
  },[images])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postProduct(formData));
    console.log("Dispatched Product")
    // Add your form submission logic here
  };

  return (
    <div style={{backgroundImage: `url('banner1.jpg')`, backgroundRepeat: `no-repeat`, backgroundSize: 'cover'}} className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-4xl w-full space-y-8 p-10 backdrop-blur-md rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-orange-500">Product Lists</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-orange-300">
              Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-orange-300">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              value={formData.description}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows="3"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-orange-300">
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              required
              value={formData.price}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-orange-300">
              Quantity
            </label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              required
              value={formData.quantity}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-orange-300">
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Sizes */}
          <div>
            <label htmlFor="sizes" className="block text-sm font-medium text-orange-300">
              Sizes (comma-separated)
            </label>
            <input
              id="sizes"
              name="sizes"
              type="text"
              required
              value={formData.sizes}
              onChange={handleInputChange}
              className="appearance-none rounded-md w-full px-3 py-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Upload Images */}
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-orange-300">
              Upload Images
            </label>
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

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
