import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ConnectApp from "./pages/ConnectApp";
import Login from "./pages/login";
import Privacy from "./pages/Privacy";
import SearchProduct from "./pages/SearchProduct";
import Dashboard from "./pages/Dashboard";
import Yourproduct from "./pages/yourproduct"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/connectApp" element={<ConnectApp />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/searchproduct" element={<SearchProduct />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/yourproduct" element={<Yourproduct />} />
       

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

