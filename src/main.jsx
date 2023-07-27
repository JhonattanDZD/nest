import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "./pages/Login.jsx/Login.jsx";
import "./index.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
// import FamilyItem from "./components/FamilyItem/FamilyItem";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";
import NewFamily from "./pages/NewFamily/NewFamily";

const families = [
  {
    id: "sadsadsada",
    name: "Fernández",
    image: "https://picsum.photos/200/300",
  },
  {
    id: "sadsadsada",
    name: "López",
    image: "https://picsum.photos/200/300",
  },
  {
    id: "sadsadsada",
    name: "Rivas",
  },
  {
    id: "sadsadsada",
    name: "González",
  },
  {
    id: "0",
    name: "Nueva Familia",
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <NavBar menuTitle={""} />
    {/* <FamilyList families={families} /> */}
    {/* <FamilyParticipants family={"FAMILIA FERNÁNDEZ"} /> */}
    <NewFamily />
  </React.StrictMode>
);
