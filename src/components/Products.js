import { useEffect, useState } from "react";


const ProductsCard =({image ,price, title})=>{
    return( 
        <div className="product-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full">
                {/* Product Image with proper aspect ratio */}
                <div className="relative pt-[100%] bg-gray-100">
                    <img 
                    src={image} 
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    />
                </div>

                {/* Product Info Section */}
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                    {title}
                    </h3>

                    <div className="mt-auto">
                            <span className="text-xl font-bold text-gray-900">
                                ₹{Math.ceil(price*50)}
                            </span>
                    </div>

                    {/* Add to Cart Button */}
                  <button className=" pl-5 ml-2 mt-4 w-fit bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                       Add to Cart
                  </button>
                </div>
</div>
    );
    
};

const PAGE_SIZE = 15;

const Products = ()=>{
    const [products , setProducts] = useState([]);
    const [currentpage , setcurrentpage] = useState([]);

    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async ()=>{
        result = await fetch('https://dummyjson.com/products?limit=300');
        result = await result.json();
        setProducts(result.products);
        

    };

    const handlepagechange = (n)=>{
        setcurrentpage(n);

    }
    const gotonext = ()=>{
         setcurrentpage((prev)=> prev+1);
    }

    const gotoprev =() =>{
        setcurrentpage((prev) => prev-1);
    }

    const total_products = products.length;
    const noofpages = Math.ceil(total_products/PAGE_SIZE);
    const start = currentpage*PAGE_SIZE;
    const end = start+PAGE_SIZE;

    return (
        <div>
        <div className="Products-container">
            {
                products.slice(start,end).map((p) => (
                    <ProductsCard key={p.id} title={p.title} price={p.price} image={p.thumbnail}/>
                ))
            }
        </div>
        
        <div className="p-2 pr-8 flex justify-center">
            <button disabled={currentpage===0} className="pt-1 cursor-pointer" onClick={()=> gotoprev()}>◀️</button>

            {[...Array(noofpages).keys().map((n)=>(
                <button className={"page-number" + (n=== currentpage ? " active-class" : "")} onClick={()=> handlepagechange(n)} key={n}>
                    {n}
                </button>))
            ]}
 
            <button disabled={currentpage===noofpages-1} className="pt-1 cursor-pointer" onClick={()=> gotonext()}>▶️</button >
        </div>
        
        </div>

    )

}

export default Products;