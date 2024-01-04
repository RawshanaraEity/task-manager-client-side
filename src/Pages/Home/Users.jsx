import Aos from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

const Users = () => {
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
        <h2 className=" text-5xl py-10 font-semibold">Our Happy Users</h2>
      <div className="carousel carousel-center flex-col md:flex-row items-center rounded-box">
        <div className="carousel-item">
          <div data-aos="flip-left" className="flex flex-col items-center py-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/GkSmY0Y/tec-author.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Developer</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center p-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/5sq31nv/aboutus.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Specialist</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center pr-10 py-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/XYtnq3d/tec-Apurba.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Banker</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center py-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/8MxVcPz/harini.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Corporate Professional</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center p-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/sgsXsTs/travel-author.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">IT Professional</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center py-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/3kD9Q0Q/dr4.jpg'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Doctor</p>
          </div>
        </div>
        <div className="carousel-item">
        <div data-aos="flip-left" className="flex flex-col items-center p-10 ">
            <img
              className="h-52 w-52  rounded-full border-4 border-sky-500"
              src='https://i.ibb.co/mSHjJg5/travel1.webp'
              alt=""
            />
           
            <p className="text-center mt-2 font-medium">Traveler</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
