import classes from './NewOrders.module.css';
import { useState, useEffect, useCallback } from 'react';
import OrderItem from './OrderItem';

const NewOrders = () => {

    useEffect(() => {
        fetchMenuHandler();
    });


    const [loadedOrders, setLoadedOrders] = useState([]);
    const [reset, setReset] = useState(false);

    const fetchMenuHandler = useCallback(async () => {
        try {
        const response = await fetch(
            "https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/orders.json"
        );
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        const data = await response.json();
        const loadedMenu = [];

        for (const key in data) {
            loadedMenu.push({
            id: key,
            orderedItems: data[key].orderedItems,
            user: data[key].user,
            });
        }
        setLoadedOrders(loadedMenu);
        } catch (error) {
        }
    }, []);

    return(
        <div className={classes.ordersContainer}>
            {loadedOrders.map((order) => {
                if(order.user.status == 'new') {
                    return (
                        <OrderItem key={order.id} order={order} onRefresh={fetchMenuHandler}/>
                    )
                }
            })}
        </div>
    )
}

export default NewOrders;