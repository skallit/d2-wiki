import { classesController } from "../controller/classesController";
import { Classes } from "../entity/classeEntity";

export function getClasses(): Promise<Classes[]> {
  const getData = new classesController();

  return getData.getClasses();
}
