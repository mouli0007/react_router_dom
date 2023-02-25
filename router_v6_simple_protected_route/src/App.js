import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Error from "./pages/Error";
import SharedLayout from "./pages/SharedLayout";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Protected_Route from "./pages/ProtectedRoute";
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="products/:productId" element={<SingleProduct />} />
            <Route path="login" element={<Login setUser={setUser} />} />
            <Route
              path="dashboard"
              element={
                <Protected_Route user={user}>
                  <Dashboard user={user} />
                </Protected_Route>
              }
            />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      ;
    </>
  );
};

export default App;
