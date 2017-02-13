import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'
import {Meteor} from 'meteor/meteor'
import {createContainer} from 'meteor/react-meteor-data'
import {List, ListItem, ListHeader} from 'react-onsenui'

import {Foods} from '../../api/foods/foods.js'

import Food from './Food.jsx'

class FoodList extends Component {
    constructor(props) {
        super(props)
    }

    groupBy(array, f) {
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

    renderAllFoods() {
        let foodList = this.groupBy(this.props.foods, function (item) {
            return item.category
        })
        let content = foodList.map((element) => {
            element
                .sort(function (a, b) {
                    let catA = a
                            .category
                            .toLowerCase(),
                        catB = b
                            .category
                            .toLowerCase()
                    if (catA < catB) {
                        return -1
                    } else if (catA > catB) {
                        return 1
                    }

                    let nameA = a
                            .name
                            .toLowerCase(),
                        nameB = b
                            .name
                            .toLowerCase()
                    if (nameA < nameB) {
                        return -1
                    } else if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
            return (
                <div className="category-list">
                    <ListHeader><ons-icon icon='fa-apple'/>&nbsp;<span className="category-heading">{element[0].category}&nbsp;&nbsp;{element.length}&nbsp;Items</span></ListHeader>
                    <List>
                        {element.map((food) => {
                            return <Food food={food}/>
                        })}
                    </List>
                </div>
            )
        })
        return content
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