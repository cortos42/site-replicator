import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import EligibleWorksPage from "./pages/EligibleWorksPage";
import MaPrimeRenov from "./pages/MaPrimeRenov";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/travaux-eligibles" element={<EligibleWorksPage />} />
        <Route path="/ma-prime-renov" element={<MaPrimeRenov />} />
      </Routes>
    </Router>
  );
}

export default App;