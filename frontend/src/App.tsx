import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import AllBlog from "./pages/AllBlog";
import UserData from "./components/UserData";
import AppBar from "./components/AppBar";
import UploadBlog from "./pages/UploadBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/:id" element={<Blog />} />
          <Route path="/dashboard" element={<AllBlog />} />
          <Route path="/testing" element={<UserData />} />
          <Route path="/post" element={<UploadBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
