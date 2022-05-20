import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import MyStory from "../components/MyStory/Mystory";

import { selectUserSpace } from "../store/user/selectors";

export default function MySpace() {
  const mySpace = useSelector(selectUserSpace);
  console.log("myspace", mySpace);
  return mySpace !== null ? (
    <div>
      <h1>{mySpace.title}</h1>
      <p>{mySpace.description}</p>
      <h2>My Stories</h2>
      <div style={{ border: "1px solid black", padding: 10, margin: 20 }}>
        {mySpace.stories.map((s) => (
          <MyStory
            name={s.name}
            content={s.content}
            image={s.imageUrl}
            id={s.id}
          />
        ))}
      </div>
    </div>
  ) : (
    <p>
      <Loading />
    </p>
  );
}
