import {useDraggable} from "@dnd-kit/core";
import {Task} from "../types";

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({task}: TaskCardProps) => {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {transform: `translate(${transform.x}px, ${transform.y}px)`}
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-neutral-700 shadow-sm hover:shadow-md p-4 rounded-lg cursor-grab"
    >
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-neutral-400 text-sm">{task.description}</p>
    </div>
  );
};

export default TaskCard;
