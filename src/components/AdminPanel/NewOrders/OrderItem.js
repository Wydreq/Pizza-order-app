import classes from './OrderItem.module.css';
import Modal from "../../UI/Modal";
import React, {useCallback, useState} from "react";
const OrderItem = (props) => {
    const [isModal, setIsModal] = useState(false);
    const [reset, setReset] = useState(false);
    const showOrder = () => {
        setIsModal(!isModal);
    };

    const setRealized = useCallback(async (props) => {
        fetch(
            `https://pizza-order-app-238e1-default-rtdb.europe-west1.firebasedatabase.app/orders/${props.id}/user.json`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    city: props.user.city,
                    name: props.user.name,
                    postalCode: props.user.postalCode,
                    status: 'realized',
                    street: props.user.street
                })
            }
        )
            .then((response) => {
                if (response.ok) {
                    props.onRefresh();
                } else {
                    setReset(!reset);
                    throw new Error("could not delete data");
                }
            })
            .catch((error) => {
                this.error = error.message;
            });
    }, []);
    return(
        <div className={classes.container}>
            <div className={classes.infoContainer}>
                <span>Name: {props.order.user.name}</span>
                <span>Street: {props.order.user.street}</span>
                <span>Postal Code: {props.order.user.postalCode}</span>
                <span>City: {props.order.user.city}</span>
                <button onClick={showOrder}>Show order</button>
                <button onClick={()=>{setRealized(props.order)}}>Realized</button>
            </div>
            {isModal && (
                <Modal onModalStatusChange={showOrder}>
                    <div className={classes.modalContainer}>
                        <p>HEJ</p>
                        <button onClick={()=>{setIsModal(!isModal)}}>Close</button>
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default OrderItem