import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
const [total, setTotal] = useState();
const {cart} = useContext(Cart);

    useEffect (() => {
        setTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
    }, [cart])
    return (
        <div>
            <p className="text-[30px] ms-10 mt-10">My Cart</p>
            <br />
            <p className="text-[30px] ms-10">Total: Rs.{total} </p>
            <div className="my-10 mx-auto w-[70%] md:w-[90%]">
                <div className="productContainer mx-auto flex w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11">
                    {cart.map((prod) => (
                        <SingleProduct prod={prod} key={prod.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default CartPage;