import { MongoRepository } from '../../shared/infraestructure/mongo-repository.js';
import { Factory } from '../domain/factory.js';

export class RobotRepository extends MongoRepository { 
  constructor() {
    super();
    this.collectionName = 'robots';
  }

  async save(robot) {
    await this.persist(robot);
  }

  async findById(id) {
    const collection = await this.collection();
    const document = await collection.findOne({ _id: id });
    return this.documentToRobot(document);
  }

  documentToRobot(document) {
    return Factory.reconstitute({ ...document, id: document._id });
  }
}