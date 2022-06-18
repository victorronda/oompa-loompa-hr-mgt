import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
  fetchOompaLoompas,
  selectOompaLoompas,
} from "../../redux/slices/oompaLoompaSlice";
import MainTitle from "./MainTitle/MainTitle";

const MainView = () => {
  const dispatch = useDispatch();
  const { results: oompaLoompas } = useSelector(selectOompaLoompas);

  useEffect(() => {
    if (!oompaLoompas) {
      dispatch(fetchOompaLoompas(1));
    }
  }, [dispatch, oompaLoompas]);

  return (
    <div>
        <SearchInput />
        <MainTitle />
      {oompaLoompas &&
        oompaLoompas.map((ol) => (
          <div key={ol.first_name}>{ol.first_name}</div>
        ))}
    </div>
  );
};

export default MainView;
