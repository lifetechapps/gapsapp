import React, {Component, PropTypes} from 'react'
import {Meteor} from 'meteor/meteor'
import {Link} from 'react-router'
import {ListItem} from 'react-onsenui'

export default class Food extends Component {
    render() {
        return (
            <div className="list-item">
                <ListItem key={this.props.food._id}>
                    <Link to={`food/${this.props.food._id}`}><ons-icon icon='fa-apple'/>&nbsp;{this.props.food.text}</Link>
                </ListItem>
            </div>
        )
    }
}

Food.propTypes = {
    food: PropTypes.object.isRequired
}
