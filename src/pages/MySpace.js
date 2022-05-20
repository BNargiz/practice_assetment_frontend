import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import MyStory from "../components/MyStory/Mystory";
import { newStoryCreated } from "../store/user/actions";

import { selectUserSpace } from "../store/user/selectors";

export default function MySpace() {
  const mySpace = useSelector(selectUserSpace);
  const dispatch = useDispatch();
  //set a form
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //
  // const dispatch = useDispatch();
  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();
    const newStory = {
      name,
      content,
      imageUrl,
    };

    dispatch(newStoryCreated(newStory));
    setName("");
    setContent("");
    setImageUrl("");
  };

  //
  // console.log("myspace", mySpace);
  return mySpace !== null ? (
    <div>
      <h1>{mySpace.title}</h1>
      <p>{mySpace.description}</p>
      <h2>My Stories</h2>

      <div style={{ border: "1px solid black", padding: 10, margin: 20 }}>
        {/* add button */}
        <button onClick={() => setFormOpen(!formOpen)}>Post a story</button>
        {formOpen && (
          <div>
            {/* addform */}
            <form onSubmit={submit}>
              <h2>Add a new story</h2>
              <p>
                <label>
                  Name:{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <label>
                  Content:{" "}
                  <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </label>
              </p>
              <p>
                <label>
                  ImageUrl:{" "}
                  <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </label>
                <div>
                  <img src={imageUrl} style={{ maxWidth: 200 }} />
                </div>
              </p>
              <p>
                <button type="submit">Add this story!</button>
              </p>
            </form>
          </div>
        )}
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
