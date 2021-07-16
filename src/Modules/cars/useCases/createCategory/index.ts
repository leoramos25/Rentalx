import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CrateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = CategoriesRepository.getInstace();

const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController };
