import "./App.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UploadVid from "./components/UploadVid";
import DownloadVid from "./components/DownloadVid";
import StreamVid from "./components/StreamVid";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <h1>Video Uploading, Downloading, Streaming App</h1>
        <h3>
          Navigation:
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </h3>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVid />} />
          <Route path="/download/:id" element={<DownloadVid />} />
          <Route path="/stream/:id" element={<StreamVid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
