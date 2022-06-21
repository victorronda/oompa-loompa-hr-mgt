import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchOompaLoompaById,
  selectOompaLoompa,
} from "../../redux/slices/oompaLoompaSlice";
import DetailCard from "./DetailCard/DetailCard";
import './DetailView.css';

const DetailView = () => {
  const dispatch = useDispatch();
  const { oompaLoompaId } = useParams();
  const oompaLoompa = useSelector(selectOompaLoompa);

  useEffect(() => {
      dispatch(fetchOompaLoompaById(oompaLoompaId));
  }, [dispatch, oompaLoompaId]);

  return (
    <div className="detail-view">
      <DetailCard oompaLoompa={oompaLoompa} />
    </div>
  )
};

export default DetailView;
