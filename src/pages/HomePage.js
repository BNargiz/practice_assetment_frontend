import HeroBanner from "../components/HeroBanner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/homepage/action";
import { selectSpaces } from "../store/homepage/selector";
import Space from "../components/Space/space";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  console.log(spaces);
  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <HeroBanner>
      <h1>
        {spaces.map((s) => (
          <Space
            key={s.id}
            id={s.id}
            title={s.title}
            bkcolor={s.backgroundColor}
            color={s.color}
          />
        ))}
      </h1>
    </HeroBanner>
  );
}
