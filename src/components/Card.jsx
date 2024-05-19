import "./Card.css";

const Card = ({ itemName, genere, image, author }) => {
  return (
    <div className="card">
      <div className="card-image-div">
        <img className="card-img" src={image} alt="" />
      </div>
      <div className="card-details-div">
        <div className="card-details-div-details">
          <div>
            <h5>Name:</h5>
            <p>{itemName}</p>
          </div>
          <div>
            <h5>Genre:</h5>
            <p>{genere}</p>
          </div>
          <div>
            <h5>Author:</h5>
            <p>{author}</p>
          </div>
        </div>
        <div>
          <div>
            <button className="card-details-div-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
