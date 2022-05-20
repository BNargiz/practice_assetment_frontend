import { useDispatch } from "react-redux";
import { deleteOneStory } from "../../store/user/actions";

const MyStory = (props) => {
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <img style={{ maxWidth: 200 }} src={props.image} alt="img" />
      <button onClick={() => dispatch(deleteOneStory(props.id))}>
        Delete Story
      </button>
    </div>
  );
};

export default MyStory;
