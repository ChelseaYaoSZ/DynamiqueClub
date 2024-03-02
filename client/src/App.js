import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SchedulePage from "./pages/SchedulePage";
import ContactPage from "./pages/ContactPage";
import ProgramPage from "./pages/ProgramPage";
import Page from "./pages/Page";
import RegistrationPage from "./pages/RegistrationPage";

import ProgramDetailsPage from "./pages/ProgramDetailsPage";

import ClubPage from "./pages/ClubPage";
import ThankyouPage from "./pages/ThankyouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/program/:programId" element={<ProgramDetailsPage />} />

          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/club" element={<ClubPage />} />
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
