import  faker from 'faker'
import { useContext, useState } from 'react';
import SingleProduct from './SingleProduct';
import  './style.css' 
import { Cart } from '../Context';

faker.seed(100);

const Home = ({}) => {

    const productsArray = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
    }));

    
    const [products] = useState(productsArray);


    return (

    <div className='my-10 mx-auto w-[70%] md:w-[90%]'>
        <div className='productContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {products.map((prod) => (
            <SingleProduct prod={prod} key={prod.id}/>
        ))}
        </div>
    </div>
    
    )
};


export default Home;

