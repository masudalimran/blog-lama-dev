import { Route, Routes } from "react-router-dom";
import SinglePost from "./screens/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./screens/Home";
import Write from "./screens/Write";
import AboutUs from "./screens/AboutUs";
import Blog from "./screens/Blog";
import ContactUs from "./screens/ContactUs";
import Footer from "./components/Footer";
import ProfilePage from "./screens/User/ProfilePage";
import EditProfilePage from "./screens/User/EditProfilePage";
import EditPost from "./screens/EditPost";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/single-post/:id" element={<SinglePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/write-post" element={<Write />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
