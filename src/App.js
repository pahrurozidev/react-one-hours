import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import ProductList from "./components/ProductsList";
import ProductListFetchData from "./components/ProductListFetchData";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {

    // ?  Dynamic Values
    // const title = "Welcome to React";
    // const age = 20;
    // const link = "pahrurozi.github.io";

    // return (
    //     <div>
    //         <h3>{title}</h3>
    //         <h5>{age}</h5>
    //         <a href={ link }>Link go to my website</a>
    //         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste asperiores ad officia eos totam! Minima necessitatibus velit non, excepturi natus, voluptatem dolorum quibusdam dolore nisi quia libero dolores, sunt totam.</p>
    //     </div>
    // )

    // ? Components
    // return (
    //     <Header/>
    // );

    // ? Click Event
    // const clickMe = (name) => {
    //     console.log(`Hello ${name}`);
    // }

    // return (
    //     <button onClick={ () => clickMe("Pahrurozi") }>Click me</button>
    // );
    
    // ? useState Hook
    // const [title, setTitle] = useState("Welcome to mobile legend");
    // const [age, setAge] = useState(20);
    // const changeTitle = () => {
    //     setTitle("title change");
    //     setAge(40);
    // }

    // return (
    //     <div className="">
    //         <h2>{title}</h2>
    //         <p>{ age }</p>
    //         <button onClick={ changeTitle }>Change Title</button>
    //     </div>
    // );

    // ? Looping List
    // const [products, setProducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 1', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ]);

    // const changeProduct = () => {
    //     setProducts([
    //         { id: 5, title: 'Product 5', price: 5000 }
    //     ]);
    // }

    // return (
    //     <ul>
    //         {
    //             products.map(product => (
    //                 <li key={product.id}>{product.title} - { product.price}</li>
    //             ))
    //         }
    //         <button type="submit" onClick={ changeProduct }>change Product</button>
    //     </ul>
    // );

    // ? Props
    // const [products, setproducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 2', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ])

    // const deleteProduct = (productsId) => {
    //     const newProduct = products.filter(product => product.id !== productsId);
    //     setproducts(newProduct);
    // }

    // return (
    //                 // Props  |  state
    //     <ProductList products={products} deleteProduct={ deleteProduct }/>
    // ); 

    // ? useEffect Hook
    // const [products, setproducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 2', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ])
    
    // const deleteProduct = (productsId) => {
    //     const newProduct = products.filter(product => product.id !== productsId);
    //     setproducts(newProduct);
    // }

    // const [name, setName] = useState("Pahrurozi");

    // useEffect(() => {
    //     console.log('useEffect Running');
    // }, [name])
    
    // return (
    //     <div className="">
    //                 {/* Props  |  state */}
    //         <ProductList products={products} deleteProduct={deleteProduct} />
            
    //         <button type="submit" onClick={() => setName("Joko")}>Run UseEffect</button>

    //         <p>{ name }</p>
    //     </div>
    // );

    // ? React Router
    // const [products, setproducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 2', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ])
    
    // const deleteProduct = (productsId) => {
    //     const newProduct = products.filter(product => product.id !== productsId);
    //     setproducts(newProduct);
    // }

    // const [name, setName] = useState("Pahrurozi");

    // useEffect(() => {
    //     console.log('useEffect Running');
    // }, [name])
    
    // return (
    //     <div className="">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductList products={products} deleteProduct={deleteProduct} />
    //                 </Route>
    //                 <Route path="/about">
    //                     <About/>
    //                 </Route>
    //                 <Route  path="/contact">
    //                     <Contact/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );
    
    // ? Bulma Css
    // const [products, setproducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 2', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ])
    
    // const deleteProduct = (productsId) => {
    //     const newProduct = products.filter(product => product.id !== productsId);
    //     setproducts(newProduct);
    // }

    // const [name, setName] = useState("Pahrurozi");

    // useEffect(() => {
    //     console.log('useEffect Running');
    // }, [name])
    
    // return (
    //     <div className="">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductList products={products} deleteProduct={deleteProduct} />
    //                 </Route>
    //                 <Route path="/about">
    //                     <About/>
    //                 </Route>
    //                 <Route path="/contact">
    //                     <Contact/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );
    
    // ? JSON Server
    // npx json-server --watch db.json --port 8080

    // const [products, setproducts] = useState([
    //     { id: 1, title: 'Product 1', price: 1000 },
    //     { id: 2, title: 'Product 2', price: 2000 },
    //     { id: 3, title: 'Product 3', price: 3000 },
    //     {id: 4, title: 'Product 4', price: 4000},
    // ])
    
    // const deleteProduct = (productsId) => {
    //     const newProduct = products.filter(product => product.id !== productsId);
    //     setproducts(newProduct);
    // }

    // const [name, setName] = useState("Pahrurozi");

    // useEffect(() => {
    //     console.log('useEffect Running');
    // }, [name])
    
    // return (
    //     <div className="">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductList products={products} deleteProduct={deleteProduct} />
    //                 </Route>
    //                 <Route path="/about">
    //                     <About/>
    //                 </Route>
    //                 <Route path="/contact">
    //                     <Contact/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );

    // ? Fetch Data
    // return (
    //     <div className="container">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductListFetchData/>
    //                 </Route>
    //                 <Route path="/about">
    //                     <About/>
    //                 </Route>
    //                 <Route path="/contact">
    //                     <Contact/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );

    // ? Post Data
    // return (
    //     <div className="container">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductListFetchData/>
    //                 </Route>
    //                 <Route path="/add">
    //                     <AddProduct/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );

    // ? Update Data
    // return (
    //     <div className="container">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/">
    //                     <ProductListFetchData/>
    //                 </Route>
    //                 <Route path="/add">
    //                     <AddProduct/>
    //                 </Route>
    //                 <Route path="/edit/:id">
    //                     <EditProduct/>
    //                 </Route>
    //             </Switch>
    //         </Router>
    //     </div>
    // );
    // ? Delete Data
    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ProductListFetchData/>
                    </Route>
                    <Route path="/add">
                        <AddProduct/>
                    </Route>
                    <Route path="/edit/:id">
                        <EditProduct/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
    // ? Build To Production

}

export default App;


// Halaman Ketiga
// Halaman tempat pengggilan semua komponen
