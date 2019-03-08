import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const insightTypePriceSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        enum: [ "Like", "Link", "Tag", "Mention", "Hashtag", "Print", "Shared", "Comment"],
        unique: true
    },
    thumbnail: String,
    price: Number
}, { versionKey: false }) 


export const insightTypePriceModel = mongoose.model('insightTypePrice', insightTypePriceSchema);