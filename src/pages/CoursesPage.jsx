import { useState } from 'react';

import '../Components/css/styles.css';
import '../Components/css/modals.css';
import '../Components/css/lesson.css';
import '../Components/css/media_query.css';

import Header from '../Components/Header';
import Landing from '../Components/Landing';
import Courses from '../Components/Courses';
import Advantages from '../Components/Advantages';
import Teachers from '../Components/Teachers';
import Footer from '../Components/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup';


function CoursesPage() {
  const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header onAdd={() => setShowModal(true)}/>
      {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
      <div className='wrapper'>
        <div className='wrapper__content'>
          <Landing />
          <Courses />
          <Footer />
        </div>
      </div>
    </div>
  );
}


export default CoursesPage;