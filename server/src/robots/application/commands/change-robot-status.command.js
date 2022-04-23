export class ChangeRobotStatusCommand {
    constructor({id, status}) {
      this.id = id;
      this.status = status;
    }
  }