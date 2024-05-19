import "./CardList.css";
import books from "../../src/bookList.js";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="card-list-container">
      {books.map((book) => {
        return (
          <Card
            key={book.id}
            itemName={book.name}
            genere={book.genre}
            image={book.image}
            author={book.author}
          />
        );
      })}
    </div>
  );
};

export default CardList;
