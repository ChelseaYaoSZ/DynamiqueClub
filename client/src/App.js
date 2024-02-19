import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />

        <div className="flex flex-1 items-center justify-center">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
