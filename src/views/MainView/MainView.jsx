import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput/SearchInput";
import {
  fetchOompaLoompas,
  selectOompaLoompas,
} from "../../redux/slices/oompaLoompaSlice";
import MainList from "./MainList/MainList";
import MainTitle from "./MainTitle/MainTitle";
import './MainView.css';

const MainView = () => {
  const dispatch = useDispatch();
  const { results: oompaLoompas } = useSelector(selectOompaLoompas);

  useEffect(() => {
    if (!oompaLoompas) {
      dispatch(fetchOompaLoompas(1));
    }
  }, [dispatch, oompaLoompas]);

  return (
    <main className="main-view">
        <SearchInput items={oompaLoompas} />
        <MainTitle />
        <MainList items={oompaLoompas} />
    </main>
  );
};

export default MainView;
