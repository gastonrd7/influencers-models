import * as mongoose from 'mongoose';
import validators from './validator';
import { regionSchema } from './region';
import { personSchema } from './person';
import { ageSchema } from './age';
import { categorySchema } from './category';
import { sexSchema } from './sex';
import { sponsorshipEffectivenessSchema } from './sponsorshipEffectiveness';
import { spotEffectivenessSchema } from './SpotEffectiveness';
import { advertisingEffectivenessSchema } from './advertisingEffectiveness';
import { starSchema } from './star';
import { nationalitySchema } from './nationality';
import { religionSchema } from './religion';


const Schema = mongoose.Schema;

export const campaignSchema = new Schema({
    _id: Schema.Types.ObjectId,
    companyId: {type: Schema.Types.ObjectId, ref:'Company'},
    status: {
        type: String,
        enum: ["PreDraft", "Draft", "OnGoing", "WaitingForPayment", "WaitingForApproval", "Stopped", "Finished"]
    },
    nextStatuses: {
        type: [String],
        default: ["PreDraft", "Draft", "OnGoing", "WaitingForPayment", "WaitingForApproval", "Stopped", "Finished"]
    },
    name: {
        type: String,
        validate: [
            validators.isLength2to10
        ]
    },
    brief: String,
    type: {
        type: String,
        enum: ["Spot", "Sponsorship", "Advertising"],
        default: "Sponsorship"
    },
    influencePeopleAs: {
        type: String,
        enum: ["IR", "ID"],
        default: "IR"
    },
    adsPerIR: {
        type: Number,
        default: 1
    },
    paymentType: {
        type: String,
        enum: ["Money", "Product"],
        default: "Money"
    },
    productPaymentDescription: String,
    paymentPerEach: {
        type: Number,
        default: 1
    },
    active: {
        type: Boolean,
        default: false
    },
    specificTarget: {
        type: Boolean,
        default: false
    },
    followers: {
        type: Boolean,
        default: false
    },
    resources: {
		frame: { enabled: { type: Boolean, default: true }},
        hashtag: { enabled: {type: Boolean, default: true}, value: {type: String, default: ''}},
        webSite: { enabled: {type: Boolean, default: true}, value: {type: String, default: ''}},
        tagMentionMe: { 
            enabled: {type: Boolean, default: false}, 
            facebook: { enabled: {type: Boolean, default: false}, value: {type: String, default: ''}}, 
            instagram: { enabled: {type: Boolean, default: false}, value: {type: String, default: ''}}, 
            twitter: { enabled: {type: Boolean, default: false}, value: {type: String, default: ''}},  
        },
        seal: { enabled: {type: Boolean, default: true}, value: {type: String, default: 'companyNameBD'}},
        tagMentionPeople: { enabled: { type: Boolean, default: true }},
        productUsage: { enabled: { type: Boolean, default: true }},
        productUsageOficial: { enabled: {type: Boolean, default: false}, value: {type: String, default: ''}},
		spot: {
			imageEnabled: {type: Boolean, default: false},
			image: {type: String, default: null},
			description: {type: String, default: ''},
			videoEnabled: {type: Boolean, default: false},
            video: {type: String, default: null},
		}
    },
    regionCriterias: { type: [regionSchema], default: []},
    regionScope: [{type: Schema.Types.ObjectId, ref:'Person'}],
    nationalityCriterias: { type: [nationalitySchema], default: []},
    nationalityScope: [{type: Schema.Types.ObjectId, ref:'Person'}],
    religionCriterias: { type: [religionSchema], default: []},
    religionScope: [{type: Schema.Types.ObjectId, ref:'Person'}],
    sexCriterias: { type: [sexSchema], default: []},
    sexScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    customerStarCriterias: { type: [starSchema], default: []},
    customerStarScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    platformStarCriterias: { type: [starSchema], default: []},
    platformStarScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    sponsorshipEffectivenessCriterias: { type: [sponsorshipEffectivenessSchema], default: []},
    sponsorshipEffectivenessScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    spotEffectivenessCriterias: { type: [spotEffectivenessSchema], default: []},
    spotEffectivenessScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    advertisingEffectivenessCriterias: { type: [advertisingEffectivenessSchema], default: []},
    advertisingEffectivenessScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    categoryCriterias: { type: [categorySchema], default: []},
    categoryScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    ageCriterias: { type: [ageSchema], default: []},
    ageScope:  [{type: Schema.Types.ObjectId, ref:'Person'}],
    specificTargetScope : {
        type: [{
                _id: {type: Schema.Types.ObjectId, ref:'Person'},
                firstName: String,
                lastName: String,
                key: String,
                sponsorshipEffectivenessReference: { type: sponsorshipEffectivenessSchema, default: null },
                spotEffectivenessReference: {type: spotEffectivenessSchema, default: null },
                advertisingEffectivenessReference: {type: advertisingEffectivenessSchema, default: null },
            }],
        default: []
    },
    regionCriteriaUpdatedDt: { 
        type: Date,
        default: Date.now
    },
    nationalityCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    religionCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    sexCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    customerStarCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    platformStarCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    sponsorshipEffectivenessCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    spotEffectivenessCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    advertisingEffectivenessCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    categoryCriteriaUpdatedDt: { 
        type: Date, 
        default: Date.now
    },
    investment: Number,
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
    moneyPerEngagementExpected: {
        type: Number,
        default: 100
    },
    moneyPerEngagementReal: {
        type: Number,
        default: 0
    },
    engagementReal: {
        type: Number,
        default: 0
    },
    engagementExpected: {
        type: Number,
        default: 0
    },
    engagementVelocityReal: {
        type: Number,
        default: 0
    },
    engagementVelocityExpected: {
        type: Number,
        default: 0
    },
    forecastDays: {
        type: Number,
        default: 0
    },
    creationDt: { 
        type: Date, 
        default: Date.now
    },
    startDt: { 
        type: Date, 
        default: Date.now
    },
    endDt: { 
        type: Date, 
        default: new Date().setDate(new Date().getDate() + 10) 
    },
    engagementFacebook: {
        type: Number,
        default: 0
    },
    engagementInstagram: {
        type: Number,
        default: 0
    },
    engagementTwitter: {
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
    engagementNotSponsored: {
        type: Number,
        default: 0
    },
    engagementMaleInfluencer: {
        type: Number,
        default: 0
    },
    engagementFemaleInfluencer: {
        type: Number,
        default: 0
    },
    engagementMaleInfluenced: {
        type: Number,
        default: 0
    },
    engagementFemaleInfluenced: {
        type: Number,
        default: 0
    },
    engagementScopeCount: {
        type: Number,
        default: 0
    },
    influencersScope: [{type: Schema.Types.ObjectId, ref:'Person'}],
    influencersScopeAll: {
        type: Boolean,
        default: true
    },
    influencersScopeCount: {
        type: Number,
        default: 0
    },
    influencersTotal: {
        type: Number,
        default: 0
    },
    influencersTotalHistoric: {
        type: [{
            timespan: { 
                type: Date, 
                default: Date.now 
            },
            value: { 
                type: Number, 
                default: 0 
            }
        }]
    },
    engagementRealHistoric: {
        type: [{
            timespan: { 
                type: Date, 
                default: Date.now 
            },
            value: { 
                type: Number, 
                default: 0 
            }
        }]
    },
    engagementNotSponsoredTotalHistory: {
        type: [{
            timespan: { 
                type: Date, 
                default: Date.now 
            },
            value: { 
                type: Number, 
                default: 0 
            }
        }]
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
    facebookMaleInfluencerCount: {
        type: Number,
        default: 0
    },
    facebookFemaleInfluencerCount: {
        type: Number,
        default: 0
    },
    facebookMaleInfluencedCount: {
        type: Number,
        default: 0
    },
    facebookFemaleInfluencedCount: {
        type: Number,
        default: 0
    },
    twitterMaleInfluencerCount: {
        type: Number,
        default: 0
    },
    twitterFemaleInfluencerCount: {
        type: Number,
        default: 0
    },
    twitterMaleInfluencedCount: {
        type: Number,
        default: 0
    },
    twitterFemaleInfluencedCount: {
        type: Number,
        default: 0
    },
    instagramMaleInfluencerCount: {
        type: Number,
        default: 0
    },
    instagramFemaleInfluencerCount: {
        type: Number,
        default: 0
    },
    instagramMaleInfluencedCount: {
        type: Number,
        default: 0
    },
    instagramFemaleInfluencedCount: {
        type: Number,
        default: 0
    },
    facebookInfluencersCardinal: {
        type:[[Number]]
    },
    twitterInfluencersCardinal: {
        type:[[Number]]
    },
    instagramInfluencersCardinal: {
        type:[[Number]]
    },
    facebookInfluencedsCardinal: {
        type:[[Number]]
    },
    twitterInfluencedsCardinal: {
        type:[[Number]]
    },
    instagramInfluencedsCardinal: {
        type:[[Number]]
    }
}, { versionKey: false })


export const campaignModel = mongoose.model('campaign', campaignSchema);