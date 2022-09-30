import React, { useEffect, useState } from 'react';

const Cart = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;