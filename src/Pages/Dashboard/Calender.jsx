
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const Calender = () => {
    return (
        <div>
            <div className=''>
            <Calendar
            view="2023" 
            showNeighboringMonth={true} 
            allowPartialRange ={true}
          />
            </div>
        </div>
    );
};

export default Calender;