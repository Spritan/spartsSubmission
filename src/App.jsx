import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/topBar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";

import Dashboard from "./pages/dashboard/Dashboard";
import MNavbar from "./components/mNavbar/MNavbar";
import AcademyManagement from "./pages/academyManagement/AcademyManagement";
import Students from "./pages/students/Students";
import FeePayment from "./pages/feePayment/FeePayment";
import Enqueries from "./pages/enqueries/Enqueries";
import Coaches from "./pages/Coaches/Coaches";
import Schedule from "./pages/Schedule/Schedule";
import Notifications from "./pages/notifications/Notifications";
import Search from "./pages/search/Search";
import More_here from "./pages/more_here/More_here";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <TopBar />
        <Sidebar >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/academic" element={<AcademyManagement />} />
            <Route path="/students" element={<Students />} />
            <Route path="/Fee" element={<FeePayment />} />
            <Route path="/enquiries" element={<Enqueries />} />
            <Route path="/coaches" element={<Coaches />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/more" element={<More_here />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Sidebar>
        <MNavbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
