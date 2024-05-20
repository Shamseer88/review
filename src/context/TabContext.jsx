import { createContext, useState } from "react";

import booksData from "../bookList.js";
import moviesData from "../MovieList.js";

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("books");
  const [books, setBooks] = useState(booksData);
  const [movies, setMovies] = useState(moviesData);

  const addBook = (book) => {
    setBooks([...books, book]);
  };
  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <TabContext.Provider
      value={{ activeTab, toggleTab, books, movies, addBook, addMovie }}
    >
      {children}
    </TabContext.Provider>
  );
};
