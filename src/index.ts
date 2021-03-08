enum Model {
    company = "company",
    campaign = "campaign",
    advertisement = "advertisement",
    post = "post",
    postExternal = "postExternal",
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
    people_relationship = "people_relationship",
    referral = "referral",
    trace = "trace",
    webSession = "webSession",
    socialMediaImplementation = "socialMediaImplementation",
    fullStackWorkFlowState = "fullStackWorkFlowState",
    termsAndConditions = "termsAndConditions"
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
    campaignName = "campaignName",
    campaignType = "campaignType",
    companyId = "companyId",
    companyName = "companyName",
    companyLogo = "companyLogo",
    personId = "personId",
    address_geoPoint = "address_geoPoint",
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
    resourceFramePrice = "resourceFramePrice",
    resourceHashtagPrice = "resourceHashtagPrice",
    resourceWebSitePrice = "resourceWebSitePrice",
    resourceTagMentionMePrice = "resourceTagMentionMePrice",
    resourceSealPrice = "resourceSealPrice",
    resourceTagMentionPeoplePrice = "resourceTagMentionPeoplePrice",
    resourceUsagePrice = "resourceProductUsagePrice",
    resourceUsageOfficialPrice = "resourceUsageOfficialPrice",
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
    resources = "resources"
}

enum advertisementStatusEnum {
    NotSponsored = "NotSponsored",
    WaitingForPlatformAudit = "WaitingForPlatformAudit",
    WaitingForCustomerAudit = "WaitingForCustomerAudit",
    RejectedByPlatform = "RejectedByPlatform",
    RejectedByCustomer = "RejectedByCustomer",
    Approved = "Approved"
}

enum postExternalFields {
    advertisementId = "advertisementId",
    platform = "platform",
    platformObjectIdentity = "platformObjectIdentity"
}

enum postFields {
    _id = "_id",
    advertisementId = "advertisementId",
    personId = "personId",
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

enum socialMediaStatusEnum {
    None = "None", 
    PostRequired = "PostRequired",
    Posting = "Posting", 
    Posted = "Posted", 
    Failed = "Failed", 
    Removed = "Removed", 

}

enum postFeedStatusEnum {
    Idle = "Idle",
    Fetching = "Fetching",
    Failed = "Failed"
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
    platformObjectIdentity = "platformObjectIdentity",
    companyId = "companyId",
    address_geoPoint = "address_geoPoint",
    genre = "genre",
    genderId = "genderId",
    birthDateYear = "birthDateYear",
    birthDateMonth = "birthDateMonth",
    birthDateDay = "birthDateDay",
    type = "type",
    creationDt = "creationDt",
}


enum insightGenreEnum {
    Male = "Male",
    Female = "Female",
    Unknown = "Unknown"
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
    Amazesme = 'Amazesme',
    Iloveit = 'Iloveit',
    Ienjoy = 'Ienjoy',
    Angersme = 'Angersme',
    Icare = 'Icare',
    Saddensme = 'Saddensme'
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
    friendsFeedDt = "friendsFeedDt",
    friendsFeedStatus = "friendsFeedStatus",
    platformObjectIdentity = "platformObjectIdentity",
    status = "status",
    displayName = "displayName",
    access_token = "access_token",
    expires = "expires",
    userName = "userName",
    password = "password",
    picture = "picture",
    birthday = "birthday",
    firstName = "firstName",
    lastName = "lastName",
    email = "email",
    verTermsAndConditions = "verTermsAndConditions",
    creationDt = "creationDt"
}

enum person_credential_fiendsFeedStatusEnum {
    Idle = "Idle",
    Fetching = "Fetching",
    Failed = "Failed"
}

enum person_credential_statusEnum {
    NOT_LINKED = "NOT_LINKED",
    LINKING = "LINKING",
    LINKED = "LINKED",
    FAILED = "FAILED",
    EXPIRED = "EXPIRED",
    //TENTACLES
    MANUAL_ACTION_REQUIRED = "MANUAL_ACTION_REQUIRED",
    TERMS_SIGNATURE_REQUIRED = "TERMS_SIGNATURE_REQUIRED"
}

enum person_credential_statusEnumDescription  {
    NOT_LINKED = "Not linked yet!",
    LINKING = "Linking...",
    LINKED = "Linked",
    FAILED = "Process has failed",
    EXPIRED = "Expired",
    MANUAL_ACTION_REQUIRED = "Manual action is required",
    TERMS_SIGNATURE_REQUIRED = "Terms signature is required"    
};

enum platformEnum {
    Facebook = "Facebook",
    Twitter = "Twitter",
    Instagram = "Instagram"
}

enum companyFields {
    _id = "_id",
    name = "name",
    logo = "logo",
    active = "active",
    campaignsOnGoingCount = "campaignsOnGoingCount",
    campaignsWaitingForApprovalCount = "campaignsWaitingForApprovalCount",
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
    budgetSpent = "budgetSpent",
    platformStars = "platformStars",
    customerStars = "customerStars"
    
}

enum people_relationshipFields {
    _id = "_id",
    personId = "personId",
    platformObjectIdentity = "platformObjectIdentity",
    platform = "platform",
    relationship = "relationship",
    invitationStatus = "invitationStatus",
    creationDt = "creationDt"
}

enum people_relationshipEnum  {
    FRIEND_OF = "FRIEND_OF",
    FOLLOWS_TO = "FOLLOWS_TO",
    FOLLOWED_BY = "FOLLOWED_BY"
}

enum campaignInfluencePeopleAsEnum {
    IR = "IR",
    ID = "ID"
}

enum personAvailableCampaignFields {
    _id = "_id",
    companyId = "companyId",
    companyName = "companyName",
    companyLogo = "companyLogo",
    companyPlatformStars = "companyPlatformStars",
    companyCustomerStars = "companyCustomerStars",
    name = "name",
    type = "type",
    slogan = "slogan",
    brief = "brief",
    resources = "resources",
    paymentType = "paymentType",
    specificTarget = "specificTarget",
    categoryCriterias = "categoryCriterias"
}


enum campaignFields {
    _id = "_id",
    companyId = "companyId",
    companyName = "companyName",
    companyLogo = "companyLogo",
    companyPlatformStars = "companyPlatformStars",
    companyCustomerStars = "companyCustomerStars",
    name = "name",
    slogan = "slogan",
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
    adsPerIR = "adsPerIR",
    resources = "resources",
    nextStatuses = "nextStatuses",
    customerStarCriterias = "customerStarCriterias",
    platformStarCriterias = "platformStarCriterias",
    customerStarScope = "customerStarScope",
    platformStarScope = "platformStarScope",
    sponsorshipEffectivenessCriterias = "sponsorshipEffectivenessCriterias",
    sponsorshipEffectivenessScope = "sponsorshipEffectivenessScope",
    sponsorshipEffectivenessScopeAll = "sponsorshipEffectivenessScopeAll",
    spotEffectivenessCriterias = "spotEffectivenessCriterias",
    spotEffectivenessScope = "spotEffectivenessScope",
    spotEffectivenessScopeAll = "spotEffectivenessScopeAll",
    advertisingEffectivenessCriterias = "advertisingEffectivenessCriterias",
    advertisingEffectivenessScope = "advertisingEffectivenessScope",
    advertisingEffectivenessScopeAll = "advertisingEffectivenessScopeAll",
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
    influencersExpected = "influencersExpected",
    engagementVelocityReal = "engagementVelocityReal",
    engagementVelocityExpected = "engagementVelocityExpected",
    forecastDays = "forecastDays",
    influencersScope = "influencersScope",
    influencedScopeCount = "influencedScopeCount",
    influencedExtraScopeCount = "influencedExtraScopeCount",
    influencersScopeCount = "influencersScopeCount",
    engagementScopeCount = "engagementScopeCount",
    influencersScopeAll = "influencersScopeAll",
    peopleCollectionUpdateDt = "peopleCollectionUpdateDt",
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
    engagementAnonymousInfluenced = "engagementAnonymousInfluenced",
    investmentRequired = "investmentRequired",  
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
    facebookAnonymousInfluencedCount = "facebookAnonymousInfluencedCount",
    facebookFemaleInfluencedCount = "facebookFemaleInfluencedCount",
    twitterMaleInfluencerCount = "twitterMaleInfluencerCount",
    twitterFemaleInfluencerCount = "twitterFemaleInfluencerCount",
    twitterMaleInfluencedCount = "twitterMaleInfluencedCount",
    twitterAnonymousInfluencedCount = "twitterAnonymousInfluencedCount",
    twitterFemaleInfluencedCount = "twitterFemaleInfluencedCount",
    instagramMaleInfluencerCount = "instagramMaleInfluencerCount",
    instagramFemaleInfluencerCount = "instagramFemaleInfluencerCount",
    instagramMaleInfluencedCount = "instagramMaleInfluencedCount",
    instagramAnonymousInfluencedCount = "instagramAnonymousInfluencedCount",
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
    referentCode = "referentCode",
    signUpReferentPersonId = "signUpReferentPersonId",
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
    countryId = "countryId",
    stateId = "stateId",
    address_regionId = "address_regionId",
    address_street = "address_street",
    address_postalCode = "address_postalCode",
    address_geoPoint = "address_geoPoint",
    sponsorshipCampaignsUpdatedDt = "sponsorshipCampaignsUpdatedDt",
    advertisingCampaignsUpdatedDt = "advertisingCampaignsUpdatedDt",
    spotCampaignsUpdatedDt = "spotCampaignsUpdatedDt",
    sponsorshipCampaigns = "sponsorshipCampaigns",
    spotCampaigns = "spotCampaigns",
    advertisingCampaigns = "advertisingCampaigns",
    sponsorshipCampaignsCount = "sponsorshipCampaignsCount",
    advertisingCampaignsCount = "advertisingCampaignsCount",
    spotCampaignsCount = "spotCampaignsCount",
    referralsUpdateDt = "referralsUpdateDt",
    referralsCount = "referralsCount",
    referralClanCount = "referralClanCount",
    referralTitheTotal = "referralTitheTotal",
    nonSponsoredAdsCount = "nonSponsoredAdsCount",
    sponsorshipAdsCount = "sponsorshipAdsCount",
    sponsorshipEarnedMoneyTotal = "sponsorshipEarnedMoneyTotal",
    spotAdsCount = "spotAdsCount",
    spotEarnedMoneyTotal = "spotEarnedMoneyTotal",
    advertisingAdsCount = "advertisingAdsCount",
    advertisingEarnedMoneyTotal = "advertisingEarnedMoneyTotal",
    influencerCategory = "influencerCategory",
    sponsorshipCampaignCategories = "sponsorshipCampaignCategories",
    spotCampaignCategories = "spotCampaignCategories",
    advertisingCampaignCategories = "advertisingCampaignCategories",
    potentialReferralsUpdatedDt = "potentialReferralsUpdatedDt",
    potentialReferrals = "potentialReferrals"
}

enum personPotentialReferralsFields {
    status = "status",
    potentialReferral = "potentialReferral"
}

enum People_relationshipInvitationStatusEnum {
    DIDNOTSEND = "DIDNOTSEND",
    SENT = "SENT",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

enum influencerCategoryEnum {
    KING = "KING",
    QUEEN = "QUEEN",
    PRINCE = "PRINCE",
    PRINCESS = "PRINCESS",
    DUKE = "DUKE",
    DUCHESS = "DUCHESS",
    PEASANT = "PEASANT"
}

enum nationalityEnum {
    Argentina = "Argentina",
    EstadosUnidos = "EstadosUnidos",
    Venezuela = "Venezuela",
    Colombia = "Colombia"
}

enum religionEnum {
    Cristiana = "Cristiana",
    Judia = "Judia",
    Indu = "Indu",
    Protestante = "Protestante"

}

enum referralFields {
    _id = "_id",
    referentPersonId = "referentPersonId",
    referralPersonId = "referralPersonId",
    titheTotal = "titheTotal",
    creationDt = "creationDt",
    referralFirstName = "referralFirstName",
    referralLastName = "referralLastName",
    referralThumbnail = "referralThumbnail",
    referralCustomerStars = "referralCustomerStars",
    referralPlatformStars = "referralPlatformStars",
    referralReferralsCount = "referralReferralsCount",
    referralReferralClanCount = "referralReferralClanCount",
    referralInfluencerCategory = "referralInfluencerCategory",
    referralNonSponsoredAdsCount = "referralNonSponsoredAdsCount",
    referralSponsorshipAdsCount = "referralSponsorshipAdsCount",
    referralAdvertisingAdsCount = "referralAdvertisingAdsCount",
    referralSpotAdsCount = "referralSpotAdsCount"
}

enum appTypeEnum {
    Web = "Web",
    Mobile = "Mobile",
    Feed = "Feed",
    Others = "Others"
}

enum traceFields {
    _id = "_id",
    traceId = "traceId",
    traceUseCase = "traceUseCase",
    traceCauseOnOrigin = "traceCauseOnOrigin",
    traceOriginModel = "traceOriginModel",
    traceOriginModelId = "traceOriginModelId",
    traceOriginModelField = "traceOriginModelField",
    traceConsecuenceOnDestination = "traceConsecuenceOnDestination",
    traceHandler = "traceHandler",
    traceHandlerExecutionId = "traceHandlerExecutionId",
    traceDestinationModel = "traceDestinationModel",
    traceDestinationModelId = "traceDestinationModelId",
    traceDestinationModelField = "traceDestinationModelField",
    traceCreatedAt = "traceCreatedAt",
}

enum webSessionFields {
    _id = "_id",
    browser = "browser",
    domain = "domain",
    personId = "personId",
    cookies = "cookies",
    createdAt = "createdAt"
}

enum webSessionDomainEnum {
    Chrome = "Chrome",
    Firefox = "Firefox",
    Edge = "Edge",
    Safari = "Safari"
}

enum languagesEnum {
    English = "English",
    Spanish = "Spanish"
}

enum socialMediaImplementationFields {
    _id = "_id",
    platform = "platform",
    method = "method",
    failuresCount = "failuresCount",
    methodVersion = "methodVersion",
    createdAt = "createdAt"
}

enum fullStackWorkFlowStateFields{
    _id = "_id",
    personUserName = "personUserName",
    key = "key",  
    state = "state",
    payload = "payload",
    lastUpdateDt = "lastUpdateDt"
}

enum socialMediaAuthenticationValuesWorkFlowStateEnum{
    STARTED = "STARTED",
    NONE = "NONE",
    EMAIL_SAME_CODE_NEEDED = "EMAIL_SAME_CODE_NEEDED",
    EMAIL_SAME_CODE_NEEDED_PROVIDED = "EMAIL_SAME_CODE_NEEDED_PROVIDED",
    EMAIL_SAME_CODE_NEEDED_CANCELED = "EMAIL_SAME_CODE_NEEDED_CANCELED",
    EMAIL_NEW_CODE_NEEDED = "EMAIL_NEW_CODE_NEEDED",
    EMAIL_NEW_CODE_NEEDED_PROVIDED = "EMAIL_NEW_CODE_NEEDED_PROVIDED",
    EMAIL_NEW_CODE_NEEDED_CANCELED = "EMAIL_NEW_CODE_NEEDED_CANCELED",
    SMS_NEW_CODE_NEEDED = "SMS_NEW_CODE_NEEDED",
    SMS_NEW_CODE_NEEDED_PROVIDED = "SMS_NEW_CODE_NEEDED_PROVIDED",
    SMS_NEW_CODE_NEEDED_CANCELED = "SMS_NEW_CODE_NEEDED_CANCELED",
    SMS_SAME_CODE_NEEDED = "SMS_SAME_CODE_NEEDED",
    SMS_SAME_CODE_NEEDED_PROVIDED = "SMS_SAME_CODE_NEEDED_PROVIDED",
    SMS_SAME_CODE_NEEDED_CANCELED = "SMS_SAME_CODE_NEEDED_CANCELED",
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    INVALID_CREDENTIALS_PROVIDED = "INVALID_CREDENTIALS_PROVIDED",
    INVALID_CREDENTIALS_CANCELED = "INVALID_CREDENTIALS_CANCELED",
    SUCCESS = "SUCCESS",
    FAIL = "FAIL"
}

enum socialMediaAuthenticationKeysWorkFlowStateEnum{
    LINK_STATE = "LINK_STATE"
}

enum termsAndConditionsFields{
    _id = "_id",
    platform = "platform",
    version = "version",
    status = "status",
    lastUpdateDt = "lastUpdateDt"
}

enum termsAndConditionsStatusEnum{
    developing = "developing",
    inReview = "inReview",
    pendingApproval = "pendingApproval",
    approved = "approved",
    dismissed = "dismissed",
    expired = "expired"    
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
    postExternalFields,
    postFields,
    postFeedStatusEnum,
    historicFields,
    insightFields,
    insightTypeEnum,
    resourceTypeEnum,
    companyFields,
    campaignFields,
    campaignSpecificTargetScopeFields,
    itemMoment,
    genreType,
    coordinate,
    campaignStatusEnum,
    campaignTypeEnum,
    campaignPaymentTypeEnum,
    personFields,
    appTypeEnum,
    person_credentialFields,
    people_relationshipFields,
    campaignInfluencePeopleAsEnum,
    socialMediaStatusEnum,
    person_credential_fiendsFeedStatusEnum,
    person_credential_statusEnum,
    person_credential_statusEnumDescription,
    platformEnum,
    people_relationshipEnum,
    influencerCategoryEnum,
    referralFields,
    nationalityEnum,
    religionEnum,
    advertisementStatusEnum,
    personAvailableCampaignFields,
    insightGenreEnum,
    personPotentialReferralsFields,
    People_relationshipInvitationStatusEnum,
    traceFields,
    webSessionFields,
    webSessionDomainEnum,
    languagesEnum,
    socialMediaImplementationFields,
    socialMediaAuthenticationValuesWorkFlowStateEnum,
    socialMediaAuthenticationKeysWorkFlowStateEnum,
    fullStackWorkFlowStateFields,
    termsAndConditionsFields,
    termsAndConditionsStatusEnum
};
