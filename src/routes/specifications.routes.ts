import { Router } from "express";

import { createSpeficicationController } from "../Modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
    return createSpeficicationController.handle(request, response);
});

export { specificationsRoutes };
