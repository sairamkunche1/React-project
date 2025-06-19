import { useEffect, useState } from "react";


const ProductsCard =({image , title})=>{
    return( <div className="product-card">             
                <img src={image} alt={title} className="w-5xl"></img>
                 <span className="">{title}</span>
           </div>

    );
    
};
const Products = ()=>{
    const [products , setProducts] = useState([]);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async ()=>{
        result = await fetch('https://dummyjson.com/products?limit=100');
        result = await result.json();
        setProducts(result.products);
        

    };

    return (
        <div className="Products-container">
            {
                products.map((p) => (
                    <ProductsCard key={p.id} title={p.title} image={p.thumbnail}/>
                ))
            }
        </div>
    )

}

export default Products;