import { Routes, Route } from "react-router-dom";
import { HeaderLayout } from "./layouts";
import About from "./pages/about";
import MainPage from "./pages";
import News from "./pages/news";
import User from "./pages/users/user";
import Users from "./pages/users";

export default function App() {
  return (
    <div>
      <HeaderLayout />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/User" element={<User />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </div>
  );
}
