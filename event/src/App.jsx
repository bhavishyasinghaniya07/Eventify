import Navbar from "./components/Navbar/Navbar";
import AboutUs from "../src/components/About/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "../src/components/Contact/ContactUs";
import Home from "./components/Home/Home";
import LandingPage from "../src/pages/landing/LandingPage";
import Footer from "./components/Footer/Footer";
import Register from "../src/components/Register/Register";
import List from "./components/List/List";
import Venue from "./pages/venue/Venue";
import VenueCard from "./components/VenuePage/VenueCard";
import VenueData from "./Context/VenueData";
import Vendor from "./pages/vendor/Vendor";

function App() {
  return (
    <>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/venues" element={<Venue />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/venuepage" element={<VenueCard />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
