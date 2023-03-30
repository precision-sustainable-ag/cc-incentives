// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Container from "./components/Container/Container";

// import Instructions from "./components/Instructions/Instructions";
// import pic from "images/pexels-alejandro-barrón-96715.jpg";
// import Login from "Login/Login";
import Snack from "./components/Snackbar/Snack";
import GoogleWrapper from "./components/GoogleWrapper/GoogleWrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Header from "./components/Header/Header";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Jumbotron /> 
      <Header /> 
      <GoogleWrapper /> 
    </Fragment>
       
    // <GoogleWrapper />    
  );
}

export default App;
