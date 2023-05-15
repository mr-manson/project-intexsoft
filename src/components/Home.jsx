import style from "./Home.module.css";
import user from "./../assets/user.jpg";
import vinyl from "./../assets/vinyl.svg";
import recommend_01 from "./../assets/recommend-01.png";
import recommend_02 from "./../assets/recommend-02.png";
import recommend_03 from "./../assets/recommend-03.png";

const Home = () => {
    return (
        <>
            <div className={style.app_wrapper}>
                <section className={style.main}>
                    <div className={style.nav_main}>
                        <div className={style.menu}>
                            <ul className={style.menu_items}>
                                <li className={style.menu_item}><i className="bx bxl-spotify"></i></li>
                                <li className={style.menu_item}>
                                    <a href="#" className={style.active} >Home</a>
                                </li>
                                <li className={style.menu_item}>
                                    <a href="#" >Explore</a>
                                </li>
                                <li className={style.menu_item}>
                                    <a href="#" >Playlists</a>
                                </li>
                            </ul>
                        </div>
                        <div className={style.search}>
                            <i className="bx bx-search"></i>
                            <p className={style.icon_text}>Search</p>
                        </div>
                        <div className={style.user}>
                            <a href="#" className={style.user}>
                                <img src={user} alt="user"/>
                                <i className="bx bxs-down-arrow"></i>
                            </a>
                        </div>
                    </div>

                    <div className={style.main_content}>
                        <div className={style.recommend_items}>
                            <div className={style.recommend_item}>
                                <div className={style.album_pack}>
                                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                                    <img
                                        className={style.cover}
                                        src={recommend_01}
                                        alt={style.cover}
                                    />
                                </div>
                                <div className={style.recommend_item_playbtn}>
                                    <a href="#" className={style.play}><i className="bx bx-play-circle"></i></a>
                                </div>
                                <div className={style.recommend_item_content}>
                                    <div className={style.recommend_item_content_title}>One Love</div>
                                    <div className={style.recommend_item_content_text}>
                                        The best in old & new Reggae
                                    </div>
                                    <div className={style.recommend_item_content_stats}>
                                        <i className="bx bxl-spotify"></i> Spotify - 2 075 767 likes - 110
                                        tracks, 7h 12m
                                    </div>
                                </div>
                            </div>
                            <div className={`${style.recommend_item} ${style.active}`}>
                                <div className={style.album_pack}>
                                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                                    <img
                                        className={style.cover}
                                        src={recommend_02}
                                        alt="cover"
                                    />
                                </div>
                                <div className={style.recommend_item_playbtn}>
                                    <a href="#" className={style.play}><i className="bx bx-play-circle"></i></a>
                                </div>
                                <div className={style.recommend_item_content}>
                                    <div className={style.recommend_item_content_title}>
                                        Best Indie of 2022
                                    </div>
                                    <div className={style.recommend_item_content_text}>
                                        Our editorial picks of this year's best indie songs.
                                        #SpotifyWrapped
                                    </div>
                                    <div className={style.recommend_item_content_stats}>
                                        <i className="bx bxl-spotify"></i> Spotify - 59 737 likes - 75
                                        tracks, 4h 19m
                                    </div>
                                </div>
                            </div>
                            <div className={style.recommend_item}>
                                <div className={style.album_pack}>
                                    <img className={style.vinyl} src={vinyl} alt="vinyl"/>
                                    <img
                                        className={style.cover}
                                        src={recommend_03}
                                        alt="cover"
                                    />
                                </div>
                                <div className={style.recommend_item_playbtn}>
                                    <a href="#" className={style.play}><i className="bx bx-play-circle"></i></a>
                                </div>
                                <div className={style.recommend_item_content}>
                                    <div className={style.recommend_item_content_title}>Fresh Finds Rock</div>
                                    <div className={style.recommend_item_content_text}>
                                        Fresh rock from independent artists every Wednesday
                                    </div>
                                    <div className={style.recommend_item_content_stats}>
                                        <i className="bx bxl-spotify"></i> Spotify - 116 972 likes - 100
                                        tracks, 5h 26m
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={style.recently_items}>Recently listened</div>

                        <div className={style.recently_items}>Recommended playlists</div>
                    </div>
                </section>

                <section className={style.player}>
                    <nav className={style.nav_player}>
                        <div className={style.nav_player_left_items}>
                            <a href="#" className={style.nav_player_item_link}>
                                <i className="bx bxs-disc"></i>
                                <p className={style.icon_text}>Discover</p>
                            </a>
                        </div>
                        <div className={style.nav_player_right_items}>
                            <a href="#" className={style.nav_player_item_link}>
                                <i className="bx bx-download"></i>
                            </a>
                            <a href="#" className={style.nav_player_item_link}>
                                <i className="bx bx-fullscreen"></i>
                            </a>
                        </div>
                    </nav>
                    <div className={style.main_player}>
                        <div className={style.main_player_status}>Now playing</div>
                        <div className={style.main_player_cover}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/5/5a/Beck_Morning_Phase.jpg"
                                alt="cover"
                            />
                        </div>
                        <div className={style.main_player_info}>
                            <div className={style.main_player_info_track}>Morning</div>
                            <div className={style.main_player_info_artist}>Beck</div>
                        </div>
                        <div className={style.main_player_progress}>
                            <div className={style.start}>0:32</div>
                            <div className={style.progress_bar}></div>
                            <div className={style.finish}>5:19</div>
                        </div>
                        <div className={style.main_player_controls}>
                            <a href="#" className={style.repeat}><i className="bx bx-repeat"></i></a>
                            <a href="#" className={style.rewind}><i className="bx bx-rewind"></i></a>
                            <a href="#" className={style.play}><i className="bx bx-play"></i></a>
                            <a href="#" className={style.forward}><i className="bx bx-fast-forward"></i></a>
                            <a href="#" className={style.playlist}><i className="bx bxs-playlist"></i></a>
                        </div>
                        <div className={style.main_player_tools}>
                            <a href="#" className={style.devices}><i className="bx bxs-devices"></i></a>
                            <a href="#" className={style.lyrics}>
                                <i className="bx bx-microphone"></i>
                                <p className={style.icon_text}>Show lyrics</p>
                            </a>
                            <a href="#" className={style.volume}><i className="bx bx-volume-full"></i></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home;