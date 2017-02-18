import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { List, ListItem, ListHeader, SpeedDial, SpeedDialItem, Fab, Icon } from 'react-onsenui'

import { Foods } from '../../api/foods/foods.js'

import Food from './Food.jsx'

class FoodList extends Component {
    constructor( props ) {
        super( props )
    }

    groupBy( array, f ) {
        var groups = {}
        array.forEach( function( o ) {
            var group = JSON.stringify( f( o ) )
            groups[group] = groups[group] || []
            groups[group].push( o )
        })
        return Object
            .keys( groups )
            .map( function( group ) {
                return groups[group]
            })
    }

    editSelects( event ) {
        document.getElementById( 'choose-sel' ).removeAttribute( 'modifier' );
        if ( event.target.value == 'material' || event.target.value == 'underbar' ) {
            document.getElementById( 'choose-sel' ).setAttribute( 'modifier', event.target.value );
        }
    }

    phase( phaseNumber ) {


    }
    renderAllFoods() {
        let foodList = this.groupBy( this.props.foods, function( item ) {
            return item.category
        })
        let content = foodList.map(( element ) => {
            return (
                <div className="category-list">
                    <SpeedDial position="bottom right">
                        <Fab>
                            <Icon icon="fa-chevron-circle-up" />
                        </Fab>
                        {[1, 2, 3, 4, 5, 6, 7].map( phase =>
                            <SpeedDialItem onClick={this.phase.bind( this, { phase })}>
                                <span class="fa-stack fa-lg">
                                    <i class="fa fa-star-o fa-stack-2x"></i>
                                    <i class="fa fa-stack-1x">{phase}</i>
                                </span>
                            </SpeedDialItem> )
                        }
                    </SpeedDial>
                    <ListHeader><ons-icon icon='fa-apple' />&nbsp;<span className="category-heading">{element[0].category} &nbsp;&nbsp;{element.length} &nbsp;Items</span></ListHeader>
                    <List>
                        {element.map(( food ) => {
                            return <Food food={food} />
                        })}
                    </List>
                </div>
            )
        })
        return content
    }

    render() {
        return (

            <div className="container">
                <div className="selector">GAPS Phase:&nbsp;7</div>
                {this.renderAllFoods()}</div>
        )
    }
}

FoodList.propTypes = {
    foods: PropTypes.array.isRequired
}

export default createContainer(() => {
    return {
        foods: Foods
            .find( {}, { sort: [["category", "asc"], ["name", "asc"]] })
            .fetch()
    }
}, FoodList)