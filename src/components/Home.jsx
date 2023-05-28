import style from "./Home.module.scss";
import Player from "./Player/Player";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import { Route, Routes } from "react-router-dom";
import Library from "./Library/Library";
import Playlists from "./Playlists/Playlists";
import TestingPage from "./Testingpage/TestingPage";

const Home = () => {
    return (
        <>
            <div className={style.app_wrapper}>
                <section className={style.main}>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Main/>} />
                        <Route path="/explore" element={<Library/>} />
                        <Route path="/playlists" element={<Playlists/>} />
                        <Route path="/test" element={<TestingPage/>} />
                    </Routes>
                </section>
                <Player/>
            </div>
        </>
    )
}

export default Home;