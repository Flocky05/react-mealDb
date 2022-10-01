import { useEffect, useState } from 'react';
import React from 'react';
import Cart from '../Cart/Cart';

const Shops = () => {
    const [foods, setFoods] = useState({});

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
            .then(res => res.json())
            .then(data => setFoods(data.meals));

    }, []);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] mx-auto mt-10'>
            {
                foods.length ? foods.map(food => (<Cart key={food.id} food={food}></Cart>)) : null
            }
        </div>
    );
};

export default Shops;