import { RobotRepository } from "../../infraestructure/robot.repository.js";
import { GetRobotResult } from "./get-robot.result.js";

export class GetRobotHandler {
    constructor() {
      this.robotRepository = new RobotRepository();
    }
  
    async handle(query) {

      const robot = await this.robotRepository.findById(query.id);
  
      return new GetRobotResult({ ...robot.toProperties() });
    }
  }