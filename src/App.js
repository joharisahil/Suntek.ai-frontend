import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container mt-4">
                <h2 className="text-center">E-commerce Dashboard</h2>
                <Routes>
                    <Route path="/" element={<ProductTable />} />
                    <Route path="/add-product" element={<ProductForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
