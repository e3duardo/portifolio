import { Routes, Route } from "react-router-dom";

import Resume from "pages/Resume";
import Portfolio from "pages/Portfolio";
import Blog from "pages/Blog";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
