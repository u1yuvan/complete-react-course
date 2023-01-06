let productCount = 0;
let imgurl = require("../images/fresh-milk.webp");
// let style = {
//     padding: '0px 20px', 
//     "font-size": 14,
// }

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : 'Zero'
}

function Products() {
    return <ul className="list-group shadow">
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-row p-3 d-flex">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">Fresh milk</h5>
                    <p className="font-italic text-muted mb-0 small">Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public`</p>
                    <div className="d-flex align-items-center justify-content-start mt-1">
                        <h6 className="font-weight-bold my-2" style={{'margin-right':30}}>₹770.00</h6>
                          <button className="btn btn-primary">-</button>
                        <span style={{'padding': '0px 20px',"font-size": 14,}}>{displayFormattedProductCount()}</span>
                        <button className="btn btn-primary">+</button>
                    </div>
                </div>
                <img src={imgurl} alt="Generic placeholder image" width="100" className="ml-lg order-1 order-lg-2" />
            </div>
        </li>
    </ul>
}

// React.createElement()
export default Products;