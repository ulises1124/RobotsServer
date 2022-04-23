export class Robot {
  constructor({ id, name, model, health, status }) {
    this.id = id;
    this.name = name;
    this.model = model;
    if (health == undefined) {
      this.health = 10;
    } else {
      this.health = health;
    }
    this.status = status || 'normal';
  }

  toProperties() {
    return {
      id: this.id,
      name: this.name,
      model: this.model,
      health: this.health,
      status: this.status
    };
  }

  changeStatus(status) {
    this.status = status;
  }

  attackRobot() {

    if (this.health <= 0) {
      throw new Error('ya no se puede seguir atacando a este robot');
    }

    if (this.status == 'normal') {
      this.health = this.health - 2;
    } else {
      this.health = this.health - 1;
    }
  }
}