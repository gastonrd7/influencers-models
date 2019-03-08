import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const spotEffectivenessSchema = new Schema({
    _id: Schema.Types.ObjectId,
    from: {
        type: Number,
        required: true
    },
    to: {
        type: Number,
        required: true
    },
    AdPrice: {
        type: Number,
        required: true
    },
    insightAveragePrice: {
        type: Number,
        default: 0
    },
    freezedBudget: {
        type: Number,
        default: 0
    },
    insightPriceFactor: {
        type: Number,
        default: 1
    }, 
    totalPrice: {
        type: Number,
        default: 0
    },
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}]
}, { versionKey: false }) 

spotEffectivenessSchema.index({ from: 1, to: 1 }, { unique: true })


export const spotEffectivenessModel = mongoose.model('spotEffectiveness', spotEffectivenessSchema);