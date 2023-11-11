import "./App.css";
import RoutesPage from "./Routes/Routes";
import Content from "./components/Content";
import Header from "./components/Header";
import Layout from "./components/Layout";
import RightSidebar from "./components/RightSidebar";
import Sidebar from "./components/Sidebar";
import Bookmark from "./pages/Bookmark";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyBlogs from "./pages/MyBlogs";
import Register from "./pages/Register";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
         <Route path="login" element={<Login />} />
         <Route path="register" element={<Register />} />
         <Route path="/" element={<Layout />} >
            <Route index path="/" element={<Home />} />
            <Route path="my-blogs" element={<MyBlogs />} />
            <Route path="bookmarks" element={<Bookmark />} /> 
            <Route path="bookmarks" element={<Bookmark />} /> 
         </Route>

      </Routes>
    </div>
  );
}

export default App;
