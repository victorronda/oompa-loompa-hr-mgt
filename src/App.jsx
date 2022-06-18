import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainView from "./views/MainView/MainView";
import DetailView from "./views/DetailView/DetailView";
import NotFoundView from "./views/NotFoundView/NotFoundView";
import NavBar from "./components/UI/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="oompa-loompa/:oompaLoompaId" element={<DetailView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </>
  );
}

export default App;
