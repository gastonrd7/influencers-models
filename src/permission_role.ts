import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const permission_roleSchema = new Schema(
    { 
    _id: Schema.Types.ObjectId,
    roleId: {type: Schema.Types.ObjectId, ref:'Role'},
    permissionId: {type: Schema.Types.ObjectId, ref:'Permission'},
    creationDt: { 
        type: Date, 
        default: Date.now 
    }
}, { versionKey: false }) 


export const permission_roleModel = mongoose.model('permission_role', permission_roleSchema);