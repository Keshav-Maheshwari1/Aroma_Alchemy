import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadProduct from "./components/UploadProduct";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/upload" element={<UploadProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
