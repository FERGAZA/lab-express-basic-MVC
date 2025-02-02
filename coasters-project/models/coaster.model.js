const { Schema, model } = require('mongoose')

const coasterSchema = new Schema({
    // fill here all the coaster properties. All right!
    title: {
        type: String
    },

    decription: {
        type: String
    },

    length: {
        type: Number
    },

    inversions: {
        type: Number
    },

    imageUrl: {
        type: String
    }
})

const Coaster = model('coaster', coasterSchema)

module.exports = Coaster