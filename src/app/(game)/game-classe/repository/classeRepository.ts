import { apiUrl } from "props/url";
import { Classes } from "../entity/classeEntity";

export class ClassesRepository {
  async getClasses(): Promise<Classes[]> {
    const response = await fetch(apiUrl + "classe");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Classes[] = await response.json();

    return data;
  }
}
