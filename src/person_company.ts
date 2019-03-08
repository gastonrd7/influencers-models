import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const person_companySchema = new Schema({
    _id: Schema.Types.ObjectId,
    personId: {type: Schema.Types.ObjectId, ref:'Person'},
    companyId: {type: Schema.Types.ObjectId, ref:'Company'},
    creationDt: { 
        type: Date, 
        default: Date.now 
    },
    roleId: [{type: Schema.Types.ObjectId, ref:'Role'}],
}, { versionKey: false }) 


export const person_companyModel = mongoose.model('person_company', person_companySchema);