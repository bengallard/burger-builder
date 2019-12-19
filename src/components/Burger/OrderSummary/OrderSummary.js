import React, { Component } from 'react'

import Aux from '../../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
    componentDidUpdate() {
        console.log('[OrderSummary.js] didUpdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                <li key={igKey}>
                    <span style={{textTransform: "capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li> )
            })

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Your burger with these ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
        
    }
}

export default OrderSummary