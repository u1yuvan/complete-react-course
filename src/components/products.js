;

function Products() {
    return <ul className="list-group shadow">
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-row p-3">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2">Fresh milk</h5>
                    <p className="font-italic text-muted mb-0 small">Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can be referenced from the HTML.</p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                        <h6 className="font-weight-bold my-2">₹770.00</h6>
                    </div>
                </div><img src="" alt="Generic placeholder image" width="200" className="ml-lg order-1 order-lg-2" />
            </div>
        </li>
    </ul>
}

// React.createElement()
export default Products;