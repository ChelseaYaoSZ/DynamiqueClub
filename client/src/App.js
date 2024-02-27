import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import ContactPage from "./pages/ContactPage";
import ProgramPage from "./pages/ProgramPage";
import Page from "./pages/Page";
import RegistrationPage from "./pages/RegistrationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
