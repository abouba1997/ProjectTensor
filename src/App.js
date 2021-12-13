import MainPage from "./pages/Main";
import CoursesPage from "./pages/CoursesPage"
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<MainPage/>}/>
        <Route path = "/Courses" element ={<CoursesPage/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

