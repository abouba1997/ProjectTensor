import MainPage from "./pages/Main";
import CoursesPage from "./pages/CoursesPage";
import NotFound from "./pages/NotFound";

import {BrowserRouter, Route,  Routes, Navigate} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<MainPage/>}/>
          <Route path = "/Courses" element ={<CoursesPage/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

