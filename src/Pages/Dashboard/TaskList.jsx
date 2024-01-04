
import  { useState, useEffect } from "react";
import Task from "./Task";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useDrop } from "react-dnd";

const List = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosPublic.get('/tasks');
        const tasksData = response.data;
        setTasks(tasksData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      }
    };

    fetchTasks();
  }, [axiosPublic]);

  const moveTask = (taskId, targetStatus) => {
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, status: targetStatus } : task
    );
    setTasks(updatedTasks);
  };

  const [, dropToDo] = useDrop({
    accept: "task",
    drop: (item) => {
      console.log("Dropped item:", item);
      moveTask(item.task._id, "to-do");
    },
  });

  const [, dropOngoing] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task._id, "ongoing"),
  });

  const [, dropCompleted] = useDrop({
    accept: "task",
    drop: (item) => moveTask(item.task._id, "completed"),
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
   
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <div ref={dropToDo} className="">
          <p className="text-xl text-center w-60 rounded-md p-5 bg-slate-200">To-Do</p>
          <div>
            {tasks
              .filter((task) => task.status === "to-do")
              .map((task) => (
                <Task key={task._id} task={task} status="to-do" moveTask={moveTask} />
              ))}
          </div>
        </div>
        <div ref={dropOngoing} className="">
          <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-sky-400">Ongoing</p>
          <div>
            {tasks
              .filter((task) => task.status === "ongoing")
              .map((task) => (
                <Task key={task._id} task={task} status="ongoing" moveTask={moveTask} />
              ))}
          </div>
        </div>
        <div ref={dropCompleted} className="">
          <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-green-500">Completed</p>
          <div>
            {tasks
              .filter((task) => task.status === "completed")
              .map((task) => (
                <Task key={task._id} task={task} status="completed" moveTask={moveTask} />
              ))}
          </div>
        </div>
      </div>
    
  );
};

export default List;

