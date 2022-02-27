import { Route, Routes } from "react-router-dom";
import SinglePost from "./screens/SinglePost";
import TopBar from "./components/topbar/TopBar";
import Home from "./screens/Home";
import Write from "./screens/Write";
import AboutUs from "./screens/AboutUs";
import Blog from "./screens/Blog";
import ContactUs from "./screens/ContactUs";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="single-post" element={<SinglePost />} />
          <Route path="write-post" element={<Write />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
