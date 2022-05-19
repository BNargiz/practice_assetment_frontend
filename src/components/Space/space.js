import { Link } from "react-router-dom";

const Space = (props) => {
  return (
    <div
      style={{
        backgroundColor: `${props.bkcolor}`,
        color: `${props.color}`,
        margin: 20,
        padding: 20,
        textAlign: "center",
      }}
    >
      {props.title}
      <Link to={`/spaces/${props.id}`}>
        <button style={{ maxWidth: 200, fontSize: 20, margin: 20 }}>
          Visit space
        </button>
      </Link>
    </div>
  );
};

export default Space;
