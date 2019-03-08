import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const starSchema = new Schema({
    _id: Schema.Types.ObjectId,
    stars: {
        type: Number,
        unique: true
    },
    customerPersonIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
    platformPersonIds: [{type: Schema.Types.ObjectId, ref:'Person'}]
}, { versionKey: false }) 


export const starModel = mongoose.model('star', starSchema);