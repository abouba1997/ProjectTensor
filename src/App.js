import MainPage from "./pages/Main";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage"
import NotFound from "./pages/NotFound";

import {BrowserRouter, Route,  Routes} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<MainPage/>}/>
          <Route path = "/Courses" element ={<CoursesPage/>}/>
          <Route path = "/Lesson" element = {<LessonPage/>}/>
          <Route path="*" element={<NotFound/>}/>
           <Route path= "tensor.ru"/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

