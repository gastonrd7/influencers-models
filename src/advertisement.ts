import * as mongoose from 'mongoose';
import validators from './validator';

const Schema = mongoose.Schema;

export const advertisementSchema = new Schema({
    _id: Schema.Types.ObjectId,
    campaignId: {type: Schema.Types.ObjectId, ref:'Campaign'},
    companyId: {type: Schema.Types.ObjectId, ref:'Company', default: null},
    personId:  {type: Schema.Types.ObjectId, ref:'Person'},
    active: {
        type: Boolean,
        default: true
    },
    personGenre: {
        type: String,
        enum: ["Male", "Female"]
    },
    multimediaUri: {
        type: String,
        default: null
    },
    sponsored: {
        type: Boolean,
        default: false,
    },
    caption: {
        type: String,
        default: null
    },
    taggedPeople:{
        type: [{
            personId: {type: Schema.Types.ObjectId, ref:'Person'},
            username: String,
            customerStars: {
                type: Number,
                default: 0
            },
            platformStars: {
                type: Number,
                default: 0
            }
        }],
        default: []       
    },
    status: {
        type: String,
        enum: ["NotSponsored", 
            "WaitingForPlatformAudit", 
            "WaitingForCustomerAudit", 
            "RejectedByPlatform", 
            "RejectedByCustomer", 
            "Aproved"],
        default: "NotSponsored"
    },
    rejectionReason: {
        type: String,
        enum: [
            "MultimediaContentNoApply",
            "MissingResources",
            "CaptionNotApply",
            "None"
        ],
        default: "None"
    },
    platformScore: {
        type: Number,
        default: 2.5
    },
    custumerScore: {
        type: Number,
        default: 2.5
    },
    creationDt: { 
        type: Date, 
        default: Date.now 
    },
    bannerIncluded: {
        type: Boolean, 
        default: false 
    },
    watermarkIncluded: {
        type: Boolean, 
        default: false 
    },
    linkIncluded: {
        type: Boolean, 
        default: false 
    },
    mentionToCompanyIncluded: {
        type: Boolean, 
        default: false 
    },
    hashtagIncluded: {
        type: Boolean, 
        default: false 
    },
    mentionToOtherIncluded: {
        type: Boolean, 
        default: false 
    },
    productUsageIncluded: {
        type: Boolean, 
        default: false 
    },
    productUsageOficialIncluded: {
        type: Boolean, 
        default: false 
    },
    engagementVelocityExpected: { 
        type: Number, 
        default: 0 
    },
    engagementVelocityReal: { 
        type: Number, 
        default: 0 
    },
    budgetFreezed: { 
        type: Number, 
        default: 0 
    },
    moneyAvailable: { 
        type: Number, 
        default: 0 
    },
    moneyEarned: { 
        type: Number, 
        default: 0 
    },
    zeroBudgetDt: { 
        type: Date, 
        default: new Date("1980-01-01T12:00:00Z")
    },
    advertisementPrice: { 
        type: Number, 
        default: 0 
    },
    socialMediaTarget: {
        type: [String],
        enum: ["Facebook", "Instagram", "Twitter"]
    },
    tagPrice: { 
        type: Number, 
        default: 0 
    },
    tagCount: { 
        type: Number, 
        default: 0 
    },
    likePrice: { 
        type: Number, 
        default: 0 
    },
    likeCount: { 
        type: Number, 
        default: 0 
    },
    sharedPrice: { 
        type: Number, 
        default: 0 
    },
    sharedCount: { 
        type: Number, 
        default: 0 
    },
    linkPrice: { 
        type: Number, 
        default: 0 
    },
    linkCount: { 
        type: Number, 
        default: 0 
    },
    printPrice: { 
        type: Number, 
        default: 0 
    },
    printCount: { 
        type: Number, 
        default: 0 
    },
    mentionPrice: { 
        type: Number, 
        default: 0 
    },
    mentionCount: { 
        type: Number, 
        default: 0 
    },
    hashtagPrice: {
        type: Number, 
        default: 0 
    },
    hashtagCount: { 
        type: Number, 
        default: 0 
    },
    commentPrice: { 
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


export const advertisementModel = mongoose.model('advertisement', advertisementSchema);
