import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const sexSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        enum: ["Male", "Female"]
    },
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
}, { versionKey: false }) 


export const sexModel = mongoose.model('sex', sexSchema);