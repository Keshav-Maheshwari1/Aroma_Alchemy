import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
import Home from "./pages/Home";
import UpdateProduct from "./components/UpdateProduct";
import UpdateProductForm from "./components/UpdateProductForm";
import DeleteProductForm from "./components/DeleteProductForm";
import User from "./pages/User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>}/>
        <Route path="/upload" element={<UploadProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/user/:id" element={<UpdateProductForm />} />
        <Route path="/delete" element={<DeleteProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
