import React from "react";
import { ReactDOM } from "react";
import Card from "./Card";
import Jumbotron from "./Jumbotron";
import NavBar from "./navBar";
//include images into your bundle

//create your first component
const Home = () => {
   
    
	return (
    <div>
  <NavBar />
  <Jumbotron />
    <div className="d-flex " style={{justifyContent: "space-between"}}>
  <Card />
  <Card />
  <Card />
  <Card />
  <Card />
  </div>
 </div>
	);
  
};
// ReactDOM.render(Card(), document.querySelector("#app"));

export default Home;
