import React from 'react'
import {formatPrice} from "../helpers"
class Fish extends React.Component {
    handelClick = () => {
        this.props.addTocart(this.props.index)
    }
    render(){
        const {image,name,price,desc,status} = this.props.details
        const isAvailable = this.props.details.status == `available`
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">{name}
                    <span className="price"> { formatPrice(price)}  </span>
                </h3>
                <p> {desc} </p>
                <button disabled={!isAvailable} onClick={this.handelClick} > {isAvailable? `add to cart 🛒` : `Sold Out`}</button>
            </li>
        )
    }
}

export default Fish