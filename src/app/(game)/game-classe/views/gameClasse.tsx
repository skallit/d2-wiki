import { Classes } from "../entity/classeEntity";
import { ClasseCard } from "../hooks/classeCard";
import { getClasses } from "../useCases/getClasses";

export async function GameClasse() {
  const classData: Classes[] = await getClasses();

  return (
    <>
      <h1>My game class page</h1>
      <ClasseCard classes={classData}></ClasseCard>
    </>
  );
}
