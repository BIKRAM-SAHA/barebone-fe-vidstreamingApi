import React from "react";
import { Link, useParams } from "react-router-dom";

function DownloadVid() {
  const { id } = useParams();
  return (
    <>
      <div>Download id: {id}</div>
      <Link
        to={`${process.env.REACT_APP_BACKEND_URL}/video/download/${id}`}
        download
      >
        <button>Download</button>
      </Link>
    </>
  );
}

export default DownloadVid;
