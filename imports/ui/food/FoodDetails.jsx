import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

export default class FoodDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="food-item">
                {this.params.id}
            </div>
        )
    }
}
