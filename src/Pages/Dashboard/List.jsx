import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const List = () => {
    const axiosPublic = useAxiosPublic()


    const {data: tasks = [], isPending: loading, refetch } =useQuery({
        queryKey: ['tasks'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/tasks')
            return res?.data;
        }
    })
    console.log(tasks);

    return (
        <div className="flex gap-10 justify-between">
            <div className="">
                <p className="text-xl text-center w-60 rounded-md p-5 bg-slate-200">To-Do</p>
                <div>
                    {
                        tasks?.map(task => <>
                        <div key={task._id}>{task?.title} </div>
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