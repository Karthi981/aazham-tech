import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "@/components/LandingPage";
import CoursecraftLMS from "@/components/CoursecraftLMS";
import BookMeeting from "@/components/BookMeeting";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/coursecraft-lms" element={<CoursecraftLMS />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
      </Routes>
    </Router>
  );
};

export default App;
