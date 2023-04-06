import React from "react";
import { useParams } from "react-router-dom";

function StreamVid() {
  const { id } = useParams();
  return (
    <>
      <div>Streaming id: {id}</div>
      <video controls width={650} autoPlay>
        <source
          src={`${process.env.REACT_APP_BACKEND_URL}/video/stream/${id}`}
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default StreamVid;
