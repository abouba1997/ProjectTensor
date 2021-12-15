import MainPage from "./pages/MainPage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage"
import NotFound from "./pages/NotFound";
import Main from "./Components/Adminisatration/Main";

import {BrowserRouter, Route,  Routes} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<MainPage/>}/>
          <Route path = "/Courses" element ={<CoursesPage/>}/>
          <Route path = "/Lesson" element = {<LessonPage/>}/>
          <Route path = "/admin" element = {<Main/>}/>
          <Route path="*" element={<NotFound/>}/>
           <Route path= "tensor.ru"/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

