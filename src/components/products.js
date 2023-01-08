import ProductDetails from "./ProductDetails";



let isAvailable = 'Available';

// let style = {
//     padding: '0px 20px', 
//     "font-size": 14,
// }



function Products(props) {

    return (
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">{props.Name}</h5>
                    <p className="font-italic text-muted mb-0 small">{props.Description}</p>
                    <ProductDetails price={props.price} isAvailable={props.isAvailable} />
                </div>
                <img src={(props.Imageurl)} alt="Generic placeholder image" width="100" className="ml-lg order-1 order-lg-2" />
            </div>
        </li>)
}

// React.createElement()
export default Products;