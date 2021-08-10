import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "car1",
            description: "car_description",
            daily_rate: 120.0,
            brand: "car_brand",
            category_id: "category_id",
            fine_amount: 60.0,
            license_plate: "ABC-0101",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "car2",
            description: "car_description",
            daily_rate: 140.0,
            brand: "car_brand_test",
            category_id: "category_id",
            fine_amount: 70.0,
            license_plate: "ABC-0202",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "car_brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "car3",
            description: "car_description",
            daily_rate: 150.0,
            brand: "car_brand",
            category_id: "category_id",
            fine_amount: 70.0,
            license_plate: "ABC-0303",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "car3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be to able to list all available cars by category id", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "car4",
            description: "car_description",
            daily_rate: 140.0,
            brand: "car_brand",
            category_id: "123456",
            fine_amount: 70.0,
            license_plate: "ABC-0202",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "123456",
        });

        expect(cars).toEqual([car]);
    });
});
