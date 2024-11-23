import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/ProductShowcase";
import Layout from "./pages/Layout";

const App = () => {
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <Router>
      <Layout selectedPage={selectedPage} onSetPage={setSelectedPage}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ProductShowcase" element={<AllProductsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
