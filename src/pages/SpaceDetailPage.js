import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpaceDetail from "../components/SpaceDetail/spacedetail";
import { fetchSpacesbystory } from "../store/detailpage/action";
import { selectSpaceDetail } from "../store/detailpage/selector";

export default function SpaceDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const spacebystory = useSelector(selectSpaceDetail);

  useEffect(() => {
    dispatch(fetchSpacesbystory(id));
  }, [dispatch, id]);
  return spacebystory !== null ? (
    <div>
      <SpaceDetail
        key={spacebystory.id}
        title={spacebystory.title}
        description={spacebystory.description}
        stories={spacebystory.stories}
        bck={spacebystory.backgroundColor}
        color={spacebystory.color}
        // storyName={spacebystory.stories.map((s) => s.name)}
        // storyContent={spacebystory.stories.map((s) => s.content)}
        // storyImage={spacebystory.stories.map((s) => s.imageUrl)}
      />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
