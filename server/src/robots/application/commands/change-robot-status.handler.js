import { Factory } from '../../domain/factory.js';
import { RobotRepository } from '../../infraestructure/robot.repository.js';

export class ChangeRobotStatusHandler {
  constructor(){
    this.robotRepository = new RobotRepository();
  }

  async handle(command) {
    //traernos el robot de la base de datos
    const robot = await this.robotRepository.findById(command.id);

    //cambiar el estatus del robot
    robot.changeStatus(command.status);

    //guardar el robot con todas las modificaciones
    this.robotRepository.save(robot);
  }
}