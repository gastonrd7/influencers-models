import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const categorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true
    },
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
    updatedDt: { 
        type: Date, 
        default: Date.now
    }
}, { versionKey: false }) 


export const categoryModel = mongoose.model('category', categorySchema);