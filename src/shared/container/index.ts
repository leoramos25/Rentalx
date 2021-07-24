import { container } from "tsyringe";

import { ICategoriesRepository } from "../../Modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../Modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../Modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../Modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);
