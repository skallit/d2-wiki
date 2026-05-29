import { ClassCard } from "../hooks/classCard";
import { getClass } from "../repository/classRepository";

export async function GameClass() {
  const classData = await getClass();

  return (
    <>
      <h1>My game class page</h1>
      <ClassCard classes={classData}></ClassCard>
    </>
  );
}
