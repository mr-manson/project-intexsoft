import style from "./Home.module.scss";
import Player from "./Player/Player";
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";

const Home = () => {
    return (
        <>
            <div className={style.app_wrapper}>
                <section className={style.main}>
                    <Navigation/>
                    <Main/>
                </section>
                <Player/>
            </div>
        </>
    )
}

export default Home;