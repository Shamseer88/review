import { useState } from "react";

import Tab from "./components/Tab";
import MainContainer from "./components/MainContainer";
import TopNav from "./components/TopNav";
import AddItemForm from "./components/AddItemForm";

import books from "../src/bookList";
import movies from "../src/MovieList";

import "./App.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("books");

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const itemsToDisplay = activeTab === "books" ? books : movies;

  return (
    <div className={`app-container ${showForm ? "overlay-div" : ""}`}>
      <TopNav handleClick={toggleForm} />
      <Tab activeTab={activeTab} onTabChange={handleTabChange} />
      <MainContainer items={itemsToDisplay} />
      {showForm && <AddItemForm handleClick={toggleForm} />}
    </div>
  );
};

export default App;
