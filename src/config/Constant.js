export default {
    CMS: {
        CMS_LIST: '/cms/list',
        CMS_LOG_LIST: '/cms/loglist',
        ADD_CMS_PAGE: '/cms/create',
        GET_CMS_BY_ID: '/cms/pageByID',
        UPDATE_CMS_BY_ID: '/cms/update/',
        CMS_VERIFY: '/cms/verify',
        URL_VERIFY: '/cms/checkurl',
        URL_UPDATE_STATUS: '/cms/updateStatus',
    },

    PUBLIC_ROUTES : {
        LOGIN_URL : "/auth/login"
    },

    ADMIN_BASE_URL : "",

    ADMIN_API_URL: {
        LOGIN_URL: '/admin/googlelogin',
        GET_USER_INFO: '/admin/get-info',
        SEND_OTP: '/admin/sendOtp',
        SIGN_IN: '/admin/otpLogin',
        ADMIN_LIST: '/admin/list',
        CREATE_ADMIN: '/admin/create',
        CHECK_DUPLICATE: '/admin/checkduplicate',
        ADMIN_UPDATE: '/admin/update',
        ADMIN_LOGOUT: '/admin/logout',
        ADMIN_VALIDATE_BY_TOKEN: '/admin/validate-admin-by-token',
        ASSIGNED_ROLES: '/admin/role-by-admin',
        ASSIGN_ROLES: '/admin/assign-role',
        ADMIN_MODULE_INFO: '/admin/module-info',
        GET_ADMIN_FAV_MODULE: '/admin/get-module-fav',
        ADMIN_FAV_MODULE: '/admin/module-fav'
    },

    ROLE: {
        ADD_ADMIN_ROLE: '/role/create',
        LIST_ADMIN_ROLE: '/role/list',
        GET_ADMIN_ROLE: '/role/get',
        UPDATE_ADMIN_ROLE: '/role/update',
        ASSIGN_MODULE: '/role/assign-module',
        ASSIGNED_MODULE: '/role/modules-by-role',
        CHECK_DUPLICATE: 'role/checkduplicate'
    },

    MODULE: {
        LIST_MODULE_ROLE: '/module/list',
        CHECK_MODULE_DUPLICATE: '/module/checkduplicate',
        ADD_MODULE: '/module/create',
        MODULE_UPDATE: '/module/update',
        GET_MODULE_INFO: '/module/get-info',
    },

    PROMOTION: {
        PROMOTION_LIST: "/promotion/list",
        PROMOTION_CREATE: "/promotion/create",
        PROMOTION_GET: "/promotion/get",
        PROMOTION_UPDATE: "/promotion/update",
        POPULATIONTION_LIST: "/promotion/populationlist",
        POPULATIONTION_CREATE: "/promotion/addpopulation",
        POPULATIONTION_GET: "/promotion/getpopulation",
        POPULATIONTION_UPDATE: "/promotion/updatepopulation",
        PRIZESTRUCTURE_LIST:"/promotion/list-prize-structure",
        PRIZESTRUCTURE_ADD:"/promotion/create-prize-structure",
        PRIZESTRUCTURE_UPDATE:"/promotion/update-prize-structure",
        PRIZESTRUCTURE_GET:"/promotion/get-prize-structure-info",
        CHECKPROMOTION_DUPLICATE:"/promotion/checkduplicatename",
        SELECT_PRIZE_STRUCTURE:"/promotion/select-prize-structure",
        FAV_LIST:"/promotion//fav-list",
    },

    BONUS : {
        CREATE_COUPON_MASTER : "/coupon/create",
        GET_COUPON_BY_ID : "",
        MASTER_INFO: "/coupon/master-info",
        COUPON_APPROVED: "/coupon/approve",
        ADD_COUPON: "/coupon/add-coupons",
        CSV_LIST: "/coupon/list-csv"
    },

    SUCESS_MSG: {
        ADMIN_DATA_SAVE: 'Admin data save successfully...',
        ADMIN_DATA_UPDATE: 'Admin data update successfully...',
        CMS_DATA_SAVE: 'CMS data save successfully...',
        CMS_DATA_UPDATE: 'CMS data update successfully...',
        CMS_PAGE_VERIFY: 'Page verify successfully...',

        MODULE_DATA_SAVE: 'Module data save successfully...',
        MODULE_DATA_UPDATE: 'Module data update successfully...',
    },

    ERROR_MSG: {
        ADMIN_WRONG: 'Somthing wrong data not saved...',
    },

    LOCAL_STORAGE_KEYS: {
        ADMIN_BASIC_INFO: 'admin_info',
        ACCESS_TOKEN: 'accessToken'
    },

    REDIRECT_TIMER: 3000,
    TIMER_TWO_SECOND: 2000,
    MILISECOND_IN_24_HOURS: 86400000,

    ROUTES:{
        CmsAddNewPage: "/add-cms",
        CmsUpdatePage: "/cms-update/:id",
        ProjectListPage: "/cms-list",
        CmsLogPageList:'/cms-log-list',
        CMSVerifyPage:'/cms-approve/:id',
        CreateAdminForm:'/createadmin',
        UpdateAdmin:'/updateinfo/:id',
        AdminList:'/adminlist',
        AdminAddRoles:'/add-roles',
        AdminRolesList:'/list-roles',
        ListFavApi:'/list-fav-roles',
        AdminUpdateRoles:'/role-update/:id',
        CreateModule:'/add-module',
        UpdateModule:'/update-module/:id',
        ModuleList:'/module-list',
        RoleModuleMap:'/module-map/:id',
        AdminRoleMap:'/role-map/:id',
        AddPromotion:'/add-promotion',
        PromotionList:'/promotion-list',
        UpdatePromotion:'/promotion-update/:id',
        PopulationList:'/population-list',
        AddPopulation:'/add-population',
        UpdatePopulation:'/population-update/:id',
        PrizeStructureList:'/prizestructure-list',
        AddPrizeStructure:'/add-prizestructure',
        UpdatePrizeStructure:'/prizestructure-update/:id',
        CreateCouponMaster:'/add-coupon-master',
        CouponMasterList:'/coupon-master-list',     
        ShowAllCouponList:'/viewcoupon/:id',          
        NotPermission:'/NotPermission',
        CouponSearch:'/coupon-search',
    }
};