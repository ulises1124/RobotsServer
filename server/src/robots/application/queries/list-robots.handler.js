import { RobotRepository } from "../../infraestructure/robot.repository.js";
import { ListRobotsResult } from "./list-robots.result.js";

export class ListRobotsHandler {
  constructor() {
    this.robotRepository = new RobotRepository();
  }

  async handle(query) {
    const robots = await this.robotRepository.find();
    return new ListRobotsResult(robots);
  }
}