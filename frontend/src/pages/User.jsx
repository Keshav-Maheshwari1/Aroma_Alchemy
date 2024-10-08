import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadProduct from "../components/UploadProduct"; // Assuming this component exists
import UpdateProduct from "../components/UpdateProduct"; // Assuming this component exists
import DeleteProductForm from "../components/DeleteProductForm"; // Assuming this component exists

const User = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("user");

  const handleSignOut = () => {
    // Handle sign out logic
    // Redirect to home page
    navigate("/");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "user":
        return (
          <div>
            <h2>User Profile</h2>
            <p>Name: Keshav Maheshwari</p>
            <p>Email: Keshav@example.com</p>
            <p>Role: Admin</p>
            <p>Address: 123 Main St</p>
            <p>Region: Bhopal</p>
          </div>
        );
      case "addProduct":
        return <UploadProduct />;
      case "updateProduct":
        return <UpdateProduct />;
      case "deleteProduct":
        return <DeleteProductForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-full lg:w-1/4 p-4">
        <h1 className="text-lg font-bold">User Profile</h1>
        <ul className="mt-4">
          <li
            className={`p-2 cursor-pointer ${
              activeTab === "user" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveTab("user")}
          >
            User
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeTab === "addProduct" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveTab("addProduct")}
          >
            Add Product
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeTab === "updateProduct" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveTab("updateProduct")}
          >
            Update Product
          </li>
          <li
            className={`p-2 cursor-pointer ${
              activeTab === "deleteProduct" ? "bg-gray-600" : ""
            }`}
            onClick={() => setActiveTab("deleteProduct")}
          >
            Delete Product
          </li>
          <li
            className="p-2 cursor-pointer mt-4 bg-red-500"
            onClick={handleSignOut}
          >
            Sign Out
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 bg-gray-100">
        {renderContent()}
      </div>
    </div>
  );
};

export default User;
