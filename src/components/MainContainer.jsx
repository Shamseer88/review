import "./MainContainer.css";
import CardList from "./CardList";
import { useContext } from "react";
import { TabContext } from "../context/TabContext";

const MainContainer = () => {
  const { activeTab, books, movies } = useContext(TabContext);
  const itemsToDisplay = activeTab === "books" ? books : movies;
  return (
    <div className="main-container">
      <CardList items={itemsToDisplay} />
    </div>
  );
};

export default MainContainer;
