import { useState } from 'react';

import Header from '../Components/Header/Header';
import Courses from '../Components/Courses/Courses';
import Footer from '../Components/Footer/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup/PopupLoginSignup';


function CoursesPage() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header onAdd={() => setShowModal(true)}/>
      {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
      <div className='wrapper'>
        <div className='wrapper__content'>
          <Courses />
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default CoursesPage;
