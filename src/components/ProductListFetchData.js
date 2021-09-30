import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListFetchData = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('http://localhost:8080/products');
        const data = await response.json();
        setProducts(data);
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetchData();
    }

    return (
        <div className="">
            <Link to={ `/add` } rel="stylesheet" href="" className="button is-small is-primary mt-5 mb-5">Add New</Link>
            <table className="table is-bordered is-fullwidth">
                    <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => (
                                <tr key={ product.id }>
                                    <td>{ index + 1 }</td>
                                    <td>{ product.title }</td>
                                    <td>{ product.price }</td>
                                    <td>
                                        <Link to={ `/edit/${product.id}` } className="button is-small is-primary mr-3">Edit</Link>
                                        <button href="" className="button is-small is-danger" onClick={ () => deleteProduct(product.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
    </div>
    )
}

export default ProductListFetchData;