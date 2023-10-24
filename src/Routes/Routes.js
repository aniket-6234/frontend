// import React, { memo } from "react";
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
// import PublicRoutes from "./PublicRoutes";
// import PrivateRoutes from "./PrivateRoutes";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Layout from "../components/Layout";
// import PageNotFound from "../pages/PageNotFound";
// import Home from "../pages/Home";
// import MyBlogs from "../pages/MyBlogs";
// import Bookmark from "../pages/Bookmark";
// import Follower from "../pages/Follower";
// import Profile from "../pages/Profile";
// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import RightSidebar from "../components/RightSidebar";
// import Comment from "../pages/Comment";


// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//       <Route index path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//     </Route>
//   )
// )

// const RoutesPage = () => {

//   return (
//     <RouterProvider router={router} />
//     // <Routes>
//     //   <Route path="login" element={<Login />} />
//     //   <Route path="register" element={<Register />} />

//     //   <Route
//     //     element={
//     //       <div>
//     //         <Header />
//     //         <div className="layout">
//     //           <Sidebar />
//     //           <div className="content-container">
//     //             <Route path="explore" element={<Home />} />
//     //             <Route path="my-blogs" element={<MyBlogs />} />
//     //             <Route path="bookmarks" element={<Bookmark />} />
//     //             <Route path="comments" element={<Comment />} />{" "}
//     //             {/* Use the Comment component here */}
//     //             <Route path="/users" element={<Follower />} />
//     //             <Route path="/profile" element={<Profile />} />
//     //           </div>
//     //           <RightSidebar />
//     //         </div>
//     //       </div>
//     //     }
//     //   />

//     //   <Route path="*" exact element={<PageNotFound />} />
//     // </Routes>
//   );
// };

// export default RoutesPage;
