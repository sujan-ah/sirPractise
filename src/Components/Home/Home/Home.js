import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Exercise from "../../../Components/Home/Exercise/Exercise";
// import Header from "../Components/Shared/Header/Header";
import Header from "../../Shared/Header/Header.js";
import Footer from "../../Shared/Footer/Footer.js";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Header></Header>
      <Exercise></Exercise>
      <Footer></Footer>
    </div>
  );
};

export default Home;
