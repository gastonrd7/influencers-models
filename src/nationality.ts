import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const nationalitySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
    geoPoint: {
        type: {
            type: String,
            enum: ["Point", "Polygon"],
            default: "Point" 
        },
        coordinates: {
            type: [Number]
        }
    }
}, { versionKey: false }) 

export const nationalityModel = mongoose.model('nationality', nationalitySchema);