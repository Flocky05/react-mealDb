import React, { useEffect, useState } from 'react';

const Cart = (props) => {
    const { food } = props;
    const { strMealThumb, strMeal, strInstructions } = food;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className='w-full h-full' src={strMealThumb} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{strMeal}!</h2>
                    <p>{strInstructions.slice(0, 200)}</p>
                    <div className="card-actions justify-center ">
                        <button className="btn bg-red-500 w-full">Oder Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;