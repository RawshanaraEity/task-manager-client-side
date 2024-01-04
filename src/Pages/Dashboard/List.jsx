

import Task from "./Task";
import { useDrop } from "react-dnd";

const TaskList = ({ tasks, moveTask }) => {
  const [, dropToDo] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task, "to-do"),
  });

  const [, dropOngoing] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task, "ongoing"),
  });

  const [, dropCompleted] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task, "completed"),
  });

  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-between">
      <div ref={dropToDo} className="">
        <p className="text-xl text-center w-60 rounded-md p-5 bg-slate-200">To-Do</p>
        <div>
          {tasks
            .filter((task) => task.status === "to-do")
            .map((task) => (
              <Task key={task._id} task={task} moveTask={moveTask} />
            ))}
        </div>
      </div>
      <div ref={dropOngoing} className="">
        <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-sky-400">Ongoing</p>
        <div>
          {tasks
            .filter((task) => task.status === "ongoing")
            .map((task) => (
              <Task key={task._id} task={task} moveTask={moveTask} />
            ))}
        </div>
      </div>
      <div ref={dropCompleted} className="">
        <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-green-500">Completed</p>
        <div>
          {tasks
            .filter((task) => task.status === "completed")
            .map((task) => (
              <Task key={task._id} task={task} moveTask={moveTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
