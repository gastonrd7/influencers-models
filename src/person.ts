import * as mongoose from 'mongoose';
import validators from './validator';
import { sponsorshipEffectivenessSchema } from './sponsorshipEffectiveness';
import { spotEffectivenessSchema } from './SpotEffectiveness';
import { advertisingEffectivenessSchema } from './advertisingEffectiveness';

const Schema = mongoose.Schema;

export const personSchema = new Schema({
    _id: Schema.Types.ObjectId,
    username: {
        type: String,
        default: ''
        // unique: true,
        // validate: [
        //     validators.isLength6to10,
        //     validators.isAlphanumeric
        // ]
    },
    roleIds: [],
    password: String,
    firstName: String,
    lastName: String,
    facebookId: {
        type: String
    },
    instagramId: {
        type: String
    },
    twitterId: {
        type: String
    },
    desc: String,
    bio: String,
    email: {
        type: String,
        validate: validators.isEmail,
    },
    nationality: {
        type: String,
        enum: ["Argentina", "EstadosUnidos", "Venezuela", "Colombia"]
    },
    religion: {
        type: String,
        enum: ["Cristiana", "Judia", "Indu", "Protestante"]
    },
    thumbnail: String,
    posts: {
        type: [],
        default: []
    },
    following: {
        type: [],
        default: []
    },
    followers: {
        type: [],
        default: []
    },
    genre: {
        type: String,
        enum: ["Male", "Female"]
    },
    birthDateYear: {
        type: Number,
        default: 1985
    },
    birthDateMonth: {
        type: Number,
        default: 9
    },
    birthDateDay: {
        type: Number,
        default: 29
    },
    age: {
        type: Number,
        default: 0,
    },
    key: {
        type: String
    },
    categories: [{type: Schema.Types.ObjectId, ref:'Category'}],
    customerStars: {
        type: Number,
        default: 0
    },
    platformStars: {
        type: Number,
        default: 0
    },
    sponsorshipEffectiveness: {
        type: Number,
        default: 0
    },
    sponsorshipFreezedBudgetReference: {
        type: Number,
        default: 0
    },
    sponsorshipEffectivenessReference: { type: sponsorshipEffectivenessSchema, default: null },
    spotEffectiveness: {
        type: Number,
        default: 0
    },
    spotFreezedBudgetReference: {
        type: Number,
        default: 0
    },
    spotEffectivenessReference:  { type: spotEffectivenessSchema, default: null },
    advertisingEffectiveness: {
        type: Number,
        default: 0
    },
    advertisingFreezedBudgetReference: {
        type: Number,
        default: 0
    },
    advertisingEffectivenessReference: { type: advertisingEffectivenessSchema, default: null },
    address_regionId: {type: Schema.Types.ObjectId, ref:'Region'},
    address_street: String,
    address_postalCode: String,
    address_geoPoint: {
        type: {
            type: String,
            enum: ["Point", "Polygon"]
        },
        coordinates: {
            type: [Number]
        }
    },
    campaignsUpdatedDt: { 
        type: Date, 
        default: Date.now 
    },
    sponsorshipCampaigns: [{
        campaignId: {type: Schema.Types.ObjectId, ref:'Campaign'},
        companyName: String,
        campanylogo: String,
        campaignName: String
    }],
    spotCampaigns: [{
        campaignId: {type: Schema.Types.ObjectId, ref:'Campaign'},
        companyName: String,
        campanylogo: String,
        campaignName: String
    }]
}, { versionKey: false }) 


export const personModel = mongoose.model('person', personSchema);