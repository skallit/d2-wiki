import { apiUrl } from "props/url";
import { Class } from "../entity/classEntity";

export async function getClass(): Promise<Class[]> {
  const response = await fetch(apiUrl + "class");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Class[] = await response.json();

  return data;
}
