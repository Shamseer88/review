import "./CardList.css";
import Card from "./Card";
import { useContext } from "react";
import { TabContext } from "../context/TabContext";

const CardList = ({ items }) => {
  const { activeTab } = useContext(TabContext);
  return (
    <div className="card-list-container">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            itemName={item.name}
            genere={item.genre}
            image={item.image}
            author={activeTab === "books" ? item.author : item.director}
          />
        );
      })}
    </div>
  );
};

export default CardList;
