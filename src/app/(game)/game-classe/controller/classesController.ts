import { ClassesRepository } from "../repository/classeRepository";

export class classesController {
  constructor() {}
  repository = new ClassesRepository();

  getClasses() {
    return this.repository.getClasses();
  }
}
