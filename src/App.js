import MainPage from "./pages/Main";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage.jsx";
import NotFound from "./pages/NotFound";

import {BrowserRouter, Route,  Routes, Navigate} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<MainPage/>}/>
          <Route path = "/Courses" element ={<CoursesPage/>}/>
          <Route path = "/lesson" element ={<LessonPage/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

