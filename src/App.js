import style from './App.module.scss';
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Library from "./components/Library/Library";
import Explore from "./components/Explore/Explore";
import TestingPage from "./components/TestingPage/TestingPage";
import Player from "./components/Player/Player";

function App() {
  return (
      <>
        <div className={style.app_wrapper}>
          <section className={style.main}>
            <Navigation/>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/library" element={<Library/>} />
              <Route path="/explore" element={<Explore/>} />
              <Route path="/test" element={<TestingPage/>} />
            </Routes>
          </section>
          <Player/>
        </div>
      </>
  );
}

export default App;
