import style from "./Player.module.scss";
import "boxicons";
import { BsRepeat, BsList, BsRewindFill, BsFastForwardFill, BsPlayCircle } from "react-icons/bs";
import { BiDevices, BiVolumeFull, BiMicrophone } from "react-icons/bi";

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
                    <div><BsRepeat className={style.repeat_icon}/></div>
                    <div><BsRewindFill className={style.rewind_icon}/></div>
                    <div><BsPlayCircle className={style.play_icon}/></div>
                    <div><BsFastForwardFill className={style.forward_icon}/></div>
                    <div><BsList className={style.playlist_icon} /></div>
                </div>
                <div className={style.main_player_tools}>
                    <div><BiDevices className={style.devices_icon}/></div>
                    <div className={style.lyrics}><BiMicrophone className={style.microphone_icon}/>
                        <p className={style.icon_text}>Show lyrics</p>
                    </div>
                    <div><BiVolumeFull className={style.volume_icon} /></div>
                </div>
            </div>
        </section>
    )
}

export default Player;