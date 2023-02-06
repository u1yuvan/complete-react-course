import React, {useState}from 'react';
import './app.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ProductList from './components/ProductList/ProductList';



function App() {
let[newProduct, updateproduct] = useState(null)

    function createProduct(product){
        updateproduct(product);
    };

    return <div>
        <CreateProduct createProduct={createProduct}></CreateProduct>
        <ProductList newProduct={newProduct}></ProductList>
    </div>
}


export default App;