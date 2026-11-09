import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout";
import Home from "../pages/Home";
import TutorsPage from "../pages/Tutors";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return <BrowserRouter><Routes>
    <Route element={<SiteLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/tutors" element={<TutorsPage/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route>
  </Routes></BrowserRouter>;
}