const StoryDetail = (props) => {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
      <img style={{ maxWidth: 200 }} src={props.image} alt="img" />
    </div>
  );
};

export default StoryDetail;
