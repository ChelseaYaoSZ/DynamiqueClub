import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import ContactPage from "./pages/ContactPage";
import ProgramPage from "./pages/ProgramPage";
import Page from "./pages/Page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/program" element={<ProgramPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
