import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;


export const companySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        validate: [
            validators.isLength2to10
        ]
    },
    logo: {
        type: String,
        default: ''
    },
    active: {
        type: Boolean,
        default: true
    },
    campaignsDraftCount: {
        type: Number,
        default: 0
    },
    campaignsFinishedCount: {
        type: Number,
        default: 0
    },
    campaignsOnGoingCount: {
        type: Number,
        default: 0
    },
    campaignsWaitingForApprovalCount: {
        type: Number,
        default: 0
    },
    campaignsWaitingForPaymentCount: {
        type: Number,
        default: 0
    },
    campaignsStoppedCount: {
        type: Number,
        default: 0
    },
    moneyPerEngagementExpected: {
        type: Number,
        default: 0
    },
    moneyPerEngagementReal: {
        type: Number,
        default: 0
    },
    investment: {
        type: Number,
        default: 0
    },
    budgetAvailable: {
        type: Number,
        default: 0
    },
    budgetFreezed: {
        type: Number,
        default: 0
    },
    budgetSpent: {
        type: Number,
        default: 0
    },
    

}, { versionKey: false })


export const companyModel = mongoose.model('company', companySchema);