import "./TopNav.css";
import { RiHome4Fill } from "react-icons/ri";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="nav-left">
        <RiHome4Fill size={30} />
      </div>
      <div className="nav-right">
        <button className="card-details-div-btn navbar-btn">
          Add a book review
        </button>
      </div>
    </div>
  );
};

export default TopNav;
