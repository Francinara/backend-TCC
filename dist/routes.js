"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const ListUserController_1 = require("./controllers/user/ListUserController");
const UpdateUserService_1 = require("./controllers/user/UpdateUserService");
const CreateRegistrationRequestController_1 = require("./controllers/registration-request/CreateRegistrationRequestController");
const ListRegistrationRequestController_1 = require("./controllers/registration-request/ListRegistrationRequestController");
const ListRegistrationRequestByStatusController_1 = require("./controllers/registration-request/ListRegistrationRequestByStatusController");
const UpdateRegistrationRequestController_1 = require("./controllers/registration-request/UpdateRegistrationRequestController");
const ListRegistrationRequestByDateService_1 = require("./controllers/registration-request/ListRegistrationRequestByDateService");
const CreateBeneficiarioController_1 = require("./controllers/beneficiario/CreateBeneficiarioController");
const ListBeneficiarioController_1 = require("./controllers/beneficiario/ListBeneficiarioController");
const CreatePropertyController_1 = require("./controllers/property/CreatePropertyController");
const ListPropertyController_1 = require("./controllers/property/ListPropertyController");
const ListPropertyByIDController_1 = require("./controllers/property/ListPropertyByIDController");
const ListPropertyByAreaController_1 = require("./controllers/property/ListPropertyByAreaController");
const ListPropertyByDistrictController_1 = require("./controllers/property/ListPropertyByDistrictController");
const ListCommunityController_1 = require("./controllers/community/ListCommunityController");
const ListCommunityByIDController_1 = require("./controllers/community/ListCommunityByIDController");
const ListDistrictController_1 = require("./controllers/district/ListDistrictController");
const ListDistrictByIDController_1 = require("./controllers/district/ListDistrictByIDController");
const ListWaterResourcesByPropertyController_1 = require("./controllers/water-resource/ListWaterResourcesByPropertyController");
const ListWaterResourcesWithPropertyController_1 = require("./controllers/water-resource/ListWaterResourcesWithPropertyController");
const CreateWaterResourceController_1 = require("./controllers/water-resource/CreateWaterResourceController");
const ListPropertyWithSelectedActivitiesController_1 = require("./controllers/productive-activity/ListPropertyWithSelectedActivitiesController");
const ListProductiveActivityByPropertyController_1 = require("./controllers/productive-activity/ListProductiveActivityByPropertyController");
const ListPropertiesWithMultipleActivitiesByActivityController_1 = require("./controllers/productive-activity/ListPropertiesWithMultipleActivitiesByActivityController");
const CreateAgricultureController_1 = require("./controllers/productive-activity/CreateAgricultureController");
const CreateBeekeepingController_1 = require("./controllers/productive-activity/CreateBeekeepingController");
const CreateAquacultureController_1 = require("./controllers/productive-activity/CreateAquacultureController");
const CreateCraftsmanshipController_1 = require("./controllers/productive-activity/CreateCraftsmanshipController");
const CreateLivestockController_1 = require("./controllers/productive-activity/CreateLivestockController");
const CreateOtherActivityController_1 = require("./controllers/productive-activity/CreateOtherActivityController");
const ListRoadController_1 = require("./controllers/road/ListRoadController");
const ListWaterController_1 = require("./controllers/water/ListWaterController");
const ListSubBasinController_1 = require("./controllers/sub-basin/ListSubBasinController");
const ListSpringController_1 = require("./controllers/spring/ListSpringController");
const ListRoadController_2 = require("./controllers/limit/ListRoadController");
const ListCisternController_1 = require("./controllers/cistern/ListCisternController");
const ListDrainageController_1 = require("./controllers/drainage/ListDrainageController");
const ListUrbanizedAreaController_1 = require("./controllers/urbanized-area/ListUrbanizedAreaController");
const ListProtectionLayerController_1 = require("./controllers/protection-layer/ListProtectionLayerController");
const ListRecentVisitByPropertyController_1 = require("./controllers/visit/ListRecentVisitByPropertyController");
const CreateVisitController_1 = require("./controllers/visit/CreateVisitController");
const ListVisitsController_1 = require("./controllers/visit/ListVisitsController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const ListProductiveActivityByActivityController_1 = require("./controllers/productive-activity/ListProductiveActivityByActivityController");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().handle);
router.get("/me", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.get("/users", isAuthenticated_1.isAuthenticated, new ListUserController_1.ListUserController().handle);
router.put("/users/active/update", isAuthenticated_1.isAuthenticated, new UpdateUserService_1.UpdateUserController().handle);
router.post("/registration-requests", new CreateRegistrationRequestController_1.CreateRegistrationRequestController().handle);
router.get("/registration-requests", isAuthenticated_1.isAuthenticated, new ListRegistrationRequestController_1.ListRegistrationRequestController().handle);
router.get("/status/registration-requests", isAuthenticated_1.isAuthenticated, new ListRegistrationRequestByStatusController_1.ListRegistrationRequestByStatusController().handle);
router.put("/registration-requests/status/update", isAuthenticated_1.isAuthenticated, new UpdateRegistrationRequestController_1.UpdateRegistrationRequestController().handle);
router.get("/date/registration-requests", isAuthenticated_1.isAuthenticated, new ListRegistrationRequestByDateService_1.ListRegistrationRequestByDateController().handle);
//Beneficiarios
router.post("/beneficiary", isAuthenticated_1.isAuthenticated, new CreateBeneficiarioController_1.CreateBeneficiarioController().handle);
router.get("/beneficiaries", isAuthenticated_1.isAuthenticated, new ListBeneficiarioController_1.ListBeneficiarioController().handle);
//Property
router.post("/properties", isAuthenticated_1.isAuthenticated, new CreatePropertyController_1.CreatePropertyController().handle);
router.get("/properties", isAuthenticated_1.isAuthenticated, new ListPropertyController_1.ListPropertyController().handle);
router.get("/property/:id", isAuthenticated_1.isAuthenticated, new ListPropertyByIDController_1.ListPropertyByIDController().handle);
router.get("/properties/area", isAuthenticated_1.isAuthenticated, new ListPropertyByAreaController_1.ListPropertyByAreaController().handle);
router.get("/properties/district", isAuthenticated_1.isAuthenticated, new ListPropertyByDistrictController_1.ListPropertyByDistrictController().handle);
//Community
router.get("/communities", isAuthenticated_1.isAuthenticated, new ListCommunityController_1.ListCommunityController().handle);
router.get("/community/:id", isAuthenticated_1.isAuthenticated, new ListCommunityByIDController_1.ListCommunityByIDController().handle);
//District
router.get("/districts", isAuthenticated_1.isAuthenticated, new ListDistrictController_1.ListDistrictController().handle);
router.get("/district/:id", isAuthenticated_1.isAuthenticated, new ListDistrictByIDController_1.ListDistrictByIDController().handle);
//Water Resource
router.get("/water-resources/property/:property_id", isAuthenticated_1.isAuthenticated, new ListWaterResourcesByPropertyController_1.ListWaterResourcesByPropertyController().handle);
router.get("/water-resources/properties", isAuthenticated_1.isAuthenticated, new ListWaterResourcesWithPropertyController_1.ListWaterResourcesWithPropertyController().handle);
router.post("/water-resources", isAuthenticated_1.isAuthenticated, new CreateWaterResourceController_1.CreateWaterResourceController().handle);
// Productive Activity
router.get("/productive-activity/property/:property_id", isAuthenticated_1.isAuthenticated, new ListProductiveActivityByPropertyController_1.ListProductiveActivityByPropertyController().handle);
router.get("/productive-activity/activity", isAuthenticated_1.isAuthenticated, new ListProductiveActivityByActivityController_1.ListProductiveActivityByActivityController().handle);
router.get("/productive-activities/properties/activity/multiple", isAuthenticated_1.isAuthenticated, new ListPropertiesWithMultipleActivitiesByActivityController_1.ListPropertiesWithMultipleActivitiesByActivityController().handle);
router.get("/productive-activities/properties/multifunctional", isAuthenticated_1.isAuthenticated, new ListPropertyWithSelectedActivitiesController_1.ListPropertyWithSelectedActivitiesController().handle);
router.post("/agricultures", isAuthenticated_1.isAuthenticated, new CreateAgricultureController_1.CreateAgricultureController().handle);
router.post("/beekeeping", isAuthenticated_1.isAuthenticated, new CreateBeekeepingController_1.CreateBeekeepingController().handle);
router.post("/aquaculture", isAuthenticated_1.isAuthenticated, new CreateAquacultureController_1.CreateAquacultureController().handle);
router.post("/craftsmanship", isAuthenticated_1.isAuthenticated, new CreateCraftsmanshipController_1.CreateCraftsmanshipController().handle);
router.post("/livestock", isAuthenticated_1.isAuthenticated, new CreateLivestockController_1.CreateLivestockController().handle);
router.post("/other-activities", isAuthenticated_1.isAuthenticated, new CreateOtherActivityController_1.CreateOtherActivityController().handle);
//roads
router.get("/roads", isAuthenticated_1.isAuthenticated, new ListRoadController_1.ListRoadController().handle);
//water
router.get("/waters", isAuthenticated_1.isAuthenticated, new ListWaterController_1.ListWaterController().handle);
//sub-basin
router.get("/sub-basins", isAuthenticated_1.isAuthenticated, new ListSubBasinController_1.listSubBasinController().handle);
//springs
router.get("/springs", isAuthenticated_1.isAuthenticated, new ListSpringController_1.ListSpringController().handle);
//city limit
router.get("/city-limit", isAuthenticated_1.isAuthenticated, new ListRoadController_2.ListLimitController().handle);
//cisterns
router.get("/cisterns", isAuthenticated_1.isAuthenticated, new ListCisternController_1.ListCisternController().handle);
//drainage
router.get("/drainages", isAuthenticated_1.isAuthenticated, new ListDrainageController_1.ListDrainageController().handle);
//urbanized areas
router.get("/urbanized-areas", isAuthenticated_1.isAuthenticated, new ListUrbanizedAreaController_1.ListUrbanizedAreaController().handle);
//protection layer
router.get("/protection-layer", isAuthenticated_1.isAuthenticated, new ListProtectionLayerController_1.ListProtectionLayerController().handle);
//visit
router.post("/visit", isAuthenticated_1.isAuthenticated, new CreateVisitController_1.CreateVisitController().handle);
router.get("/visits", isAuthenticated_1.isAuthenticated, new ListVisitsController_1.ListVisitsController().handle);
router.get("/properties/:property_id/visits/most-recent", isAuthenticated_1.isAuthenticated, new ListRecentVisitByPropertyController_1.ListRecentVisitByPropertyController().handle);
