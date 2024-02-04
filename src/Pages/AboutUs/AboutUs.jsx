import {  FaCheckSquare } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


const AboutUs = () => {

    useEffect(() =>{
        Aos.init(
          {
            duration: 1000, 
          offset: 200,
          } 
        );
      },[])

    return (
        <div>
            <div className=" flex gap-5 mb-5 lg:gap-20 px-5 lg:px-0 flex-col md:flex-row justify-between items-center">
                <div data-aos="fade-right" className="flex-1 ">
                 
                  <img className="" src="https://i.ibb.co/BKmwtsd/eden-constantino-i-Jg1-Yzs-Efqo-unsplash.jpg" alt="" />
                 
                </div>
                <div data-aos="zoom-in-up" className="flex-1 space-y-2 lg:space-y-5">
                    <p className="lg:text-xl font-bold text-gray-500">Task Management with Task Manager</p>
                    <h2 className="text-2xl lg:text-4xl font-semibold text-sky-400">It’s Time to Get Organized.</h2>
                    <p className="text-sm lg:text-lg md:font-medium text-gray-500">Task management is the link between planning to do something and getting it done. Your task management software should provide an overview of work in progress that enables tracking from conception to completion. Enter MeisterTask: join teams everywhere who use our Kanban-style project boards to digitalize workflows and gain a clear overview of task progress. Let's get organized together!</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutUs;