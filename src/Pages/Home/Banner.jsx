import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen">
        <div className="hero-content  flex-col md:flex-row-reverse">
          <img src="https://i.ibb.co/wg2yQWG/task-1.webp" className="md:w-3/6 lg:max-w-lg lg:h-[550px]" />
          <div className="lg:w-3/5 mr-auto">
            <h1 className="text-5xl lg:text-7xl font-bold">Online Task Manager</h1>
            <p className="py-6 text-lg">Organize and manage your work with task manager, a free task management tool packing more capabilities than you can imagine.</p>
           <Link to='/login'>
           <button className="btn text-lg bg-sky-400">Let’s Explore</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;