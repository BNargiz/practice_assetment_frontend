import StoryDetail from "../Story/story";

const SpaceDetail = (props) => {
  const sortedStories = [...props.stories].sort(
    (story1, story2) => parseInt(story2.createdAt) - parseInt(story1.createdAt)
  );

  return (
    <div
      style={{
        backgroundColor: `${props.bck}`,
        color: `${props.color}`,
        margin: 20,
        padding: 20,
        textAlign: "center",
      }}
    >
      <h1>{props.title}</h1>
      <p>{props.description}</p>

      {sortedStories.map((story, i) => (
        <StoryDetail
          key={i}
          name={story.name}
          content={story.content}
          image={story.imageUrl}
        />
      ))}
    </div>
  );
};
export default SpaceDetail;
