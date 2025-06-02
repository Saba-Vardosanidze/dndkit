import {useDroppable} from "@dnd-kit/core";
import {ColumnType, Task} from "../type";
import TaskCard from "./TaskCard";

type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

const Column = ({column, tasks}: ColumnProps) => {
  const {setNodeRef} = useDroppable({
    id: column.id,
  });
  return (
    <div className="flex flex-col bg-neutral-800 p-4 rounded-lg w-80">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-col flex-1 gap-4">
        {tasks.map((eachTask) => {
          return <TaskCard key={eachTask.id} task={eachTask} />;
        })}
      </div>
    </div>
  );
};

export default Column;
