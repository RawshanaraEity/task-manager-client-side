import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen py-20">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/wg2yQWG/task-1.webp" className="max-w-lg h-[550px]" />
          <div className="w-2/5 mx-auto">
            <h1 className="text-5xl font-bold">ONLINE TASK MANAGER</h1>
            <p className="py-6">Organize and manage your work with task manager, a free task management tool packing more capabilities than you can imagine.</p>
           <Link to='/login'>
           <button className="btn bg-sky-400">Get Started</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;