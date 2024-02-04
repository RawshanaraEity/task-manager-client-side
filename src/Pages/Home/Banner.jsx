import { Link } from "react-router-dom";

import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


const Banner = () => {

    useEffect(() =>{
      Aos.init(
        {
          duration: 1000, 
        offset: 200,
        } 
      );
    },[])



    return (
        <div className="hero min-h-screen">
        <div  className="hero-content  flex-col md:flex-row-reverse">
          <div data-aos="fade-left" className="lg:w-3/6 lg:max-w-lg ">
          <img  src="https://i.ibb.co/wg2yQWG/task-1.webp"  />
          </div>
          <div className="lg:w-3/5 mr-auto" data-aos="zoom-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-sky-400">Online Task Manager</h1>
            <p className="py-6 text-lg text-gray-500 font-medium">Organize and manage your work with task manager, a free task management tool packing more capabilities than you can imagine.</p>
           <Link to='/login'>
           <button className="btn text-lg bg-sky-400 text-white">Let’s Explore</button>
           </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;