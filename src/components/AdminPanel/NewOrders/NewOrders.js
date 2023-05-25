import classes from './NewOrders.module.css';
import { useState, useEffect, useCallback } from 'react';
import OrderItem from './OrderItem';


const NEW_ORDERS = [
    {
        id: '01',
        status: 'new',
        pizza: 'Margerita',
    },
    {
        id: '02',
        status: 'new',
        pizza: 'Capriciossa'
    }
]

const NewOrders = () => {

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
            orderedItems: data[key].orderedItems,
            user: data[key].user,
            });
        }
        setLoadedOrders(loadedMenu);
        } catch (error) {
        }
    }, []);

  useEffect(() => {
    fetchMenuHandler();
    setReset(!reset);
  }, []);

    console.log(loadedOrders);
    return(
        <div className={classes.container}>
        <div className={classes.itemCont}>
            <p className={classes.title}>Margerita</p>
            <p className={classes.address}>Bartłomiej Wydrzycki Zalesie 128B, Kielce</p>
            <button>Realized</button>
        </div>
        <div className={classes.itemCont}>
            <p className={classes.title}>Capriciossa</p>
            <p className={classes.address}>Jakub Wojnowski, Wojnowska 111, Sokołów</p>
            <button>Realized</button>
        </div>
        <div className={classes.itemCont}>
            <p className={classes.title}>Parma</p>
            <p className={classes.address}>Mati Gembka, Górnicka 123, Radom</p>
            <button>Realized</button>
        </div>
        <div className={classes.itemCont}>
            <p className={classes.title}>Wojnollowsky</p>
            <p className={classes.address}>Karol Górnicki, Artwinskiego 19, Kielce</p>
            <button>Realized</button>
        </div>
        </div>
    )
}

export default NewOrders;