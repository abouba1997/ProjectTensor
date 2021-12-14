import { useState } from 'react';

import Header from '../Components/Header/Header';
import CoursesAll from '../Components/Courses/CoursesAll';
import Footer from '../Components/Footer/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup/PopupLoginSignup';
import Pagination from '../Components/Pagination/pagination';


function CoursesPage() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header onAdd={() => setShowModal(true)}/>
      {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
      <div className='wrapper'>
        <div className='wrapper__content'>
          <CoursesAll />
          <Pagination/>
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default CoursesPage;
