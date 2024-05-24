import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./AddItemForm.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TabContext } from "../context/TabContext";

import books from "../bookList.js";
import movies from "../MovieList.js";

const AddItemForm = ({ handleClick }) => {
  const { activeTab, addBook, addMovie } = useContext(TabContext);

  const [formState, setFormState] = useState({
    name: "",
    authorDirector: "",
    genre: "",
    image: "",
    finishedDate: "",
    suggestion: "",
    comments: "",
    favoriteLines: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: new Date().getTime(),
      name: formState.name,
      genre: formState.genre,
      [activeTab === "books" ? "author" : "director"]: formState.authorDirector,
      image: formState.image,
      finishedDate: formState.finishedDate,
      suggestion: formState.suggestion,
      comments: formState.comments,
      favoriteLines: formState.favoriteLines,
    };
    if (activeTab === "books") {
      addBook(newItem);
      toast.success("Successfully toasted!");
    } else {
      addMovie(newItem);
      toast.success("Successfully toasted!");
    }
    handleClick();
  };

  return (
    <div className="add-form-container">
      <Toaster />
      <button className="close-btn" onClick={handleClick}>
        <IoMdCloseCircleOutline size={20} />
      </button>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>{activeTab === "books" ? "Book" : "Movie"} Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label>{activeTab === "books" ? "Author" : "Director"} Name:</label>
          <input
            type="text"
            name="authorDirector"
            value={formState.authorDirector}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={formState.genre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label>Cover image link:</label>
          <input
            type="text"
            name="image"
            value={formState.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label>Finished on the date:</label>
          <input
            type="text"
            name="finishedDate"
            value={formState.finishedDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-element">
          <label>Will I suggest it for a friend?</label>
          <div className="radio-btn-div">
            <div>
              <input
                type="radio"
                id="yes"
                name="suggestion"
                value="Yes"
                onChange={handleChange}
                required
              />
              <label htmlFor="yes">YES</label>
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="suggestion"
                value="No"
                onChange={handleChange}
                required
              />
              <label htmlFor="no">NO</label>
            </div>
          </div>
        </div>
        <div className="form-element">
          <label>Did I like it? Why?</label>
          <textarea
            name="comments"
            value={formState.comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-element">
          <label>Favorite lines:</label>
          <textarea
            name="favoriteLines"
            value={formState.favoriteLines}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-element">
          <button className="form-submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
