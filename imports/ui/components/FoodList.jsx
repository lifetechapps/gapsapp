import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {List, ListItem} from 'react-onsenui';

import {Foods} from '../../api/Foods.js';

import Food from '../Food.jsx';

class FoodList extends Component {
    render() {
        return (
            <List>
                {this
                    .props
                    .foods
                    .map((food) => (
                        <ListItem key={food.text}>{food.text}</ListItem>
                    ))}
            </List>
        );
    }
}

FoodList.propTypes = {
    foods: PropTypes.array.isRequired
};

export default createContainer(() => {
    return {
        foods: Foods
            .find({})
            .fetch()
    };
}, FoodList);