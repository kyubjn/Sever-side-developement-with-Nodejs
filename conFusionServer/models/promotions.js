const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },

    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        require: true
    },
    description: {
        type: String,
        default: ''
    },
}, {
    timestamps: true
});

var Promotion = mongoose.model('Promotion', promoSchema);

module.exports = Promotion;