export class CreateRobotCommand {
  constructor({ id, name, model }) {
    this.id = id;
    this.name = name;
    this.model = model;
  }
}