import './app.css';
import Products from "./components/products";

const products = [
    {
        pId: 1,
        pName: 'Fresh Milk',
        desc: 'Builds the app for production to the `build` folder\
        It correctly bundles React in production mode and optimizes the build for the best performance.',
        isAvailable: false,
        image: 'images/milk.png',
        price: 40
    },
    {
        pId: 2,
        pName: 'Curd',
        desc: 'Builds the app for production to the `build` folder\
        It correctly bundles React in production mode and optimizes the build for the best performance.',
        isAvailable: true,
        image: 'images/curd.png',
        price: 15
    },
    {
        pId: 3,
        pName: 'Orange Juice',
        desc: 'Builds the app for production to the `build` folder\
        It correctly bundles React in production mode and optimizes the build for the best performance.',
        isAvailable: true,
        image: 'images/orange juice.png',
        price: 55
    },
    {
        pId: 4,
        pName: 'Pringles',
        desc: 'Builds the app for production to the `build` folder\
        It correctly bundles React in production mode and optimizes the build for the best performance.',
        isAvailable: false,
        image: 'images/pringles.png',
        price: 110
    },
    {
        pId: 5,
        pName: 'Olive oil',
        desc: 'Builds the app for production to the `build` folder\
        It correctly bundles React in production mode and optimizes the build for the best performance.',
        isAvailable: true,
        image: 'images/olive oil.png',
        price: 600
    },
]

function App() {
    return (<div className='row'>
        <div className='col-lg-8 mx-auto'>
            <Products
                id={products[0].pId}
                Name={products[0].pName}
                Description={products[0].desc}
                isAvailable={products[0].isAvailable}
                Imageurl={products[0].image}
                price={products[0].price}>
            </Products>

            <Products
                id={products[1].pId}
                Name={products[1].pName}
                Description={products[1].desc}
                isAvailable={products[1].isAvailable}
                Imageurl={products[1].image}
                price={products[1].price}>

            </Products>

            <Products
                id={products[2].pId}
                Name={products[2].pName}
                Description={products[2].desc}
                isAvailable={products[2].isAvailable}
                Imageurl={products[2].image}
                price={products[2].price} >

            </Products>

            <Products
                id={products[3].pId}
                Name={products[3].pName}
                Description={products[3].desc}
                isAvailable={products[3].isAvailable}
                Imageurl={products[3].image}
                price={products[3].price} >

            </Products>

            <Products
                id={products[4].pId}
                Name={products[4].pName}
                Description={products[4].desc}
                isAvailable={products[4].isAvailable}
                Imageurl={products[4].image}
                price={products[4].price}>

            </Products>
        </div>

    </div>);
}


export default App;