import style from './App.module.scss';
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Library from "./components/Library/Library";
import Explore from "./components/Explore/Explore";
import TestingPage from "./components/TestingPage/TestingPage";
import Player from "./components/Player/Player";
import Artists from "./components/Explore/Artists/Artists";
import Albums from "./components/Explore/Albums/Albums";

function App() {

    let playlist = [
        {
            link: "1RH1rm06m9D4Dnh1yTFWck66BVo3MmC2z",
            author: "Beck",
            album: "Morning Phase",
            title: "Cycle",
            lyrics: null,
        },
        {
            link: "1_x0W8lFaNUM9VioFW2TJ2x-3JdL8ZAMK",
            author: "Beck",
            album: "Morning Phase",
            title: "Morning",
            lyrics: `
             Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae rerum
             sunt suscipit tempora tempore
             tenetur voluptates? Dolores!
             
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae`,
        },
        {
            link: "13COvQA9OHsSiIOrvQN4W9ilB9OvgCIww",
            author: "Beck",
            album: "Morning Phase",
            title: "Heart Is a Drum",
            lyrics: `
             Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae rerum
             sunt suscipit tempora tempore
             tenetur voluptates? Dolores!
             
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae`,
        },
        {
            link: "1PAqxk7eQiqTHvi9jVq6HDoov1Y2Uc7cH",
            author: "Beck",
            album: "Morning Phase",
            title: "Say Goodbye",
            lyrics: `
             Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae rerum
             sunt suscipit tempora tempore
             tenetur voluptates? Dolores!
             
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae`,
        },
        {
            link: "1WtFk0_9NUEWJA9rBZ5ztHMXOt5C7rjd3",
            author: "Beck",
            album: "Morning Phase",
            title: "Blue Moon",
            lyrics: `
             Lorem ipsum dolor sit amet,
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae rerum
             sunt suscipit tempora tempore
             tenetur voluptates? Dolores!
             
             Lorem ipsum dolor sit amet, 
             consectetur adipisicing elit.
             Asperiores aut, cum doloribus
             ducimus inventore ipsum magnam
             
             natus odio perferendis quae
             quibusdam repudiandae`,
        },
    ];

    return (
        <>
            <div className={style.app_wrapper}>
                <section className={style.main}>
                    <Navigation/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/library" element={<Library/>}/>
                        <Route path="/explore" element={<Explore/>}/>
                        <Route path="/artists/:styleId?" element={<Artists/>}/>
                        <Route path="/albums/:artistId?" element={<Albums/>}/>
                        <Route path="/test" element={<TestingPage/>}/>
                    </Routes>
                </section>
                <Player playlist={playlist}/>
            </div>
        </>
    );
}

export default App;
