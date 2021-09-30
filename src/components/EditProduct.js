import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();

    const history = useHistory();

    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = async () => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }

    const updateProduct = async(e) => {
        e.preventDefault();
        const product = { title,  price};
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push("/");
    }

    return (
        <div className="mt-6">
            <h1 className="mb-5">UPDATE DATA</h1>
            <form action="" onSubmit={updateProduct}>
                <div className="field">
                    <label for="" className="label">Title</label>
                    <div className="control">
                        <input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                    </div>
                </div>

                <div className="field">
                    <label for="" className="label">Price</label>
                    <div className="control">
                        <input type="number" className="input" value={price} onChange={ (e) => setPrice(e.target.value)} placeholder="Price" />
                    </div>
                </div>  

                <div className="field">
                    <div className="control">
                        <button className="button is-primary is-small       ">Update</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;