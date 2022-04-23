import { Factory } from '../../domain/factory.js';
import { RobotRepository } from '../../infraestructure/robot.repository.js';

export class CreateRobotHandler {
  constructor() {
    this.robotRepository = new RobotRepository();
  }

  async handle(command) {
    const robot = Factory.create({ id: command.id, name: command.name, model: command.model });

    this.robotRepository.save(robot);
  }
}