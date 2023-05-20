import style from "./Player.module.scss";
import "boxicons";

const Player = () => {
    return(
        <section className={style.player}>
            <nav className={style.nav_player}>
                <div className={style.nav_player_left_items}>
                    <a href="#" className={style.nav_player_item_link}>
                        <box-icon name='disc' color='#ffffff' ></box-icon>
                        <p className={style.icon_text}>Discover</p>
                    </a>
                </div>
                <div className={style.nav_player_right_items}>
                    <a href="#" className={style.nav_player_item_link}>
                        <box-icon name='download' color='#ffffff' ></box-icon>
                    </a>
                    <a href="#" className={style.nav_player_item_link}>
                        <box-icon name='fullscreen' color='#ffffff' ></box-icon>
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
                    <a href="#" className={style.repeat}><box-icon name='repeat' color='#ffffff' ></box-icon></a>
                    <a href="#" className={style.rewind}><box-icon name='rewind' color='#ffffff' ></box-icon></a>
                    <a href="#" className={style.play}><box-icon name='play-circle' color='#ffffff' ></box-icon></a>
                    <a href="#" className={style.forward}><box-icon name='fast-forward' color='#ffffff' ></box-icon></a>
                    <a href="#" className={style.playlist}><box-icon name='playlist' type='solid' color='#ffffff' ></box-icon></a>
                </div>
                <div className={style.main_player_tools}>
                    <a href="#" className={style.devices}><box-icon name='devices' color='#ffffff' ></box-icon></a>
                    <a href="#" className={style.lyrics}>
                        <box-icon name='microphone' color='#ffffff' ></box-icon>
                        <p className={style.icon_text}>Show lyrics</p>
                    </a>
                    <a href="#" className={style.volume}><box-icon name='volume-full' color='#ffffff' ></box-icon></a>
                </div>
            </div>
        </section>
    )
}

export default Player;