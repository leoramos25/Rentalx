import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        carsRepository = new CarsRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(carsRepository);
    });

    it("should be able to create a new car", async () => {
        const car = await createCarUseCase.execute({
            name: "Name car",
            description: "descrition car",
            daily_rate: 120,
            license_plate: "DEF-3232",
            fine_amount: 60,
            brand: "volkswagen",
            category_id: "123",
        });

        expect(car).toHaveProperty("id");
    });

    it("should not be able to create a car with license_plate exists", async () => {
        await createCarUseCase.execute({
            name: "Car 1",
            description: "descrition car",
            daily_rate: 120,
            license_plate: "DEF-3232",
            fine_amount: 60,
            brand: "volkswagen",
            category_id: "123",
        });

        await expect(
            createCarUseCase.execute({
                name: "Car 2",
                description: "descrition car",
                daily_rate: 120,
                license_plate: "DEF-3232",
                fine_amount: 60,
                brand: "volkswagen",
                category_id: "123",
            })
        ).rejects.toEqual(new AppError("Car already exists"));
    });

    it("should be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car available",
            description: "descrition car",
            daily_rate: 120,
            license_plate: "ABC-3232",
            fine_amount: 60,
            brand: "volkswagen",
            category_id: "123",
        });

        expect(car.available).toBe(true);
    });
});
