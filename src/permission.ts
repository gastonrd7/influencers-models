import * as mongoose from 'mongoose';
import validators from './validator';
const Schema = mongoose.Schema;

export const permissionSchema = new Schema({
    _id: Schema.Types.ObjectId,
    app: {
        type: String,
        enum: ["Web", "Mobile", "Others"]
    },
    permission: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    enabled : {
        type: Boolean,
        default: true,
    },
    creationDt: { 
        type: Date, 
        default: Date.now 
    }
}, { versionKey: false }) 


export const permissionModel = mongoose.model('permission', permissionSchema);