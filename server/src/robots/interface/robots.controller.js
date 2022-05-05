import { ChangeRobotStatusCommand } from '../application/commands/change-robot-status.command.js';
import { ChangeRobotStatusHandler } from '../application/commands/change-robot-status.handler.js';
import { CreateRobotCommand } from '../application/commands/create-robot.command.js';
import { CreateRobotHandler } from '../application/commands/create-robot.handler.js';
import { GetRobotHandler } from '../application/queries/get-robot.handler.js';
import { GetRobotQuery } from '../application/queries/get-robot.query.js';
import { AttackRobotCommand } from '../application/commands/attack-robot.comand.js';
import { AttackRobotHandler } from '../application/commands/attack-robot.handler.js';
import { ListRobotsQuery } from '../application/queries/list-robots.query.js';
import { ListRobotsHandler } from '../application/queries/list-robots.handler.js';

export const robotsController = (router) => {
  router.get('/robots', async (req, res) => {
    const query = new ListRobotsQuery();
    const handler = new ListRobotsHandler();
    const result = await handler.handle(query);
    res.status(200).send(result);
  });

  /* Aqui llegamos desde el frontend */
  router.post('/robots', async (req, res) => {
    const command = new CreateRobotCommand({ ...req.body });
    const handler = new CreateRobotHandler();
    await handler.handle(command);
    res.sendStatus(204);
  });

  //guardar el robot con todas las modifficaciones
  router.put('/robots/:id/status', async (req, res) => {
    // creamos el comando con la informacion necesaria y la guardamos en la constante command
    const command = new ChangeRobotStatusCommand({ ...req.params, ...req.body });

    // aqui traemos las intrucciones necesarias (conocer el id y el status) para ejecutar el comando command 
    const handler = new ChangeRobotStatusHandler();

    // Ejecutamos la constante Command
    await handler.handle(command);

    // si todo va bien respondemos con un ok (204)
    res.sendStatus(204);

  });

  router.get('/robots/:id', async (req, res) => {
    const query = new GetRobotQuery({ ...req.params });

    const handler = new GetRobotHandler();

    const result = await handler.handle(query);

    res.status(200).send(result);
  });

  router.put('/robots/:id/attack', async (req, res) => {
    const command = new AttackRobotCommand({ ...req.params });

    const handler = new AttackRobotHandler();

    try {
      await handler.handle(command);
      res.sendStatus(204);
    } catch (error) {

      res.status(400).send({ message: error.message });

    }

  });


};