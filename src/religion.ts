import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const religionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}]
}, { versionKey: false }) 

export const religionModel = mongoose.model('religion', religionSchema);