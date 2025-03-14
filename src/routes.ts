import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserService";

import { CreateRegistrationRequestController } from "./controllers/registration-request/CreateRegistrationRequestController";
import { ListRegistrationRequestController } from "./controllers/registration-request/ListRegistrationRequestController";
import { ListRegistrationRequestByStatusController } from "./controllers/registration-request/ListRegistrationRequestByStatusController";
import { UpdateRegistrationRequestController } from "./controllers/registration-request/UpdateRegistrationRequestController";
import { ListRegistrationRequestByDateController } from "./controllers/registration-request/ListRegistrationRequestByDateService";

import { CreateBeneficiarioController } from "./controllers/beneficiario/CreateBeneficiarioController";
import { ListBeneficiarioController } from "./controllers/beneficiario/ListBeneficiarioController";

import { CreatePropertyController } from "./controllers/property/CreatePropertyController";
import { ListPropertyController } from "./controllers/property/ListPropertyController";
import { ListPropertyByIDController } from "./controllers/property/ListPropertyByIDController";
import { ListPropertyByAreaController } from "./controllers/property/ListPropertyByAreaController";
import { ListPropertyByDistrictController } from "./controllers/property/ListPropertyByDistrictController";

import { ListCommunityController } from "./controllers/community/ListCommunityController";
import { ListCommunityByIDController } from "./controllers/community/ListCommunityByIDController";

import { ListDistrictController } from "./controllers/district/ListDistrictController";
import { ListDistrictByIDController } from "./controllers/district/ListDistrictByIDController";

import { ListWaterResourcesByPropertyController } from "./controllers/water-resource/ListWaterResourcesByPropertyController";
import { ListWaterResourcesWithPropertyController } from "./controllers/water-resource/ListWaterResourcesWithPropertyController";
import { CreateWaterResourceController } from "./controllers/water-resource/CreateWaterResourceController";

import { ListPropertyWithSelectedActivitiesController } from "./controllers/productive-activity/ListPropertyWithSelectedActivitiesController";
import { ListProductiveActivityByPropertyController } from "./controllers/productive-activity/ListProductiveActivityByPropertyController";
import { ListPropertiesWithMultipleActivitiesByActivityController } from "./controllers/productive-activity/ListPropertiesWithMultipleActivitiesByActivityController";
import { CreateAgricultureController } from "./controllers/productive-activity/CreateAgricultureController";
import { CreateBeekeepingController } from "./controllers/productive-activity/CreateBeekeepingController";
import { CreateAquacultureController } from "./controllers/productive-activity/CreateAquacultureController";
import { CreateCraftsmanshipController } from "./controllers/productive-activity/CreateCraftsmanshipController";
import { CreateLivestockController } from "./controllers/productive-activity/CreateLivestockController";
import { CreateOtherActivityController } from "./controllers/productive-activity/CreateOtherActivityController";

import { ListRoadController } from "./controllers/road/ListRoadController";

import { ListWaterController } from "./controllers/water/ListWaterController";

import { listSubBasinController } from "./controllers/sub-basin/ListSubBasinController";

import { ListSpringController } from "./controllers/spring/ListSpringController";

import { ListLimitController } from "./controllers/limit/ListRoadController";

import { ListCisternController } from "./controllers/cistern/ListCisternController";

import { ListDrainageController } from "./controllers/drainage/ListDrainageController";

import { ListUrbanizedAreaController } from "./controllers/urbanized-area/ListUrbanizedAreaController";

import { ListProtectionLayerController } from "./controllers/protection-layer/ListProtectionLayerController";

import { ListRecentVisitByPropertyController } from "./controllers/visit/ListRecentVisitByPropertyController";
import { CreateVisitController } from "./controllers/visit/CreateVisitController";
import { ListVisitsController } from "./controllers/visit/ListVisitsController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { ListProductiveActivityByActivityController } from "./controllers/productive-activity/ListProductiveActivityByActivityController";

const router = Router();

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

router.get("/users", isAuthenticated, new ListUserController().handle);

router.put(
  "/users/active/update",
  isAuthenticated,
  new UpdateUserController().handle
);

router.post(
  "/registration-requests",
  new CreateRegistrationRequestController().handle
);

router.get(
  "/registration-requests",
  isAuthenticated,
  new ListRegistrationRequestController().handle
);

router.get(
  "/status/registration-requests",
  isAuthenticated,
  new ListRegistrationRequestByStatusController().handle
);

router.put(
  "/registration-requests/status/update",
  isAuthenticated,
  new UpdateRegistrationRequestController().handle
);
router.get(
  "/date/registration-requests",
  isAuthenticated,
  new ListRegistrationRequestByDateController().handle
);

//Beneficiarios
router.post(
  "/beneficiary",
  isAuthenticated,
  new CreateBeneficiarioController().handle
);

router.get(
  "/beneficiaries",
  isAuthenticated,
  new ListBeneficiarioController().handle
);

//Property

router.post(
  "/properties",
  isAuthenticated,
  new CreatePropertyController().handle
);

router.get("/properties", isAuthenticated, new ListPropertyController().handle);

router.get(
  "/property/:id",
  isAuthenticated,
  new ListPropertyByIDController().handle
);

router.get(
  "/properties/area",
  isAuthenticated,
  new ListPropertyByAreaController().handle
);

router.get(
  "/properties/district",
  isAuthenticated,
  new ListPropertyByDistrictController().handle
);

//Community

router.get(
  "/communities",
  isAuthenticated,
  new ListCommunityController().handle
);

router.get(
  "/community/:id",
  isAuthenticated,
  new ListCommunityByIDController().handle
);

//District
router.get("/districts", isAuthenticated, new ListDistrictController().handle);

router.get(
  "/district/:id",
  isAuthenticated,
  new ListDistrictByIDController().handle
);

//Water Resource

router.get(
  "/water-resources/property/:property_id",
  isAuthenticated,
  new ListWaterResourcesByPropertyController().handle
);

router.get(
  "/water-resources/properties",
  isAuthenticated,
  new ListWaterResourcesWithPropertyController().handle
);

router.post(
  "/water-resources",
  isAuthenticated,
  new CreateWaterResourceController().handle
);

// Productive Activity

router.get(
  "/productive-activity/property/:property_id",
  isAuthenticated,
  new ListProductiveActivityByPropertyController().handle
);

router.get(
  "/productive-activity/activity",
  isAuthenticated,
  new ListProductiveActivityByActivityController().handle
);

router.get(
  "/productive-activities/properties/activity/multiple",
  isAuthenticated,
  new ListPropertiesWithMultipleActivitiesByActivityController().handle
);

router.get(
  "/productive-activities/properties/multifunctional",
  isAuthenticated,
  new ListPropertyWithSelectedActivitiesController().handle
);

router.post(
  "/agricultures",
  isAuthenticated,
  new CreateAgricultureController().handle
);
router.post(
  "/beekeeping",
  isAuthenticated,
  new CreateBeekeepingController().handle
);
router.post(
  "/aquaculture",
  isAuthenticated,
  new CreateAquacultureController().handle
);
router.post(
  "/craftsmanship",
  isAuthenticated,
  new CreateCraftsmanshipController().handle
);
router.post(
  "/livestock",
  isAuthenticated,
  new CreateLivestockController().handle
);
router.post(
  "/other-activities",
  isAuthenticated,
  new CreateOtherActivityController().handle
);

//roads
router.get("/roads", isAuthenticated, new ListRoadController().handle);

//water
router.get("/waters", isAuthenticated, new ListWaterController().handle);

//sub-basin
router.get("/sub-basins", isAuthenticated, new listSubBasinController().handle);

//springs
router.get("/springs", isAuthenticated, new ListSpringController().handle);

//city limit
router.get("/city-limit", isAuthenticated, new ListLimitController().handle);

//cisterns
router.get("/cisterns", isAuthenticated, new ListCisternController().handle);

//drainage

router.get("/drainages", isAuthenticated, new ListDrainageController().handle);

//urbanized areas
router.get(
  "/urbanized-areas",
  isAuthenticated,
  new ListUrbanizedAreaController().handle
);

//protection layer

router.get(
  "/protection-layer",
  isAuthenticated,
  new ListProtectionLayerController().handle
);

//visit

router.post("/visit", isAuthenticated, new CreateVisitController().handle);

router.get("/visits", isAuthenticated, new ListVisitsController().handle);
router.get(
  "/properties/:property_id/visits/most-recent",
  isAuthenticated,
  new ListRecentVisitByPropertyController().handle
);

export { router };
