import classes from './OrderItem.module.css';

const OrderItem = (props) => {
    return(
        <div className={classes.container}>
            <p>{props.order.pizza}</p>
        </div>
    )
}

export default OrderItem