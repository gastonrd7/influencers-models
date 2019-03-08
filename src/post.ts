import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const postSchema = new Schema({
    _id: Schema.Types.ObjectId,
    advertisementId: {type: Schema.Types.ObjectId, ref:'Advertisement'},
    campaignId: {type: Schema.Types.ObjectId, ref:'Campaign'},
    companyId: {type: Schema.Types.ObjectId, ref:'Company'},
    platform: {
        type: String,
        enum: ["Facebook", "Instagram", "Twitter"]
    },
    postPlatformId: String,
    creationDt: { 
        type: Date, 
        default: Date.now 
    },
    engagementVelocity: { 
        type: Number, 
        default: 0 
    },
    tagCount: { 
        type: Number, 
        default: 0 
    },
    likeCount: { 
        type: Number, 
        default: 0 
    },
    sharedCount: { 
        type: Number, 
        default: 0 
    },
    linkCount: { 
        type: Number, 
        default: 0
    },
    printCount: { 
        type: Number, 
        default: 0 
    },
    mentionCount: { 
        type: Number, 
        default: 0 
    },
    hashtagCount: { 
        type: Number, 
        default: 0 
    },
    commentCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredTagCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredLikeCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredSharedCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredLinkCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredPrintCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredMentionCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredHashtagCount: { 
        type: Number, 
        default: 0 
    },
    notSponsoredCommentCount: { 
        type: Number, 
        default: 0 
    },
    facebookLikeCount: {
        type: Number,
        default: 0
    },
    facebookLinkCount: {
        type: Number,
        default: 0
    },
    facebookTagCount: {
        type: Number,
        default: 0
    },
    facebookSharedCount: {
        type: Number,
        default: 0
    },
    facebookMentionCount: {
        type: Number,
        default: 0
    },
    facebookHashtagCount: {
        type: Number,
        default: 0
    },
    facebookPrintCount: {
        type: Number,
        default: 0
    },
    facebookCommentCount: {
        type: Number,
        default: 0
    },
    twitterLikeCount: {
        type: Number,
        default: 0
    },
    twitterLinkCount: {
        type: Number,
        default: 0
    },
    twitterTagCount: {
        type: Number,
        default: 0
    },
    twitterSharedCount: {
        type: Number,
        default: 0
    },
    twitterMentionCount: {
        type: Number,
        default: 0
    },
    twitterHashtagCount: {
        type: Number,
        default: 0
    },
    twitterPrintCount: {
        type: Number,
        default: 0
    },
    twitterCommentCount: {
        type: Number,
        default: 0
    },
    instagramLikeCount: {
        type: Number,
        default: 0
    },
    instagramLinkCount: {
        type: Number,
        default: 0
    },
    instagramTagCount: {
        type: Number,
        default: 0
    },
    instagramSharedCount: {
        type: Number,
        default: 0
    },
    instagramMentionCount: {
        type: Number,
        default: 0
    },
    instagramHashtagCount: {
        type: Number,
        default: 0
    },
    instagramPrintCount: {
        type: Number,
        default: 0
    },
    instagramCommentCount: {
        type: Number,
        default: 0
    },
}, { versionKey: false })


export const postModel = mongoose.model('post', postSchema);