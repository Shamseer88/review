import React, { useContext } from "react";
import "./AddItemForm.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TabContext } from "../context/TabContext";

const AddItemForm = ({ handleClick }) => {
  const { activeTab } = useContext(TabContext);
  return (
    <div className="add-form-container">
      <button className="close-btn" onClick={handleClick}>
        <IoMdCloseCircleOutline size={20} />
      </button>
      <form>
        <div className="form-element">
          <label>Book Name:</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>{activeTab === "books" ? "Author" : "Director"} Name:</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Genre:</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Cover image link:</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Finished on the date:</label>
          <input type="text" />
        </div>
        <div className="form-element">
          <label>Will I suggest it for a friend?</label>
          <div className="radio-btn-div">
            <div>
              <input type="radio" id="yes" name="suggestion" value="yes" />
              <label htmlFor="yes">YES</label>
            </div>
            <div>
              <input type="radio" id="no" name="suggestion" value="no" />
              <label htmlFor="no">NO</label>
            </div>
          </div>
        </div>
        <div className="form-element">
          <label>Did I like it? Why?</label>
          <textarea></textarea>
        </div>
        <div className="form-element">
          <label>Favorite lines:</label>
          <textarea></textarea>
        </div>
        <div className="form-element">
          <button className="form-submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
