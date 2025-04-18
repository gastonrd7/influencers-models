enum DomainsEnum {
    ADME_CORE = "ADME_CORE",
    ADME_MONEY = "ADME_MONEY"
}

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
    termsAndConditions = "termsAndConditions",
    termsAndConditionsHistoric = "termsAndConditionsHistoric",
    payment = "payment",
    transactionItem = "transactionItem",
    transactionItemTransaction = "transactionItemTransaction",
    transaction = "transaction",
    walletReSyncQueue = "walletReSyncQueue",
    event = "event",
}

enum General {
    backendInstanceId = "backendinstanceid",
}

enum Messages {
    RESET_NEEDED = "RESET_NEEDED"
}

enum transactionItemFields {
    _id = "_id",
    createdAt = "createdAt"
}

enum transactionItemTransactionFields {
    _id = "_id",
    createdAt = "createdAt"
}

enum transactionFields {
    _id = "_id",
    createdAt = "createdAt"
}



enum transactionItemTransaction {
    _id = "_id",
}

enum paymentFields {
    _id = "_id",
    createdAt = "createdAt"
}

enum syncTradeTypeEnum {
    PaymentToInfluencer = "PaymentToInfluencer",
    PaymentToAdme = "PaymentToAdme",
    PaymentToReferent = "PaymentToReferent",
    PaymentFromReferred = "PaymentFromReferred",
    DistributeToReferents = "DistributeToReferents",
    CampaignPayed = "CampaignPayed",
    TaxCollected = "TaxCollected",
    TaxPayment = "TaxPayment",
    WithdrawByShopping = "WithdrawByShopping"

}

enum syncFields {
    syncDirection = "syncDirection",
    syncFowardStatus = "syncFowardStatus",
    syncForwardStatusDt = "syncForwardStatusDt",
    syncParentDomain = "syncParentDomain",
    syncParentModel = "syncParentModel",
    syncParentEntityId = "syncParentEntityId",
    originCampaignId = "originCampaignId",
    originAdvertisementId = "originAdvertisementId",
    originPostId = "originPostId",
    originInsightId = "originInsightId",
    tradeType = "tradeType",
    amount = "amount"
}

enum syncFowardStatusEnum {
    Pending = "Pending",
    InProgress = "InProgress",
    Failed = "Failed",
    Done = "Done",
    NotNeeded = "NotNeeded"
}

enum moneyDistributionStatusEnum {
    WaitingForApproval = "WaitingForApproval",
    Approved = "Approved",
    Done = "Done",
    Failed = "Failed"
}

enum syncDirectionEnum {
    Up = "Up",
    Injection = "Injection",
    Ejection = "Ejection"
}

enum cronJobs {
    SocialMedia_ReadInsights = "SocialMedia_ReadInsights",
    SocialMedia_ReadRelationships = "SocialMedia_ReadRelationships",
    Money_Ejection_From_Core_Advertisement_DistributeMoney = "Money_Ejection_From_Core_Advertisement_DistributeMoney",
    Money_Ejection_From_Core_Insight_DistributeMoney = "Money_Ejection_From_Core_Insight_DistributeMoney",
    Money_Ejection_From_Core_Payment_PayToInfluencer = "Money_Ejection_From_Core_Payment_PayToInfluencer",
    Money_Ejection_From_Core_Payment_PayToAdme = "Money_Ejection_From_Core_Payment_PayToAdme",
    Money_Ejection_From_Core_Payment_PayToReferent = "Money_Ejection_From_Core_Payment_PayToReferent",
    Money_Ejection_From_Money_TransactionItem_PayTaxes = "Money_Ejection_From_Money_TransactionItem_PayTaxes",
    Money_Injection_From_Core_Payment_CampaignPayed = "Money_Injection_From_Core_Payment_CampaignPayed",
    Money_Injection_From_Money_TransactionItem_CampaignPayed = "Money_Injection_From_Money_TransactionItem_CampaignPayed",
    Money_Injection_From_Money_TransactionItemTransaction_CampaignPayed = "Money_Injection_From_Money_TransactionItemTransaction_CampaignPayed",
    Money_Injection_From_Money_TransactionItemTransaction_PayTaxes = "Money_Injection_From_Money_TransactionItemTransaction_PayTaxes",
    Money_Injection_From_Money_TransactionItemTransaction_WithdrawByShopping = "Money_Injection_From_Money_TransactionItemTransaction_WithdrawByShopping",
    Money_Up_From_Core_Payment_DistributeToReferents = "Money_Up_From_Core_Payment_DistributeToReferents"
}

enum eventFields {
    _id = "_id",
    event = "event",
    source = "source",
    timestamp = "timestamp",
    userAgent = "userAgent",
    language = "language",
    ip = "ip",
    geoCountry = "geoCountry",
    geoCity = "geoCity",
    companyId = "companyId",
    companyName = "companyName",
    companyCode = "companyCode",
    campaignId = "campaignId",
    campaignName = "campaignName",
    campaignIsVirtual = "campaignIsVirtual",
    personId = "personId",
    personName = "personName",
    personGenre = "personGenre",
    personBirthday = "personBirthday",
    personEmail = "personEmail",
    personRegionId = "personRegionId",
    personRegionCountryName = "personRegionCountryName",
    personRegionStateName = "personRegionStateName",
    personRegionCityName = "personRegionCityName",
    store = "store",
    subsection = "subsection",
    extra = "extra",
    hydrated = "hydrated",
}

enum storeEnum {
    iOS = "iOS",
    Android = "Android",
}

enum messagingPayloadBaseFields {
    _id = "_id",
    eventUuid = 'eventUuid'
}

enum appTypes {
    Web = "Web",
    Mobile = "Mobile",
    Feed = "Feed",
    Others = "Others",
    PublicPortal = "PublicPortal"
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
    termsAndConditions = "termsAndConditions",
    appTypes = "appTypes",
    ip = "ip",
    location = "location",
    latitude = "latitude",
    longitude = "longitude",
    version = "version",
    language = "language"
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
    captionIdentifier = 'captionIdentifier',
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
    moneySpent = "moneySpent",
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
    facebookStatusDt = "facebookStatusDt",
    instagramStatus = "instagramStatus",
    instagramStatusDt = "instagramStatusDt",
    twitterStatus = "twitterStatus",
    twitterStatusDt = "twitterStatusDt",
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
    resources = "resources",
    moneyDistributionStatus = "moneyDistributionStatus",
    paymentType = "paymentType",
    productPaymentDescription = "productPaymentDescription",
    currency = "currency",
    moneyPercentageDistributionForAuthor = "moneyPercentageDistributionForAuthor",
    moneyForAuthor = "moneyForAuthor",
    moneyForAdme = "moneyForAdme",
    moneyForReferrer = "moneyForReferrer",
    priceFactor = "priceFactor",
    moneySpentResources = "moneySpentResources",
}

enum walletReSyncQueueFields {
    _id = "_id",
    personId = "personId",
    currency = "currency",
    status = "status",
    startSyncingDt = "startSyncingDt",
    lastUpdateDt = "lastUpdateDt"
}

enum walletReSyncQueueStatusEnum {
    Pending = "Pending",
    InProgress = "InProgress",
    Done = "Done",
    Failed = "Failed"
}

enum advertisementStatusEnum {
    NotSponsored = "NotSponsored",
    WaitingForPlatformAudit = "WaitingForPlatformAudit",
    WaitingForCustomerAudit = "WaitingForCustomerAudit",
    RejectedByPlatform = "RejectedByPlatform",
    RejectedByCustomer = "RejectedByCustomer",
    Approved = "Approved"
}

enum advertisementRejectionReasonsEnum {
    MultimediaContentNoApply = "MultimediaContentNoApply",
    MissingResources = "MissingResources",
    CaptionNotApply = "CaptionNotApply",
    None = "None"
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
    paymentType = "paymentType",
    insightScanEnabled = "insightScanEnabled"
}

enum socialMediaStatusEnum {
    None = "None", 
    PostRequired = "PostRequired",
    Posting = "Posting",
    FailedOnGettingURL =  "FailedOnGettingURL",
    FailedOnGettingURLSearching = "FailedOnGettingURLSearching",
    SearchingOnGettingURLFailed = "SearchingOnGettingURLFailed",
    Posted = "Posted", 
    Failed = "Failed", 
    Removed = "Removed", 

}

enum knownErrorsEnum {
    None = "None", 
    FailedOnGettingURL = "FailedOnGettingURL"
}

enum feedStatusEnum {
    Idle = "Idle",
    Fetching = "Fetching",
    Failed = "Failed",
    NotFound = "NotFound"
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
    moneyDistributionStatus = "moneyDistributionStatus",
    creationDt = "creationDt",
    paymentType = "paymentType"
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
    creationDt = "creationDt",
    enabled = "enabled"
}

enum person_credential_statusEnum {
    NOT_LINKED = "NOT_LINKED",
    LINKING = "LINKING",
    LINKED = "LINKED",
    FAILED = "FAILED",
    EXPIRED = "EXPIRED",
    MANUAL_ACTION_REQUIRED = "MANUAL_ACTION_REQUIRED",
    TERMS_SIGNATURE_REQUIRED = "TERMS_SIGNATURE_REQUIRED",
    CHALLENGED = "CHALLENGED"
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
    code = "code",
    name = "name",
    logo = "logo",
    thumbnail = "thumbnail",
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
    customerStars = "customerStars",
    cellPhone = "cellPhone",
    socialMedia = "socialMedia",
    webSite = "webSite",
    instagram = "instagram",
    facebook = "facebook",
    twitter = "twitter"
    
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
    productPaymentDescription = "productPaymentDescription",
    specificTarget = "specificTarget",
    categoryCriterias = "categoryCriterias",
    creationDt = "creationDt",
    startDt = 'startDt',
    endDt = 'endDt',
    customAdPrice = 'customAdPrice',
    virtual = 'virtual',
    whatsappNumber = 'whatsappNumber',
    moneyForAuthor = 'moneyForAuthor',
}




enum campaignFields {
    _id = "_id",
    currency = "currency",
    moneyPercentageDistributionForAuthor = "moneyPercentageDistributionForAuthor",
    companyId = "companyId",
    companyName = "companyName",
    companyLogo = "companyLogo",
    companyPlatformStars = "companyPlatformStars",
    companyCustomerStars = "companyCustomerStars",
    name = "name",
    slogan = "slogan",
    brief = "brief",
    customPricesEnabled = "customPricesEnabled",
    customAdPrice = "customAdPrice",
    customBannerPrice = "customBannerPrice",
    customHashtagPrice = "customHashtagPrice",
    customWebSitePrice = "customWebSitePrice",
    customTagMentionMePrice = "customTagMentionMePrice",
    customSealPrice = "customSealPrice",
    customTagMentionPeoplePrice = "customTagMentionPeoplePrice",
    customProductUsagePrice = "customProductUsagePrice",
    customInsightMultiplier = "customInsightMultiplier",
    specificTarget = "specificTarget",
    influencePeopleAs = "influencePeopleAs",
    influencerPerEachOfThem = "influencerPerEachOfThem",
    followers = "followers",
    type = "type",
    paymentType = "paymentType",
    paymentStatus = "paymentStatus",
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
    twitterInfluencersCardinal = "twitterInfluencersCardinal",
    stock = 'stock',
    virtual = 'virtual',
    whatsappNumber = 'whatsappNumber',
    moneyForAuthor = 'moneyForAuthor',
}

enum campaignPaymentStatusEnum {
    Done = "Done",
    Pending = "Pending",
    Failed = "Failed"
}

enum currencyEnum {
    // World Currencies
    USD = 'USD',    // United States Dollar
    EUR = 'EUR',    // Euro
    JPY = 'JPY',    // Japanese Yen
    GBP = 'GBP',    // British Pound Sterling
    AUD = 'AUD',    // Australian Dollar
    CAD = 'CAD',    // Canadian Dollar
    CHF = 'CHF',    // Swiss Franc
    CNY = 'CNY',    // Chinese Yuan
    SEK = 'SEK',    // Swedish Krona
    NZD = 'NZD',    // New Zealand Dollar
    MXN = 'MXN',    // Mexican Peso
    ARS = 'ARS',    // Argentine Peso
    BRL = 'BRL',    // Brazilian Real
    RUB = 'RUB',    // Russian Ruble
    INR = 'INR',    // Indian Rupee
    ZAR = 'ZAR',    // South African Rand
    KRW = 'KRW',    // South Korean Won
    SGD = 'SGD',    // Singapore Dollar
    HKD = 'HKD',    // Hong Kong Dollar
    TRY = 'TRY',    // Turkish Lira

    // Cryptocurrencies
    BTC = 'BTC',    // Bitcoin
    ETH = 'ETH',    // Ethereum
    BNB = 'BNB',    // Binance Coin
    XRP = 'XRP',    // Ripple
    ADA = 'ADA',    // Cardano
    DOGE = 'DOGE',  // Dogecoin
    SOL = 'SOL',    // Solana
    DOT = 'DOT',    // Polkadot
    MATIC = 'MATIC', // Polygon

    // Stablecoins
    USDT = 'USDT',  // Tether (USD-pegged stablecoin)
    USDC = 'USDC',  // USD Coin (USD-pegged stablecoin)
    BUSD = 'BUSD',  // Binance USD (USD-pegged stablecoin)
    DAI = 'DAI',    // Dai (USD-pegged decentralized stablecoin)

    // Adme Coin
    ADME = 'ADME'   // Adme Coin
}

enum CurrencyDecimalPrecision {
    // Monedas fuertes con 3 o 4 decimales
    USD = 3,
    EUR = 3,
    JPY = 2,
    GBP = 3,
    AUD = 2,
    CAD = 2,
    CHF = 3,
    CNY = 2,
    SEK = 2,
    NZD = 2,

    // Monedas más débiles con 2 decimales
    MXN = 1,
    ARS = 1,
    BRL = 1,
    RUB = 1,
    INR = 1,
    ZAR = 1,
    KRW = 1,
    SGD = 2,
    HKD = 2,
    TRY = 1,

    // Criptomonedas con alta precisión (8 decimales)
    BTC = 8,
    ETH = 8,
    BNB = 8,
    XRP = 8,
    ADA = 8,
    DOGE = 8,
    SOL = 8,
    DOT = 8,
    MATIC = 8,

    // Stablecoins (ajustadas a 6 decimales)
    USDT = 6,
    USDC = 6,
    BUSD = 6,
    DAI = 6,

    // Adme Coin (8 decimales para alta precisión en la aplicación)
    ADME = 8,
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
    ageReference = "ageReference",
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
    potentialReferrals = "potentialReferrals",
    socialMediaAccountsReadyToUse = "socialMediaAccountsReadyToUse",
    mercadoPagoAccount = "mercadoPagoAccount",
    termsAndConditions = "termsAndConditions",
    appTypes = "appTypes",
    ip = "ip",
    location = "location",
    latitude = "latitude",
    longitude = "longitude",
    version = "version",
    language = "language",
    wallet = "wallet",
    instagramInsightsScannElegible = "instagramInsightsScannElegible",
    instagramInsightsScannStatus = "instagramInsightsScannStatus",
    instagramInsightsScannUpdatedDt = "instagramInsightsScannUpdatedDt",
    instagramInsightsScannDocId = "instagramInsightsScannDocId",
}

enum instagramInsightsScannStatusEnum {
    Idle = "Idle",
    Fetching = "Fetching",
    Failed = "Failed"
}

enum walletFields {
    _id = "_id",
    referralsGross = "referralsGross",
    referralsNet = "referralsNet",
    referrerGross = "referrerGross",
    ownContentNet = "ownContentNet",
    bufferedMoney = "bufferedMoney",
    netProfit = "netProfit"
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
    Others = "Others",
    PublicPortal = "PublicPortal"
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
    English = "en",
    Spanish = "es"
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
    CANCELED = "CANCELED",
    NONE = "NONE",
    EMAIL_SAME_CODE_NEEDED = "EMAIL_SAME_CODE_NEEDED",
    EMAIL_SAME_CODE_NEEDED_PROVIDED = "EMAIL_SAME_CODE_NEEDED_PROVIDED",
    EMAIL_NEW_CODE_NEEDED = "EMAIL_NEW_CODE_NEEDED",
    EMAIL_NEW_CODE_NEEDED_PROVIDED = "EMAIL_NEW_CODE_NEEDED_PROVIDED",
    SMS_NEW_CODE_NEEDED = "SMS_NEW_CODE_NEEDED",
    SMS_NEW_CODE_NEEDED_PROVIDED = "SMS_NEW_CODE_NEEDED_PROVIDED",
    SMS_SAME_CODE_NEEDED = "SMS_SAME_CODE_NEEDED",
    SMS_SAME_CODE_NEEDED_PROVIDED = "SMS_SAME_CODE_NEEDED_PROVIDED",
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    INVALID_CREDENTIALS_PROVIDED = "INVALID_CREDENTIALS_PROVIDED",
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
    lastUpdateDt = "lastUpdateDt",
    language = "language"
}

enum termsAndConditionsHistoricFields{
    _id = "_id",
    appTypes = "appTypes",
    version = "version",
    language = "language",
    url = "url",
    creationDt = "creationDt"
}

enum termsAndConditionsStatusEnum{
    DEVELOPING = "DEVELOPING",
    INREVIEW = "INREVIEW",
    PENDINGAPPROVAL = "PENDINGAPPROVAL",
    APPROVED = "APPROVED",
    DISMISSED = "DISMISSED",
    EXPIRED = "EXPIRED",
    NONE = "NONE"    
}

export {
    DomainsEnum,
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
    feedStatusEnum,
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
    person_credential_statusEnum,
    person_credential_statusEnumDescription,
    platformEnum,
    people_relationshipEnum,
    influencerCategoryEnum,
    referralFields,
    nationalityEnum,
    religionEnum,
    advertisementStatusEnum,
    advertisementRejectionReasonsEnum,
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
    termsAndConditionsHistoricFields,
    termsAndConditionsStatusEnum,
    messagingPayloadBaseFields,
    syncFields,
    syncFowardStatusEnum,
    syncDirectionEnum,
    cronJobs,
    paymentFields,
    syncTradeTypeEnum,
    transactionItemFields,
    transactionItemTransaction,
    moneyDistributionStatusEnum,
    campaignPaymentStatusEnum,
    transactionItemTransactionFields,
    transactionFields,
    knownErrorsEnum,
    General,
    Messages,
    currencyEnum,
    walletFields,
    CurrencyDecimalPrecision,
    walletReSyncQueueFields,
    walletReSyncQueueStatusEnum,
    instagramInsightsScannStatusEnum,
    eventFields,
    storeEnum
};
