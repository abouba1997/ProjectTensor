import { useState } from 'react';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup/PopupLoginSignup';
import Pagination from '../Components/Pagination/pagination';
import Courses from '../Components/Courses/Courses';


function CoursesPage() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header onAdd={() => setShowModal(true) } hideMenu={true}/>
      {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
      <div className='wrapper'>
        <div className='wrapper__content'>
          <Courses 
            title={"Список курсов"} 
            page={"Courses"} 
            description={"Более 100 курсов на темы как графический дизайн, фронтенд, бэкенд, Python и многое другое."}/>
          <Pagination/>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default CoursesPage;
