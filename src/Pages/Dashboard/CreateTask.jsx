

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const CreateTask = () => {

    const axiosPublic = useAxiosPublic()

    const {
       register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) =>{
      console.log(data);
  
  
          const taskItem = {
              title: data.title,
              description: data.description,
              deadline: data.deadline,
              status: data.status,
              priority: data.priority
          }
          
          const taskRes = await axiosPublic.post('/tasks', taskItem);
          console.log(taskRes.data)
          if(taskRes.data.insertedId){
            
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Task Create Done",
                  showConfirmButton: false,
                  timer: 1500
                });
                reset()
          }
      }
     




  return (
    <div>
      <h2 className="text-2xl font-medium">Create Your New Task Here</h2>
      <div className=" md:px-0">
        <div className="card mt-10  mx-auto shadow-2xl bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex flex-col  gap-5">

                <div className="flex flex-wrap gap-2 md:gap-10 items-center">
                    
              <div className="form-control w-28 flex-1">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                  deadline
                  </span>
                </label>
                <input
                  type="date"
                  {...register("deadline", { required: true })}
                  className="input input-bordered"
                  
                />
                {errors.deadline && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              <div className="form-control w-28 flex-1">
              <label className="label">
                  <span className="label-text text-lg font-medium">
                  Status
                  </span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("status")}
                >
                  <option value="to-do">to-do</option>
                  <option value="ongoing">ongoing</option>
                  <option value="completed">completed</option>
                </select>
              </div>
              <div className="form-control w-28 flex-1">
                <label className="label">
                  <span className="label-text text-lg font-medium">Priority</span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("priority")}
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>
                </div>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-lg font-medium">Title</span>
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  name="title"
                  className="input input-bordered"
                />
                {errors.title && (
                  <span className="text-red-600">Title is required</span>
                )}
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Description
                  </span>
                </label>
                <textarea
                  {...register("description", { required: true })}
                  className="input input-bordered"
                />
                {errors.description && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>


              <div className="form-control w-28 mt-6">
                <input
                  className="btn bg-sky-400 text-white"
                  type="submit"
                  value="Create Task"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
