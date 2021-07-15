import { Router } from "express";

import { CategoriesRepository } from "../Modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../Modules/cars/services/CrateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const list = categoriesRepository.list();

  return response.json(list);
});

export { categoriesRoutes };
