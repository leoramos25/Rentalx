import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = null;
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationsRepository
);
const createSpeficicationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpeficicationController };
