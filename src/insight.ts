import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const insightSchema = new Schema({
    _id: Schema.Types.ObjectId,
    postId: {type: Schema.Types.ObjectId, ref:'Post'},
    advertisementId: {type: Schema.Types.ObjectId, ref:'Advertisement'},
    campaignId: {type: Schema.Types.ObjectId, ref:'Campaign'},
    companyId: {type: Schema.Types.ObjectId, ref:'Company'},
    platform: {
        type: String,
        enum: ["Facebook", "Instagram", "Twitter"]
    },
    genre: {
        type: String,
        enum: ["Male", "Female"]
    },
    birthDateYear: {
        type: Number
    },
    birthDateMonth: {
        type: Number
    },
    birthDateDay: {
        type: Number
    },
    engagedObject: {
        type : {
            genre: {
                type: String,
                enum: ["Male", "Female"]
            },
            birthDateYear: {
                type: Number
            },
            birthDateMonth: {
                type: Number
            },
            birthDateDay: {
                type: Number
            },
        }
    },
    type: {
        type: String,
        enum: ["Like", "Link", "Tag", "Mention", "Hashtag", "Print", "Shared", "Comment"]
    },
    creationDt: { 
        type: Date, 
        default: Date.now 
    }
}, { versionKey: false })


export const insightModel = mongoose.model('insight', insightSchema);