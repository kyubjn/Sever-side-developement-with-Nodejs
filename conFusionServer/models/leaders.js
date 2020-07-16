const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const leaderSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        default: ''
    },
    abbr: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});

var Leader = mongoose.model('Leader', leaderSchema);

module.exports = Leader;