import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const historicSchema = new Schema({
    _id: Schema.Types.ObjectId,
    model: String,
    field: String,
    entityId: Schema.Types.ObjectId,
    value: Object,
    creationDt: { 
        type: Date, 
        default: Date.now 
    }
}, { versionKey: false })


export const historicModel = mongoose.model('historic', historicSchema);