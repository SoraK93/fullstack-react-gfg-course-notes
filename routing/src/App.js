import "./App.css";
// import { Link } from "react-router-dom";
import * as ReactRouterDom from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./component/PrivateRoute";

function App() {

  const { NavLink, Routes, Route } = ReactRouterDom;
  
  const getStyle = ({isActive}) => {
    return {
      color: isActive ? "red" : "",
    }
  }

  return (
    <div className="App">
      <NavLink to="/" style={getStyle}>Home</NavLink> || 
      <NavLink to="/cart" style={getStyle}>Cart</NavLink> || 
      <NavLink to="/about" style={getStyle}>About</NavLink> ||
      <NavLink to="/login" style={getStyle}>Login</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
