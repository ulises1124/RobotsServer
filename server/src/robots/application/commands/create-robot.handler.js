import { Factory } from '../../domain/factory.js';
import { RobotRepository } from '../../infraestructure/robot.repository.js';

export class CreateRobotHandler {
  constructor() {
    /* nos traemos la funcionalidad de la clase RobotRepository */
    this.robotRepository = new RobotRepository();
  }

  async handle(command) {
    /* Crear un nuevo robot a partir de las propiedades que nos llegan del frontend */
    const robot = Factory.create({ id: command.id, name: command.name, model: command.model });

    /* y lo almacenamos en labase de datos */
    await this.robotRepository.save(robot);
  }
}