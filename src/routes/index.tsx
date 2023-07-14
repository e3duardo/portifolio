import { Routes, Route } from "react-router-dom";

import Resume from "pages/resume";
import Portfolio from "pages/portfolio";
import Blog from "pages/blog";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Resume />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
