
import { useDrag, useDrop } from "react-dnd";

const Task = ({ task, status, moveTask }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task", 
    item: { task, status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "task", 
    drop: (item) => moveTask(item.task, status),
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className={`bg-${status === "to-do" ? "slate-200" : status === "ongoing" ? "sky-400" : "green-500"} p-3 my-2 rounded-lg`}
    >
      {task.title}
    </div>
  );
};

export default Task;

