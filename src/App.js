import style from './App.module.scss';
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Library from "./components/Library/Library";
import Explore from "./components/Explore/Explore";
import TestingPage from "./components/TestingPage/TestingPage";
import Player from "./components/Player/Player";

function App() {

    let playlist = [
        {
            link: "1RH1rm06m9D4Dnh1yTFWck66BVo3MmC2z",
            author: "Beck",
            album: "Morning Phase",
            title: "Cycle",
        },
        {
            link: "1_x0W8lFaNUM9VioFW2TJ2x-3JdL8ZAMK",
            author: "Beck",
            album: "Morning Phase",
            title: "Morning",
        },
        {
            link: "13COvQA9OHsSiIOrvQN4W9ilB9OvgCIww",
            author: "Beck",
            album: "Morning Phase",
            title: "Heart Is a Drum",
        },
        {
            link: "1PAqxk7eQiqTHvi9jVq6HDoov1Y2Uc7cH",
            author: "Beck",
            album: "Morning Phase",
            title: "Say Goodbye",
        },
        {
            link: "1WtFk0_9NUEWJA9rBZ5ztHMXOt5C7rjd3",
            author: "Beck",
            album: "Morning Phase",
            title: "Blue Moon",
        },
    ];

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
          <Player playlist={playlist}/>
        </div>
      </>
  );
}

export default App;
