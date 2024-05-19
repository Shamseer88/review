import "./CardList.css";
import Card from "./Card";

const CardList = ({ items }) => {
  return (
    <div className="card-list-container">
      {items.map((item) => {
        return (
          <Card
            key={item.id}
            itemName={item.name}
            genere={item.genre}
            image={item.image}
            author={item.author}
          />
        );
      })}
    </div>
  );
};

export default CardList;
