import { Robot } from './robot.js';

export class Factory {
  static create({ id, name, model }) {
    return new Robot({ id, name, model });
  }

  static reconstitute({ id, name, model, health, status }) {
    return new Robot({ id, name, model, health, status });
  }
}