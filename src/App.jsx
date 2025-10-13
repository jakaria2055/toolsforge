import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QRCodeGenerator from "./Tools/QRCodeGenerator";
import MediaPlayers from "./Tools/MediaPlayers";
import BlogPagination from "./Tools/BlogPagination";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qr-code" element={<QRCodeGenerator />} />
        <Route path="/media-player" element={<MediaPlayers />} />
        <Route path="/pagination" element={<BlogPagination />} />
      </Routes>
    </>
  );
};

export default App;
