
import useTasks from "../../Hooks/useTasks";


const List = () => {
    const [tasks, loading, refetch] = useTasks()


   
    console.log(tasks);

    return (
        <div className="flex gap-10 justify-between">
            <div className="">
                <p className="text-xl text-center w-60 rounded-md p-5 bg-slate-200">To-Do</p>
                <div>
                    {
                        tasks?.map(task => <>
                        <div key={task._id}>
                          <h2 className="bg-slate-200 p-3 my-2 rounded-lg">  {task?.title}  </h2>
                           
                            </div>
                        </>)
                    }
                </div>
            </div>
            <div className="">
                <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-sky-400">Ongoing</p>
            </div>
            <div className="">
                <p className="text-xl text-white text-center w-60 rounded-md p-5 bg-green-500">Completed</p>
            </div>
        </div>
    );
};

export default List;