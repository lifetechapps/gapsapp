import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

import { Foods } from '../../api/foods/foods.js'

export default class FoodDetails extends Component {
    constructor( props ) {
        super( props )
        this.state = { food: Foods.findOne( new Mongo.ObjectID( this.props.params.foodId ) ) }
    }


    render() {
        return (
            <div className="food-item">
                <h3>{this.state.food.name}</h3>
                <h3>Category: {this.state.food.category}</h3>
                <h3>First GAPS Phase:&nbsp;{this.state.food.phase}</h3>
            </div>
        )
    }
}
