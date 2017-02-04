import React, {Component, PropTypes} from 'react';
import {ListItem} from 'react-onsenui';

// Food component - represents a single food item
export default class Food extends Component {
    render() {
        return (
            <ListItem>{this.props.task.text}</ListItem>
        )
    }
}

Food.propTypes = {
    // This component gets the food to display through a React prop. We can use
    // propTypes to indicate it is required
    food: PropTypes.object.isRequired
};