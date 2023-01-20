import React from 'react';
import './app.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ProductList from './components/ProductList/ProductList';



function App() {
    return <div>
        <CreateProduct></CreateProduct>
        <ProductList></ProductList>
    </div>
}


export default App;