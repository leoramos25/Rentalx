import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificatonUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;
    const createCarSpecificationsUseCase = container.resolve(
      CreateCarSpecificatonUseCase
    );

    const cars = await createCarSpecificationsUseCase.execute({
      car_id: id,
      specifications_id,
    });

    return response.json(cars);
  }
}

export { CreateCarSpecificationController };
