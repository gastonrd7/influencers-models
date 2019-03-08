import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const ageSchema = new Schema({
    _id: Schema.Types.ObjectId,
    age: {
        type: Number,
        unique: true
    },
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
}, { versionKey: false }) 


export const ageModel = mongoose.model('age', ageSchema);