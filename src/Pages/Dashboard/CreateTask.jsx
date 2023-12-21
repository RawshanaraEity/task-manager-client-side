

const CreateTask = () => {
    return (
        <div>
            <h2 className="text-2xl font-medium">Create Your New Task Here</h2>
            <div className="px-5 md:px-0 bg-base-200">
          <div className="card mt-10 md:w-5/12  mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
             <div className="flex flex-col  gap-5">
             <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Title</span>
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
        {errors.description && <span className="text-red-600">This field is required</span>}
      </div>

      <div className="form-control flex-1">
      <label className="label">
           <span className="label-text text-lg font-medium">
           Scheduled Date
           </span>
            </label>
        <input
          type="date"
          {...register("scheduledDate", { required: true })}
          className="input input-bordered"
        />
        {errors.scheduledDate && <span className="text-red-600">This field is required</span>}
      </div>


              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text ">Priority</span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("priority")}
                >
                  <option value="organizer">Low</option>
                  <option value="healthcareProfessional">Moderate</option>
                  <option value="participant">High</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-lime-500 text-white"
                  type="submit"
                  value="SignUp"
                />
              </div>
            </form>
          </div>
        </div>
        </div>
    );
};

export default CreateTask;