import "./Box.css";

const Box = ({ heading, answer }) => {
  let color = "black";

  if (answer.toLowerCase() === "yes") {
    color = "green";
  } else if (answer.toLowerCase() === "no") {
    color = "red";
  }
  return (
    <div className="box">
      <h5>{heading}</h5>
      <p style={{ color }}>{answer}</p>
    </div>
  );
};

export default Box;
