import {Mongo} from 'meteor/mongo'

export const Foods = new Mongo.Collection('foods')
Meteor.methods({
    'foods.insert' (text) {
        Foods.insert({text, createdAt: new Date()})
    },
    'foods.remove' (id) {
        check(id, String)

        Tasks.remove(id)
    }
})