import "./SingleItemPage.css";

import { RiMovie2Line } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TbCategory2 } from "react-icons/tb";
import { BsCalendar2Date } from "react-icons/bs";
import { PiArrowFatLinesLeftLight } from "react-icons/pi";

import { useContext } from "react";
import { TabContext } from "../context/TabContext";
import Box from "../components/Box";

const SingleItemPage = () => {
  const { activeTab } = useContext(TabContext);
  return (
    <div className="single-item-container">
      <div className="left-single-item-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/b/b5/Adujivitam.jpg"
          alt=""
        />
      </div>
      <div className="right-single-item-container">
        <div className="single-header">
          <h1>The great gatsby</h1>
          <button className="card-details-div-btn navbar-btn">
            <PiArrowFatLinesLeftLight /> Back to home
          </button>
        </div>
        <div className="single-details">
          <div className="single-director-author">
            <p>
              {activeTab === "movies" ? (
                <>
                  <RiMovie2Line />
                  <span>Director</span>
                </>
              ) : (
                <>
                  <HiOutlinePencilSquare />
                  <span>Author:</span> Shamseer Ali
                </>
              )}
            </p>
          </div>
          <div className="single-genre">
            <p>
              <TbCategory2 />
              <span>Genre:</span> Shamseer Ali
            </p>
          </div>
          <div className="single-genre">
            <p>
              <BsCalendar2Date />
              <span>Finished Date:</span> May 20, 2024
            </p>
          </div>
        </div>
        <div className="boxes-container">
          <Box
            heading="Summary:"
            answer="The Great Gatsby is narrated by Nick Carraway, a Yale University graduate from the Midwest who moves to New York after World War I to pursue a career in bonds. He recounts the events of the summer he spent in the East two years later, reconstructing his story through a series of flashbacks not always told in chronological order."
          />
          <Box
            heading="Did I like it? Why?"
            answer="YES, A Must-Read: Whether you're drawn to the historical context, the captivating story, or the profound themes, The Great Gatsby is a remarkable novel that deserves its place as a literary masterpiece. It's a quick read, but its impact lingers long after you turn the final page."
          />

          <Box
            heading="Favorite lines:"
            answer="Social Commentary: Fitzgerald masterfully weaves a social commentary into the narrative. The decadent lifestyle of the Buchanans exposes the moral bankruptcy of the upper class, their privilege contrasting sharply with the struggles of the working class. The American Dream, symbolized by Gatsby's relentless ambition, is ultimately revealed as elusive and destructive."
          />
          <Box heading="Will I suggest it for a friend?" answer="YES" />
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
