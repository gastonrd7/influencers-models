import * as mongoose from 'mongoose';
import validators from './validator';
const Schema = mongoose.Schema;

export const roleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    app: {
        type: String,
        enum: ["Web", "Mobile", "Others"]
    },
    role: {
        type: String,
        unique: true
    },
    description: {
        type: String,
        default: ''
    },
    creationDt: { 
        type: Date, 
        default: Date.now 
    }
}, { versionKey: false }) 


export const roleModel = mongoose.model('role', roleSchema);