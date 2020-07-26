import React from 'react'
import {formatPrice} from "../helpers"

class Order extends React.Component {
    renderOrder = key => {
        const fish = this.props.fishes[key]
        const count = this.props.orders[key]
        const isAvailable =  fish && fish.status === "available"
        if(!isAvailable){
            return <li key={key} > 
                Sorry {fish ? fish.name : `fish`} is no longer Available 
            </li>
        }
        return (
            <li  key={key}>
                {count} lbs {fish.name}
                {formatPrice(count*fish.price)}
                <button onClick={()=> this.props.deleteFishFromOrder(key)} >delete</button>
            </li>
        )
    }
    render(){
        const OrderIds = Object.keys(this.props.orders)
        const total = OrderIds.reduce((prevTotal,key) => {
            const fish = this.props.fishes[key]
            const count = this.props.orders[key]
            const isAvailable = fish && fish.status === "available"
            if (isAvailable){
                return prevTotal + count * fish.price
            }
            return prevTotal 
        },0)
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <ul className="order" > { OrderIds.map(this.renderOrder)} </ul>
                <div className="total">
                    Total : 
                    <strong> { formatPrice(total)} </strong>
                </div>
            </div>
        )
    }
}

export default Order 