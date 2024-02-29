import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ServiceSelection from "./pages/ServiceSelection.jsx";
import AppointmentScheduling from "./pages/AppointmentScheduling.jsx";
import StylistSelection from "./pages/StylistSelection.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import UserProfile from "./pages/UserProfile.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<ServiceSelection />} />
        <Route path="/schedule" element={<AppointmentScheduling />} />
        <Route path="/stylists" element={<StylistSelection />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
