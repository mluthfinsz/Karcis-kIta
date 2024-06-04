import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /* User */
}
import Home from "./Home/Home";
import Concert from "./Concert/Concert";
import Seminar from "./Seminar/Seminar";
import CreateEvent from "./CreateEvent/CreateEvent";
import Others from "./Others/Others";
import Login from "./Login/Login";
import SignUp from "./Register/Register";
import AboutUs from "./AboutUs/AboutUs";

import AfterLogin from "./HomeAfterLogin/HomeAfterLogin";
import AboutAfterLogin from "./AboutAfterLogin/AboutAfterLogin";
import ConcertAfterLogin from "./ConcertAfter/ConcertAfter";
import SeminarAfterLogin from "./SeminarAfterLogin/SeminarAfterLogin";
import OthersAfterLogin from "./OthersAfterLogin/OthersAfterLogin";
import CreateEventSuccess from "./CreateEventSuccess/CreateEventSuccess";
import Profile from "./Profile/Profile";
import TicketInfo from "./TicketInfo/TicketInfo";
import ConfirmProgress from "./ConfirmProgress/ConfirmProgress";

import ConfirmSuccess from "../commponent/ConfirmSuccess/ConfirmSuccess";
import PaymentConfirm from "../commponent/PaymentConfirmation/PaymentConfirmation";
import PaymentSuccess from "./PaymentSuccess/PaymentSuccess";

import HomeAfterLogin from "./HomeAfterLogin/HomeAfterLogin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/ConcertAfterLogin" element={<ConcertAfterLogin />} />

        <Route path="/concert" element={<Concert />} />
        <Route path="/seminar" element={<Seminar />} />
        <Route path="/others" element={<Others />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AfterLogin" element={<AfterLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/AboutAfterLogin" element={<AboutAfterLogin />} />
        <Route path="/OthersAfterLogin" element={<OthersAfterLogin />} />
        <Route path="/SeminarAfterLogin" element={<SeminarAfterLogin />} />
        <Route path="/HomeAfterLogin" element={<HomeAfterLogin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/TicketInfo" element={<TicketInfo />} />
        <Route path="/ConfirmProgress" element={<ConfirmProgress />} />
        <Route path="/ConfirmSuccess" element={<ConfirmSuccess />} />
        <Route path="/PaymentConfirmation" element={<PaymentConfirm />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/CreateEventSuccess" element={<CreateEventSuccess />} />
      </Routes>
    </Router>
  );
}
