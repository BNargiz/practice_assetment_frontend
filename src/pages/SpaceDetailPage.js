import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SpaceDetail from "../components/SpaceDetail/spacedetail";
import { fetchSpacesbystory } from "../store/detailpage/action";

export default function SpaceDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpacesbystory(id));
  }, [dispatch, id]);
  return (
    <div>
      <SpaceDetail />
    </div>
  );
}
