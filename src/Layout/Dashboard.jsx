import {
    FaCalendar,
    FaList,
    FaPlus,
    FaTasks,
    
  } from "react-icons/fa";
  import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
  
  const Dashboard = () => {
    const {user} = useAuth()

  
  
    return (
      <div>
        {
          user ? <>
              <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-64 border-2 border-sky-200  min-h-screen">

        <div className="h-2/5">
      <div className="card  items-center mx-auto">
        <figure className="px-10 pt-8">
         <div className="">
               <img className="w-28 h-28 rounded-full border-4" src={user?.photoURL ? user?.photoURL : `https://i.ibb.co/8X8stTp/user.webp`} alt={user?.displayName} />
         </div>
        
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">{user?.displayName} </h2>
          <p className=" font-bold mb-5">{user?.email}</p>
        </div>
      </div>
    </div>


          <ul className="menu mt-5 p-4 text-base">  
            <li>
              <NavLink to="/dashboard/create-task">
                <FaPlus></FaPlus>
                Create New Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/list">
                <FaList></FaList>
                My Task List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/previous-task">
                <FaTasks></FaTasks>
                See Previous Task
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/calender">
                <FaCalendar></FaCalendar>
               Calender
              </NavLink>
            </li>
            
          </ul>
        </div>
        {/* dashboard sidebar */}
        <div className="flex-1 p-5 lg:p-8">
           
          <Outlet></Outlet>
        </div>
      </div>
          </>
          : <Home></Home>
        }
        
      
      </div>
    );
  };
  
  export default Dashboard;
  