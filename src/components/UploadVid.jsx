import axios from "axios";
import React, { useRef, useState } from "react";

function UploadVid() {
  const [video, setVideo] = useState("");
  const vidRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("video", video);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/video/upload`, formData)
      .then((res) => {
        alert("Submitted Successfully with id " + res.data);
        console.log(res.data);
        setVideo("");
        vidRef.current.value = "";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <form>
        <label htmlFor="video">Upload Video</label>
        <br />
        <input
          type="file"
          accept="video/mp4"
          id="video"
          name="video"
          onChange={(e) => {
            setVideo(e.target.files[0]);
          }}
          ref={vidRef}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default UploadVid;
