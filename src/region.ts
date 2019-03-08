import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const regionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    country: String,
    state: String,
    city: String,
    iso2: String,
    iso3: String,
    personIds: [{type: Schema.Types.ObjectId, ref:'Person'}],
    thumbnail: String,
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

regionSchema.index({ country: 1, state: 1, city: 1 }, { unique: true })

export const regionModel = mongoose.model('region', regionSchema);