import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const sponsorshipEffectivenessSchema = new Schema({
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
    framePrice: {
        type: Number,
        required: true
    },
    hashtagPrice: {
        type: Number,
        required: true
    },
    webSitePrice: {
        type: Number,
        required: true
    },
    tagMentionMePrice: {
        type: Number,
        required: true
    },
    sealPrice: {
        type: Number,
        required: true
    },
    tagMentionPeoplePrice: {
        type: Number,
        required: true
    },
    productUsagePrice: {
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

sponsorshipEffectivenessSchema.index({ from: 1, to: 1 }, { unique: true })


export const sponsorshipEffectivenessModel = mongoose.model('sponsorshipEffectiveness', sponsorshipEffectivenessSchema);