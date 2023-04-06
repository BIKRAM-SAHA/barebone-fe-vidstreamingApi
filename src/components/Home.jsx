import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [uploadedVids, setUploadedVids] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/video/all`)
      .then((res) => {
        setUploadedVids(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {uploadedVids.map((vidTitle) => {
        return (
          <div
            key={vidTitle}
            style={{ backgroundColor: "#ddd", margin: "10px" }}
          >
            <h4>{vidTitle}</h4>
            <Link to={`/download/${vidTitle}`}>Download</Link>
            <br />
            <Link to={`/stream/${vidTitle}`}>Stream</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
