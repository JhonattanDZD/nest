import React from "react";
import ReactDOM from "react-dom/client";
// import Login from "./pages/Login.jsx/Login.jsx";
import "./index.scss";
import NavBar from "./components/NavBar/NavBar.jsx";
// import FamilyItem from "./components/FamilyItem/FamilyItem";
import FamilyList from "./pages/FamilyList/FamilyList";
import FamilyParticipants from "./pages/FamilyParticipants.jsx/FamilyParticipants";

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


const FernandezFamily = [
  {
    id: 1,
    name: 'Roberto Fernández',
    image: 'https://picsum.photos/200/300',
    baby: false
  },
  {
    id: 2,
    name: 'Sandy Mey Zuleta',
    image: 'https://picsum.photos/200/300',
    baby: false
  },
  {
    id: 3,
    name: 'Alan Luciano',
    image: 'https://picsum.photos/200/300',
    baby: true
  }
]

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <NavBar menuTitle={""} />
    {/* <FamilyList families={families} /> */}
    <FamilyParticipants family={"FAMILIA FERNÁNDEZ"} />
  </React.StrictMode>
);
