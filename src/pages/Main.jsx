import { useState } from 'react';
import '../Components/Landing/Landing.css';


import Header from '../Components/Header/Header';
import Landing from '../Components/Landing/Landing';
import CoursesMain from '../Components/Courses/CoursesMain';
import Advantages from '../Components/Advantages/Advantages';
import Teachers from '../Components/Teachers/Teachers';
import Footer from '../Components/Footer/Footer';
import PopupLoginSignup from '../Components/PopupLoginSignup/PopupLoginSignup';


function MainPage() {
    const [showModal, setShowModal] = useState(false)
  
  return (
    <div>
      <Header onAdd={() => setShowModal(true)}/>
      {showModal && <PopupLoginSignup onClose={() => setShowModal(false)}/>}
      <div className='wrapper'>
        <div className='wrapper__content'>
          <Landing />
          <CoursesMain />
          <Advantages />
          <Teachers />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
