enum Model {
    company = "company",
    campaign = "campaign",
    advertisement = "advertisement",
    post = "post",
    insight = "insight",
    person = "person",
    historic = "historic",
    region = "region",
    sex = "sex",
    age = "age",
    category = "category",
    star = "star",
    sponsorshipEffectiveness = "sponsorshipEffectiveness",
    spotEffectiveness = "spotEffectiveness",
    advertisingEffectiveness = "advertisingEffectiveness",
    insightTypePrice = "insightTypePrice",
    nationality = "nationality",
    religion = "religion",
    all = "*",
    allModelAndAllField = ">",
    permission_role = "permission_role",
    permission = "permission",
    person_company = "person_company",
    role = "role",
    person_credential = "person_credential",
    people_relationship = "people_relationship"
}

enum appTypes {
    Web = "Web",
    Mobile = "Mobile",
    Feed = "Feed",
    Others ="Others"
}

enum permission_roleFields {
    _id = "_id",
    roleId = "roleId",
    permissionId = "permissionId",
    creationDt = "creationDt"
}

enum permissionFields {
    _id = "_id",
    app = "app",
    permission = "permission",
    description = "description",
    enabled = "enabled",
    creationDt = "creationDt"
}

enum person_companyFields {
    _id = "_id",
    personId = "personId",
    companyId = "companyId",
    roleId = "roleId",
    creationDt = "creationDt",
}

enum roleFields {
    _id = "_id",
    role = "role",
    app = "app",
    description = "description",
    creationDt = "creationDt",
}

enum insightTypePriceFields {
    _id = "_id",
    name = "name",
    thumbnail = "thumbnail",
    price = "price"
}

enum regionFields {
    _id = "_id",
    country = "country",
    state = "state",
    city = "city",
    iso2 = "iso2",
    iso3 = "iso3",
    personIds = "personIds",
    thumbnail = "thumbnail",
    geoPoint = "geoPoint"
}

enum nationalityFields {
    _id = "_id",
    name = "name",
    personIds = "personIds",
    geoPoint = "geoPoint"
}

enum religionFields {
    _id = "_id",
    name = "name",
    personIds = "personIds"
}

enum sexFields {
    _id = "_id",
    name = "name",
    personIds = "personIds"
}

enum ageFields {
    _id = "_id",
    age = "age",
    personIds = "personIds"
}

enum categoryFields {
    _id = "_id",
    name = "name",
    personIds = "personIds",
    updatedDt = "updatedDt"
}

enum starFields {
    _id = "_id",
    stars = "stars",
    customerPersonIds = "customerPersonIds",
    platformPersonIds = "platformPersonIds"
}

enum insightTypeFields {
    _id = "_id",
    name = "name",
    thumbnail = "thumbnail",
    price = "price"
}

enum sponsorshipEffectivenessFields {
    _id = "_id",
    from = "from",
    to = "to",
    AdPrice = "AdPrice",
    framePrice = "framePrice",
    hashtagPrice = "hashtagPrice",
    webSitePrice = "webSitePrice",
    tagMentionMePrice = "tagMentionMePrice",
    sealPrice = "sealPrice",
    tagMentionPeoplePrice = "tagMentionPeoplePrice",
    productUsagePrice = "productUsagePrice",
    insightAveragePrice = "insightAveragePrice",
    freezedBudget = "freezedBudget",
    insightPriceFactor = "insightPriceFactor",
    totalPrice = "totalPrice",
    personIds = "personIds"
}

enum spotEffectivenessFields {
    _id = "_id",
    from = "from",
    to = "to",
    AdPrice = "AdPrice",
    insightAveragePrice = "insightAveragePrice",
    freezedBudget = "freezedBudget",
    insightPriceFactor = "insightPriceFactor",
    totalPrice = "totalPrice",
    personIds = "personIds"
}

enum advertisingEffectivenessFields {
    _id = "_id",
    from = "from",
    to = "to",
    AdPrice = "AdPrice",
    framePrice = "framePrice",
    hashtagPrice = "hashtagPrice",
    webSitePrice = "webSitePrice",
    tagMentionMePrice = "tagMentionMePrice",
    sealPrice = "sealPrice",
    tagMentionPeoplePrice = "tagMentionPeoplePrice",
    productUsagePrice = "productUsagePrice",
    insightAveragePrice = "insightAveragePrice",
    freezedBudget = "freezedBudget",
    insightPriceFactor = "insightPriceFactor",
    totalPrice = "totalPrice",
    personIds = "personIds"
}

enum advertisementFields {
    _id = "_id",
    campaignId = "campaignId",
    companyId = "companyId",
    personId = "personId",
    personGenre = "personGenre",
    active = "active",
    multimediaUri = "multimediaUri",
    sponsored = "sponsored",
    caption = "caption",
    taggedPeople = "taggedPeople",
    status = "status",
    rejectionReason = "rejectionReason",
    platformScore = "platformScore",
    custumerScore = "custumerScore",
    creationDt = "creationDt",
    bannerIncluded = "bannerIncluded",
    watermarkIncluded = "watermarkIncluded",
    linkIncluded = "linkIncluded",
    mentionToCompanyIncluded = "mentionIncluded",
    hashtagIncluded = "hashtagIncluded",
    mentionToOtherIncluded = "mentionToOtherIncluded",
    productUsageIncluded = "productUsageIncluded",
    productUsageOficialIncluded = "productUsageOficialIncluded",
    engagementVelocityExpected = "engagementVelocityExpected",
    engagementVelocityReal = "engagementVelocityReal",
    budgetFreezed = "budgetFreezed",
    moneyAvailable = "moneyAvailable",
    moneyEarned = "moneyEarned",
    zeroBudgetDt = "zeroBudgetDt",
    advertisementPrice = "advertisementPrice",
    socialMediaTarget = "socialMediaTarget",
    facebookStatus = "facebookStatus",
    instagramStatus = "instagramStatus",
    twitterStatus = "twitterStatus",
    tagPrice = "tagPrice",
    tagCount = "tagCount",
    likePrice = "likePrice",
    likeCount = "likeCount",
    sharedPrice = "sharedPrice",
    sharedCount = "sharedCount",
    linkPrice = "linkPrice",
    linkCount = "linkCount",
    printPrice = "printPrice",
    printCount = "printCount",
    mentionPrice = "mentionPrice",
    mentionCount = "mentionCount",
    hashtagPrice = "hashtagPrice",
    hashtagCount = "hashtagCount",
    commentPrice = "commentPrice",
    commentCount = "commentCount",
    notSponsoredTagCount = "notSponsoredTagCount",
    notSponsoredLikeCount = "notSponsoredLikeCount",
    notSponsoredSharedCount = "notSponsoredSharedCount",
    notSponsoredLinkCount = "notSponsoredLinkCount",
    notSponsoredPrintCount = "notSponsoredPrintCount",
    notSponsoredMentionCount = "notSponsoredMentionCount",
    notSponsoredHashtagCount = "notSponsoredHashtagCount",
    notSponsoredCommentCount = "notSponsoredCommentCount",
    facebookLikeCount = "facebookLikeCount",
    facebookLinkCount = "facebookLinkCount",
    facebookTagCount = "facebookTagCount",
    facebookSharedCount = "facebookSharedCount",
    facebookMentionCount = "facebookMentionCount",
    facebookHashtagCount = "facebookHashtagCount",
    facebookPrintCount = "facebookPrintCount",
    facebookCommentCount = "facebookCommentCount",
    twitterLikeCount = "twitterLikeCount",
    twitterLinkCount = "twitterLinkCount",
    twitterTagCount = "twitterTagCount",
    twitterSharedCount = "twitterSharedCount",
    twitterMentionCount = "twitterMentionCount",
    twitterHashtagCount = "twitterHashtagCount",
    twitterPrintCount = "twitterPrintCount",
    twitterCommentCount = "twitterCommentCount",
    instagramLikeCount = "instagramLikeCount",
    instagramLinkCount = "instagramLinkCount",
    instagramTagCount = "instagramTagCount",
    instagramSharedCount = "instagramSharedCount",
    instagramMentionCount = "instagramMentionCount",
    instagramHashtagCount = "instagramHashtagCount",
    instagramPrintCount = "instagramPrintCount",
    instagramCommentCount = "instagramCommentCount",
    
}

enum postFields {
    _id = "_id",
    advertisementId = "advertisementId",
    campaignId = "campaignId",
    companyId = "companyId",
    platform = "platform",
    postPlatformId = "postPlatformId",
    creationDt = "creationDt",
    feedDt = "feedDt",
    feedStatus = "feedStatus",
    status = "status",
    advertisementBudgetFreezed = "advertisementBudgetFreezed",
    engagementVelocity = "engagementVelocity",
    tagCount = "tagCount",
    likeCount = "likeCount",
    sharedCount = "sharedCount",
    linkCount = "linkCount",
    printCount = "printCount",
    mentionCount = "mentionCount",
    hashtagCount = "hashtagCount",
    commentCount = "commentCount",
    notSponsoredTagCount = "notSponsoredTagCount",
    notSponsoredLikeCount = "notSponsoredLikeCount",
    notSponsoredSharedCount = "notSponsoredSharedCount",
    notSponsoredLinkCount = "notSponsoredLinkCount",
    notSponsoredPrintCount = "notSponsoredPrintCount",
    notSponsoredMentionCount = "notSponsoredMentionCount",
    notSponsoredHashtagCount = "notSponsoredHashtagCount",
    notSponsoredCommentCount = "notSponsoredCommentCount",
    facebookLikeCount = "facebookLikeCount",
    facebookLinkCount = "facebookLinkCount",
    facebookTagCount = "facebookTagCount",
    facebookSharedCount = "facebookSharedCount",
    facebookMentionCount = "facebookMentionCount",
    facebookHashtagCount = "facebookHashtagCount",
    facebookPrintCount = "facebookPrintCount",
    facebookCommentCount = "facebookCommentCount",
    twitterLikeCount = "twitterLikeCount",
    twitterLinkCount = "twitterLinkCount",
    twitterTagCount = "twitterTagCount",
    twitterSharedCount = "twitterSharedCount",
    twitterMentionCount = "twitterMentionCount",
    twitterHashtagCount = "twitterHashtagCount",
    twitterPrintCount = "twitterPrintCount",
    twitterCommentCount = "twitterCommentCount",
    instagramLikeCount = "instagramLikeCount",
    instagramLinkCount = "instagramLinkCount",
    instagramTagCount = "instagramTagCount",
    instagramSharedCount = "instagramSharedCount",
    instagramMentionCount = "instagramMentionCount",
    instagramHashtagCount = "instagramHashtagCount",
    instagramPrintCount = "instagramPrintCount",
    instagramCommentCount = "instagramCommentCount",
}

enum historicFields {
    _id = "_id",
    model = "model",
    field = "field",
    entityId = "entityId",
    value = "value",
    creationDt = "creationDt"
}

enum insightFields {
    _id = "_id",
    postId = "postId",
    platform = "platform",
    advertisementId = "advertisementId",
    campaignId = "campaignId",
    companyId = "companyId",
    genre = "genre",
    birthDateYear = "birthDateYear",
    birthDateMonth = "birthDateMonth",
    birthDateDay = "birthDateDay",
    engagedObject = "engagedObject",
    type = "type",
    creationDt = "creationDt",
}

enum insightPlatformEnum {
    Facebook = "Facebook",
    Instagram = "Instagram",
    Twitter = "Twitter"
}

enum insightTypeEnum {
    Like = "Like",
    Link = "Link",
    Tag = "Tag",
    Mention = "Mention",
    Hashtag = "Hashtag",
    Print = "Print",
    Shared = "Shared",
    Comment = "Comment",
}

enum resourceTypeEnum {
    frame = "frame",
    hashtag = "hashtag",
    webSite = "webSite",
    tagMentionMe = "tagMentionMe",
    seal = "seal",
    tagMentionPeople = "tagMentionPeople",
    productUsage = "productUsage",
    spot = "spot"
}

enum person_credentialFields {
    _id = "_id",
    personId = "personId",
    platform = "platform",
    platformObjectId = "platformObjectId",
    status = "status",
    access_token = "access_token",
    expires = "expires",
    userName = "userName",
    password = "password",
    picture = "picture",
    birthday = "birthday",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    creationDt = "creationDt"
}

enum companyFields {
    companyId = "companyId",
    name = "name",
    logo = "logo",
    campaignsOnGoingCount = "campaignsOnGoingCount",
    campaignsPendingForApprovalCount = "campaignsPendingForApprovalCount",
    campaignsFinishedCount = "campaignsFinishedCount",
    campaignsWaitingForPaymentCount = "campaignsWaitingForPaymentCount",
    campaignsStoppedCount = "campaignsStoppedCount",
    campaignsDraftCount = "campaignsDraftCount",
    moneyPerEngagementExpected = "moneyPerEngagementExpected",
    moneyPerEngagementReal = "moneyPerEngagementReal",
    investment = "investment",
    budgetAvailable = "budgetAvailable",
    budgetFreezed = "budgetFreezed",
    budgetSpent = "budgetSpent"
    
}

enum people_relationshipFields {
    _id = "_id",
    personId = "personId",
    person_credentialId = "person_credentialId",
    platform = "platform",
    relationship = "relationship",
    creationDt = "creationDt"
}

enum people_relationshipEnum {
    FRIEND_OF = "FRIEND_OF",
    FOLLOWS_TO = "FOLLOWS_TO",
    FOLLOWED_BY = "FOLLOWED_BY"


}

enum campaignInfluencePeopleAsEnum {
    IR = "IR",
    ID = "ID"
}

enum campaignFields {
    _id = "_id",
    companyId = "companyId",
    name = "name",
    brief = "brief",
    specificTarget = "specificTarget",
    influencePeopleAs = "influencePeopleAs",
    influencerPerEachOfThem = "influencerPerEachOfThem",
    followers = "followers",
    type = "type",
    paymentType = "paymentType",
    productPaymentDescription = "productPaymentDescription",
    paymentPerEach = "paymentPerEach",
    regionCriterias = "regionCriterias",
    regionScope = "regionScope",
    nationalityCriterias = "nationalityCriterias",
    nationalityScope = "nationalityScope",
    religionCriterias = "religionCriterias",
    religionScope = "religionScope",
    sexCriterias = "sexCriterias",
    sexScope = "sexScope",
    customerStarCriterias = "customerStarCriterias",
    platformStarCriterias = "platformStarCriterias",
    customerStarScope = "customerStarScope",
    platformStarScope = "platformStarScope",
    sponsorshipEffectivenessCriterias = "sponsorshipEffectivenessCriterias",
    sponsorshipEffectivenessScope = "sponsorshipEffectivenessScope",
    spotEffectivenessCriterias = "spotEffectivenessCriterias",
    spotEffectivenessScope = "spotEffectivenessScope",
    advertisingEffectivenessCriterias = "advertisingEffectivenessCriterias",
    advertisingEffectivenessScope = "advertisingEffectivenessScope",
    categoryCriterias = "categoryCriterias",
    categoryScope = "categoryScope",
    ageCriterias = "ageCriterias",
    ageScope = "ageScope",
    specificTargetScope = "specificTargetScope",
    regionCriteriaUpdatedDt = "regionCriteriaUpdatedDt",
    nationalityCriteriaUpdatedDt = "nationalityCriteriaUpdatedDt",
    religionCriteriaUpdatedDt = "religionCriteriaUpdatedDt",
    ageCriteriaUpdatedDt = "ageCriteriaUpdatedDt",
    sexCriteriaUpdatedDt = "sexCriteriaUpdatedDt",
    customerStarCriteriaUpdatedDt = "customerStarCriteriaUpdatedDt",
    platformStarCriteriaUpdatedDt = "platformStarCriteriaUpdatedDt",
    sponsorshipEffectivenessCriteriaUpdatedDt = "sponsorshipEffectivenessCriteriaUpdatedDt",
    spotEffectivenessCriteriaUpdatedDt = "spotEffectivenessCriteriaUpdatedDt",
    advertisingEffectivenessCriteriaUpdatedDt = "advertisingEffectivenessCriteriaUpdatedDt",
    categoryCriteriaUpdatedDt = "categoryCriteriaUpdatedDt",
    endDt = "endDt",
    startDt = "startDt",
    active = "active",
    status = "status",
    investment = "investment",
    budgetAvailable = "budgetAvailable",
    budgetFreezed = "budgetFreezed",
    budgetSpent = "budgetSpent",
    moneyPerEngagementExpected = "moneyPerEngagementExpected",
    moneyPerEngagementReal = "moneyPerEngagementReal",
    engagementReal = "engagementReal",
    engagementExpected = "engagementExpected",
    engagementVelocityReal = "engagementVelocityReal",
    engagementVelocityExpected = "engagementVelocityExpected",
    forecastDays = "forecastDays",
    influencersScope = "influencersScope",
    influencedScopeCount = "influencedScopeCount",
    influencedExtraScopeCount = "influencedExtraScopeCount",
    influencersScopeCount = "influencersScopeCount",
    engagementScopeCount = "engagementScopeCount",
    influencersScopeAll = "influencersScopeAll",
    creationDt = "creationDt",
    engagementFacebook = "engagementFacebook",
    engagementInstagram = "engagementInstagram",
    engagementTwitter = "engagementTwitter", 
    tagCount = "tagCount",
    likeCount = "likeCount",
    sharedCount = "sharedCount",
    linkCount = "linkCount", 
    printCount = "printCount",
    mentionCount = "mentionCount",
    hashtagCount = "hashtagCount",
    commentCount = "commentCount",
    engagementNotSponsored = "engagementNotSponsored",
    engagementMaleInfluencer = "engagementMaleInfluencer", 
    engagementFemaleInfluencer = "engagementFemaleInfluencer",
    engagementMaleInfluenced = "engagementMaleInfluenced",
    engagementFemaleInfluenced = "engagementFemaleInfluenced",
    influencersTotal = "influencersTotal",
    influencersTotalHistoric = "influencersTotalHistoric",
    engagementRealHistoric = "engagementRealHistoric",
    engagementNotSponsoredTotalHistory = "engagementNotSponsoredTotalHistory",
	facebookLikeCount = "facebookLikeCount",
    facebookLinkCount = "facebookLinkCount",
    facebookTagCount = "facebookTagCount",
    facebookSharedCount = "facebookSharedCount",
    facebookMentionCount = "facebookMentionCount",
    facebookHashtagCount = "facebookHashtagCount",
    facebookPrintCount = "facebookPrintCount",
    facebookCommentCount = "facebookCommentCount",
    twitterLikeCount = "twitterLikeCount",
    twitterLinkCount = "twitterLinkCount",
    twitterTagCount = "twitterTagCount",
    twitterSharedCount = "twitterSharedCount",
    twitterMentionCount = "twitterMentionCount",
    twitterHashtagCount = "twitterHashtagCount",
    twitterPrintCount = "twitterPrintCount",
    twitterCommentCount = "twitterCommentCount",
    instagramLikeCount = "instagramLikeCount",
    instagramLinkCount = "instagramLinkCount",
    instagramTagCount = "instagramTagCount",
    instagramSharedCount = "instagramSharedCount",
    instagramMentionCount = "instagramMentionCount",
    instagramHashtagCount = "instagramHashtagCount",
    instagramPrintCount = "instagramPrintCount",
    instagramCommentCount = "instagramCommentCount",
    facebookMaleInfluencerCount = "facebookMaleInfluencerCount",
    facebookFemaleInfluencerCount = "facebookFemaleInfluencerCount",
    facebookMaleInfluencedCount = "facebookMaleInfluencedCount",
    facebookFemaleInfluencedCount = "facebookFemaleInfluencedCount",
    twitterMaleInfluencerCount = "twitterMaleInfluencerCount",
    twitterFemaleInfluencerCount = "twitterFemaleInfluencerCount",
    twitterMaleInfluencedCount = "twitterMaleInfluencedCount",
    twitterFemaleInfluencedCount = "twitterFemaleInfluencedCount",
    instagramMaleInfluencerCount = "instagramMaleInfluencerCount",
    instagramFemaleInfluencerCount = "instagramFemaleInfluencerCount",
    instagramMaleInfluencedCount = "instagramMaleInfluencedCount",
    instagramFemaleInfluencedCount = "instagramFemaleInfluencedCount",
    facebookMaleInfluencerCardinal = "facebookMaleInfluencerCardinal",
    facebookFemaleInfluencerCardinal = "facebookFemaleInfluencerCardinal",
    twitterMaleInfluencerCardinal = "twitterMaleInfluencerCardinal",
    twitterFemaleInfluencerCardinal = "twitterFemaleInfluencerCardinal",
    instagramMaleInfluencerCardinal = "instagramMaleInfluencerCardinal",
    instagramFemaleInfluencerCardinal = "instagramFemaleInfluencerCardinal",
    facebookMaleInfluencedCardinal = "facebookMaleInfluencedCardinal",
    facebookFemaleInfluencedCardinal = "facebookFemaleInfluencedCardinal",
    twitterMaleInfluencedCardinal = "twitterMaleInfluencedCardinal",
    twitterFemaleInfluencedCardinal = "twitterFemaleInfluencedCardinal",
    instagramMaleInfluencedCardinal = "instagramMaleInfluencedCardinal",
    instagramFemaleInfluencedCardinal = "instagramFemaleInfluencedCardinal",
    facebookInfluencedsCardinal = "facebookInfluencedsCardinal",
    facebookInfluencersCardinal = "facebookInfluencersCardinal",
    instagramInfluencedsCardinal = "instagramInfluencedsCardinal",
    instagramInfluencersCardinal = "instagramInfluencersCardinal",
    twitterInfluencedsCardinal = "twitterInfluencedsCardinal",
    twitterInfluencersCardinal = "twitterInfluencersCardinal"
}

enum campaignSpecificTargetScopeFields {
    personId = "personId",
    firstName = "firstName",
    lastName = "lastName",
    key = "key",
    sponsorshipEffectiveness = "sponsorshipEffectiveness",
    spotEffectiveness = "spotEffectiveness",
    advertisingEffectiveness = "advertisingEffectiveness"
}

enum itemMoment {
    timespan = "timespan",
    value = "value" 
}

enum engagedObject {
    genre = "genre", 
    birthDateYear = "birthDateYear",
    birthDateMonth = "birthDateMonth", 
    birthDateDay = "birthDateDay"
}

enum genreType {
    Male = "Male",
    Female = "Female" 
}

enum coordinate {
    value = "value"
}

enum campaignStatusEnum {
    PreDraft = "PreDraft",
    Draft = "Draft",
    OnGoing = "OnGoing",
    WaitingForPayment = "WaitingForPayment",
    WaitingForApproval = "WaitingForApproval",
    Stopped = "Stopped",
    Finished = "Finished"
}

enum campaignTypeEnum {
    Spot = "Spot",
    Sponsorship = "Sponsorship",
    Advertising = "Advertising"
}

enum campaignPaymentTypeEnum {
    Money = "Money",
    Product = "Product"
}

enum personFields {
    _id = "_id",
    username = "username",
    password = "password",
    roleIds = "roleIds",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    nationality = "nationality",
    religion = "religion",
    thumbnail = "thumbnail",
    genre = "genre",
    genderId = "genderId",
    birthDateYear = "birthDateYear",
    birthDateMonth = "birthDateMonth",
    birthDateDay = "birthDateDay",
    age = "age",
    facebookId = "facebookId",
    instagramId = "instagramId",
    twitterId = "twitterId",
    key = "key",
    categories = "categories",
    customerStars = "customerStars",
    platformStars = "platformStars",
    sponsorshipEffectiveness = "sponsorshipEffectiveness",
    sponsorshipFreezedBudgetReference = "sponsorshipFreezedBudgetReference",
    sponsorshipEffectivenessReference = "sponsorshipEffectivenessReference",
    spotEffectiveness = "spotEffectiveness",
    spotFreezedBudgetReference = "spotFreezedBudgetReference",
    spotEffectivenessReference = "spotEffectivenessReference",
    advertisingEffectiveness = "advertisingEffectiveness",
    advertisingFreezedBudgetReference = "advertisingFreezedBudgetReference",
    advertisingEffectivenessReference = "advertisingEffectivenessReference",
    address_regionId = "address_regionId",
    address_street = "address_street",
    address_postalCode = "address_postalCode",
    address_geoPoint = "address_postalCode",
    campaignsUpdatedDt = "campaignsUpdatedDt",
    sponsorshipCampaigns = "sponsorshipCampaigns",
    spotCampaigns = "spotCampaigns",
    advertisingCampaigns = "advertisingCampaigns"
}

enum appTypeEnum {
    Web = "Web",
    Mobile = "Mobile",
    Feed = "Feed",
    Others = "Others"
}

export {
    Model,
    appTypes,
    permission_roleFields,
    permissionFields,
    person_companyFields,
    roleFields,
    insightTypePriceFields,
    regionFields,
    nationalityFields,
    religionFields,
    sexFields,
    ageFields,
    categoryFields,
    starFields,
    insightTypeFields,
    sponsorshipEffectivenessFields,
    spotEffectivenessFields,
    advertisingEffectivenessFields,
    advertisementFields,
    postFields,
    historicFields,
    insightFields,
    insightPlatformEnum,
    insightTypeEnum,
    resourceTypeEnum,
    companyFields,
    campaignFields,
    campaignSpecificTargetScopeFields,
    itemMoment,
    engagedObject,
    genreType,
    coordinate,
    campaignStatusEnum,
    campaignTypeEnum,
    campaignPaymentTypeEnum,
    personFields,
    appTypeEnum,
    person_credentialFields,
    people_relationshipFields,
    people_relationshipEnum,
    campaignInfluencePeopleAsEnum
};
