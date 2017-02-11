import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import {List, ListItem} from 'react-onsenui'

import {Foods} from '../../api/foods/foods.js'

import Food from './Food.jsx'

class FoodList extends Component {
    constructor(props) {
        super(props)
    }

    groupBy(array, f)
    {
        var groups = {}
        array.forEach(function (o) {
            var group = JSON.stringify(f(o))
            groups[group] = groups[group] || []
            groups[group].push(o)
        })
        return Object
            .keys(groups)
            .map(function (group) {
                return groups[group]
            })
    }

    renderFoods(element, index, array) {
        return (
            <div className="category-list">
                <h2>{element[0].category}</h2>
                <List>
                    {element.map((food) => {
                        return (<Food food={food}/>)
                    })}
                </List>
            </div>
        )
    }

    renderAllFoods() {
        let foodList = this.groupBy(this.props.foods, function (item) {
            return item.category
        })
        return foodList.forEach(this.renderFoods)
    }

    render() {
        return (
            <div className="container">{this.renderAllFoods()}</div>
        )
    }
}

FoodList.propTypes = {
    foods: PropTypes.array.isRequired
}

export default createContainer(() => {
    return {
        foods: Foods
            .find({})
            .fetch()
    }
}, FoodList)