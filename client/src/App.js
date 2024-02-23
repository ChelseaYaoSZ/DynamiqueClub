import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ContactPage from "./pages/ContactPage";
import ProgramPage from "./pages/ProgramPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="flex flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/program" element={<ProgramPage />} />
          </Routes>
        </div>

        <Newsletter />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
