import { useState } from "react";

import Tab from "./components/Tab";
import MainContainer from "./components/MainContainer";
import TopNav from "./components/TopNav";
import AddItemForm from "./components/AddItemForm";

import books from "../src/bookList";
import movies from "../src/MovieList";

import "./App.css";
import { TabProvider } from "./context/TabContext";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState("books");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const itemsToDisplay = activeTab === "books" ? books : movies;

  return (
    <TabProvider>
      <div className={`app-container ${showForm ? "overlay-div" : ""}`}>
        <TopNav handleClick={toggleForm} />
        <Tab />
        <MainContainer books={books} movies={movies} />
        {showForm && <AddItemForm handleClick={toggleForm} />}
      </div>
    </TabProvider>
  );
};

export default App;
