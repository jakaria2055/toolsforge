import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QRCodeGenerator from "./Tools/QRCodeGenerator";
import MediaPlayers from "./Tools/MediaPlayers";
import BlogPagination from "./Tools/BlogPagination";
import ReChart from "./Tools/ReChart";
import Camera from "./Tools/Camera";
import ImgToPDF from "./Tools/ImgToPDF";
import XLFileReader from "./Tools/XLFileReader";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QRCodeGenerator />} />
        <Route path="/media-player" element={<MediaPlayers />} />
        <Route path="/pagination" element={<BlogPagination />} />
        <Route path="/rechart" element={<ReChart />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/image-pdf" element={<ImgToPDF />} />
        <Route path="/xl-reader" element={<XLFileReader />} />
      </Routes>
    </>
  );
};

export default App;
