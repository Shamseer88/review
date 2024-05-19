import React, { useState } from "react";
import Tab from "./components/Tab";
import MainContainer from "./components/MainContainer";
import TopNav from "./components/TopNav";
import AddItemForm from "./components/AddItemForm";
import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={`app-container ${showForm ? "overlay-div" : ""}`}>
      <TopNav handleClick={toggleForm} />
      <Tab />
      <MainContainer />
      {showForm && <AddItemForm handleClick={toggleForm} />}
    </div>
  );
};

export default App;
