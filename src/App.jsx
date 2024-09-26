import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home"));
const Services = lazy(() => import("./components/Services/Services"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
import SuspenseRoute from "./utils/SuspenseRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SuspenseRoute Component={Home} />} />
      <Route path="/about" element={<SuspenseRoute Component={About} />} />
      <Route
        path="/services"
        element={<SuspenseRoute Component={Services} />}
      />
      <Route path="/contacts" element={<SuspenseRoute Component={Contact} />} />
    </Routes>
  );
};

export default App;
