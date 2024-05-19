import "./MainContainer.css";
import CardList from "./CardList";

const MainContainer = ({ items }) => {
  return (
    <div className="main-container">
      <CardList items={items} />
    </div>
  );
};

export default MainContainer;
