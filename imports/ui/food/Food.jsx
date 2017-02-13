import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import {ListItem} from 'react-onsenui'

export default class Food extends Component {
    render() {
        return (
            <div className="list-item">
                <ListItem key={this.props.food._id}>
                    {this.props.food.name}&nbsp;&nbsp;<span className="phase-number">({this.props.food.phase})</span>
                </ListItem>
            </div>
        )
    }
}

Food.propTypes = {
    food: PropTypes.object.isRequired
}
