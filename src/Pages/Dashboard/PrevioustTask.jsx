import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useTasks from "../../Hooks/useTasks";
import { FaEdit, FaMinus } from "react-icons/fa";


const PrevioustTask = () => {
  const axiosPublic = useAxiosPublic();
  const [tasks, loading, refetch] = useTasks();


  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${item._id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your task has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="border-b-2">
          <h2 className="text-4xl mb-5 text-center ">My Tasks</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="text-center bg-sky-200 ">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody className="text-center font-medium">
              {tasks?.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item?.title}</td>
                  <td>{item?.description}</td>
                  <td> {item?.deadline}</td>
                  <td className="text-right">
                    <button className="btn btn-sm">{item?.status}</button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn rounded-none btn-sm bg-red-600 text-white"
                    >
                      <FaMinus></FaMinus>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PrevioustTask;
