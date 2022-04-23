import { RobotRepository } from "../../infraestructure/robot.repository.js";

export class AttackRobotHandler {
    constructor(){
      this.robotRepository = new RobotRepository();
    }
  
    async handle(command) {
        //traernos el robot de la base de datos
        const robot = await this.robotRepository.findById(command.id);
    
        //atacamos al robot
        robot.attackRobot();
        
        //guardar el robot con todas las modificaciones
        await this.robotRepository.save(robot);
      }
  }